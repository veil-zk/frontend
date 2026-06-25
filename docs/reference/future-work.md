# Future work

Veil's core loop is complete and trustless. These are the directions that would turn the proof-of-concept into a product.

## Level 2 — encrypt the witness inside the zkVM

**The idea.** Today the proof commits a *fingerprint* of the secret (Level 1.5). Level 2 goes further: the guest **encrypts the secret itself** to the creator's public key *inside the zkVM* and commits the ciphertext. The proof then guarantees not only "the bug is real" but "this ciphertext is the encryption of the real, valid exploit."

**Why it's powerful.** It makes the reveal **atomic and unfakeable on-chain** without a trusted confirmer and without ever exposing the exploit publicly. It would fully remove the griefing trade-off described in [limitations](limitations.md).

**Why it's deferred.** Running X25519 encryption inside the zkVM is heavy:

* proving cost (RAM + time) multiplies — and we already brush against the RAM ceiling with the trivial guest;
* the in-circuit randomness (nonce/ephemeral key) must be fed in deterministically and carefully;
* the crypto library must compile to the constrained guest environment;
* a single byte wrong and the ciphertext won't decrypt — crypto is unforgiving and hard to debug.

A practical path is to offload proving to a remote prover (e.g. Bonsai), but that sends the secret to a third party, which conflicts with Veil's privacy premise unless self-hosted. So Level 2 is the headline future feature, with proving cost as the gating risk.

## Atomic / on-chain reveal storage

A lighter step than full Level 2: store the encrypted reveal **on-chain as part of `claim()`** so the creator doesn't depend on a manual off-chain handoff. The creator still needs their private key to read it. Trade-off: more on-chain storage, and the ciphertext lives publicly (encrypted) forever.

## Shared guest/victim spec

Generate both the victim contract's invariant and the guest's check from a **single shared crate or spec**, so they can never drift out of sync. Removes a class of "proved the wrong thing" bugs.

## Bind `bounty_id` into the journal

Commit the `bounty_id` (or a per-bounty nonce) in the guest so a proof can't be reused across two bounties that share an `image_id`.

## AI-assisted guest generation (prototype exists)

A flow where the creator enters the contract address and an AI agent drafts the guest logic automatically; the creator reviews, edits, and compiles. The AI only writes a draft — correctness remains the human's responsibility at the edit + compile step.

## No-install compile service (prototype exists)

A backend that compiles a creator's guest source and returns the ImageID, so creators don't need the local toolchain. Honest trade-off: the creator trusts the server to produce the correct ImageID. A reproducible build would let anyone verify the output — the right long-term answer. The local-compile path always remains available for full control.

## Forfeit-to-neutral option

Offer creators a choice to send forfeited stakes to a neutral address/burn instead of to themselves, removing any incentive to grief in the first place.
