# Architecture

Veil is a monorepo with three areas: the on-chain contracts, the zero-knowledge layer, and the frontend. A small backend provides optional convenience features.

## Repo layout

```
Veil/
├── contracts/                 # Soroban smart contracts (Rust → Wasm)
│   ├── victim/                #   - the vulnerable target (bug planted on purpose)
│   └── bounty-verifier/       #   - the registry: escrow + proof verification + stake/reveal
├── zk/                        # ZK layer (RISC Zero)
│   ├── methods/guest/         #   - guest program: the exploit-checking logic (runs in zkVM)
│   └── host/                  #   - host program: runs proving, exports receipt + reveal.json
├── frontend/                  # Next.js + TypeScript + Tailwind (two-actor UI)
├── backend/                   # optional: AI guest-gen + no-install compile service
├── scripts/                   # deploy / seed / e2e helpers
└── docs/                      # this documentation
```

## Components and how they talk

```
                         ┌─────────────────────────────┐
                         │  Frontend (Next.js)          │
                         │  creator UI · hunter UI      │
                         └───────┬──────────────┬───────┘
                                 │ Freighter    │ reads
                                 │ (sign txns)  │ (simulate)
                                 ▼              ▼
        ┌────────────────────────────────────────────────────┐
        │  Bounty Registry  (contracts/bounty-verifier)        │
        │  create_bounty · fund · claim · confirm_reveal ·     │
        │  forfeit_stake · prove_reveal · withdraw             │
        └───────┬───────────────────────────┬─────────────────┘
                │ verify(seal, image_id,     │ transfer
                │        journal_digest)     ▼
                ▼                      [ XLM / SAC token ]
   ┌─────────────────────────────┐
   │ RISC Zero verifier router    │  (NethermindEth/stellar-risc0-verifier)
   │ → Groth16 verifier (BN254)   │
   └─────────────────────────────┘

   Off-chain, on the hunter's machine:
   ┌─────────────────────────────────────────────┐
   │ zk/host  →  runs  zk/methods/guest  in zkVM   │
   │ secret (a,b,salt) → receipt (journal+seal)    │
   └─────────────────────────────────────────────┘
```

## Trust boundaries

* **On the hunter's machine (private):** the secret input and the proving process. Nothing secret leaves here. The host emits a public `proof.json` (uploaded) and a secret `reveal.json` (kept).
* **On-chain (public, trustless):** proof verification, escrow, stake accounting, and the committed fingerprint. No secrets are stored here.
* **Off-chain handoff (private):** the encrypted reveal travels from hunter to creator via any channel they choose. Veil never stores or transmits it. Only the creator's private key can open it.

## Why a registry (and not one contract per bounty)

The `bounty-verifier` contract is a **registry**: one deployed contract holds many bounties keyed by `bounty_id` (a `Map`-like store). This lets the platform host bounties for many different contracts and many different bug types — each bounty pins its own `(victim_id, image_id, stake, reveal_window)`.

A different bug type needs a different guest program (and therefore a different `image_id`), but the registry contract itself never changes.

## Tech stack

| Area | Tech |
| --- | --- |
| ZK | RISC Zero zkVM (Rust guest/host), Groth16 seal via `risc0-ethereum-contracts` |
| On-chain verify | [NethermindEth/stellar-risc0-verifier](https://github.com/NethermindEth/stellar-risc0-verifier) router + Groth16 verifier |
| Contracts | Rust + `soroban-sdk`, deployed to Stellar testnet |
| Frontend | Next.js, TypeScript, Tailwind, `@stellar/stellar-sdk`, Freighter wallet |
| Reveal crypto | X25519 sealed box (`tweetnacl`), SHA-256 fingerprint |
