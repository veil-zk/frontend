# Roadmap

A time-phased view of where Veil is and where it's going. For the full catalogue of ideas grouped by theme, see [Future work](future-work.md).

## Vision

> A trustless, privacy-preserving disclosure layer for smart contracts: researchers are paid the instant their finding is cryptographically proven, and creators are guaranteed the information they need to fix the flaw — with no intermediary anyone has to trust.

The path there is a steady widening of two axes: **what bugs can be expressed**, and **how trustless and private the disclosure is**.

---

## Phase 0 — Shipped (hackathon PoC) ✅

The complete trustless loop, working on Stellar testnet.

* ZK proof-of-exploit (RISC Zero), verified **on-chain** via the Nethermind verifier.
* Multi-bounty **registry** with escrow; on-chain title/description.
* **Level 1.5** commit–reveal fingerprint (unfakeable reveal).
* **Stake-at-claim** + `confirm_reveal` + `forfeit_stake`.
* **Escape hatch** (`prove_reveal`) — trustless anti-griefing.
* Two-actor frontend (creator + hunter) with Freighter.
* Prototypes: AI guest-gen, no-install compile service.

Scope today: **pure, deterministic, mathematical** bugs (arithmetic/logic invariants).

---

## Phase 1 — Near-term (hardening + first coverage jump)

Make the existing protocol airtight and take the first big step beyond pure-math bugs.

* **Stateful bugs via public-input injection** — feed chain state/price/timestamp to the guest, verify it on-chain. *(The biggest coverage unlock — see [future work §1a](future-work.md#1a-inject-external-context-as-public-input-verify-on-chain).)*
* **Anti-frontrunning** — bind the claimer's address into the proof.
* **`bounty_id` binding** — prevent proof reuse across bounties sharing an `image_id`.
* **Atomic on-chain reveal storage** — remove the manual ciphertext handoff.
* **Reproducible compile** — make the no-install ImageID verifiable, not trusted.
* **Event-based indexer** — scalable bounty listing.
* **Guest template library** — audited, reusable guests per bug class (overflow, access-control, rounding…).
* **Gasless claims** — sponsor the claim tx so hunters don't need XLM.

---

## Phase 2 — Mid-term (stronger guarantees + product)

* **Storage / inclusion proofs** — bind an exploit to **real on-chain state at an exact ledger** (even historical / cross-contract) via Merkle proofs — the bridge from pure-math to genuinely stateful bugs.
* **Level 2 reveal** — encrypt the witness *inside* the zkVM → atomic, private, trustless reveal that removes the griefing trade-off entirely.
* **Auditor attestations on guests** — trusted auditors sign that a guest faithfully captures a contract's invariant → closes the "wrong/malicious guest" trust point.
* **Coordinated-disclosure timelock** — on-chain grace window so owners can patch before public reveal.
* **Private / decentralized proving (TEE / MPC)** — prove without local hardware **and** without leaking the secret.
* **Severity tiers & crowdfunded / DAO bounty pools** — tiered rewards by proven impact; communities underwrite their own security.
* **AI patch suggestion** — after the reveal, an AI drafts a concrete fix (closes the loop: prove → reveal → patch).
* **Reputation & richer claims** — hunter reputation, partial rewards, multi-submission handling.
* **Dispute/arbitration fallback** — opt-in safety net for high-value bounties.
* **Mainnet + security audit** — escrow, stake accounting, verifier integration.

---

## Phase 3 — Long-term / research (any deterministic bug)

* **In-zkVM contract simulation** — execute a model of the victim inside the guest to prove **interactive** bugs (reentrancy, call-ordering, multi-step).
* **Recursive / multi-transaction proofs** — prove exploits that need a **sequence of transactions** as one succinct proof.
* **WASM interpreter in-guest** — load the victim's **actual Soroban bytecode** and run the attack in the zkVM, eliminating guest↔victim drift. The "holy grail": any deterministic-given-state bug becomes provable.
* **Cross-chain** — the same proof-of-exploit pattern for other smart-contract platforms (e.g. EVM), beyond the current Stellar/Soroban scope.

---

## How the axes widen

| | Phase 0 | Phase 1 | Phase 2 | Phase 3 |
| --- | --- | --- | --- | --- |
| **Bug coverage** | pure math | + stateful (public input) | + stateful (storage proofs) | + interactive (simulation, recursive) |
| **Reveal trust** | fingerprint + stake + escape hatch | + atomic on-chain | + Level 2 (in-zkVM) | |
| **Maturity** | testnet PoC | hardened | mainnet + audit | research |
