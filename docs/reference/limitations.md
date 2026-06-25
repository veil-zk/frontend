# Limitations & what's mocked

Veil is a hackathon proof-of-concept. We are explicit about every simplification — being honest about trade-offs is part of the design, not an afterthought.

## What's mocked for the demo

| Mocked | Why | What's real underneath |
| --- | --- | --- |
| **The bug is planted on purpose** | We need a known, simple, *purely mathematical* invariant to keep the guest faithful and deterministic | The proof that this bug exists is real and verified on-chain |
| **One team plays both actors** | No second party available for a demo | The creator and hunter flows are fully separate code paths and accounts; nothing about the protocol assumes they're the same person |
| **Reveal handoff is manual** | The encrypted reveal is copy-pasted from hunter to creator | The encryption (X25519 sealed box) and fingerprint verification are real; only the *transport* is manual |

Everything else — the zkVM proving, the Groth16 seal, the on-chain verification through the Nethermind router, the escrow, the stake accounting, and the payouts — runs for real on Stellar testnet.

## Design limitations (and how we handle them)

### The bug must be pure math

The exploit-checking logic must be re-implementable inside the zkVM, so it must be **deterministic and pure**: no database, no other contracts, no time, no randomness, no external state. The moment the rule touches any of those, the guest can't reproduce it. This is a real constraint on what kinds of bugs Veil can express today.

### Guest and victim must stay in sync

The guest logic must exactly equal the victim contract's invariant. If they drift, the proof proves a bug in the wrong copy. Today this is maintained by hand; a shared spec/crate would make it automatic (future work).

### The reveal verifier is the creator (privacy vs. trust)

Because the reveal is private, only the creator can verify it off-chain — the contract can't, without making the exploit public. This creates a **griefing** vector: a creator could refuse to confirm a valid reveal to keep the stake.

We mitigate this with the **on-chain escape hatch** (`prove_reveal`): if the creator stalls, the hunter reveals on-chain to reclaim the stake. The residual cost is that this makes the exploit public — acceptable, since it only happens in response to a griefing creator. A fully private, trustless, griefing-proof reveal needs encryption *inside* the zkVM ("Level 2" — see [future work](future-work.md)).

### Proof reuse across identical bounties

A proof commits the `victim_id` and a fingerprint, not the `bounty_id`. Two bounties with the same `image_id` and victim could in principle accept the same proof. For distinct challenges this is a non-issue (different `image_id`); binding `bounty_id` into the journal would close it fully.

### Proving cost

Real Groth16 proving is RAM-hungry. On a 16 GB laptop the current (simple) guest already pushes WSL near its memory limit. This is the main reason heavier in-zkVM cryptography is deferred.

## What we explicitly do NOT do

* We never store the exploit on a server, in a database, or on-chain. Privacy is preserved by construction.
* We never hand-roll cryptographic verification — we use the official RISC Zero verifier on Stellar.
* We never send the hunter's secret input anywhere; proving is local.
