# Zero-knowledge, in plain words

You don't need a cryptography degree to understand Veil. Here is the whole idea in one story.

## The magic robot

Imagine Mr. Budi has a vault he believes is unbreakable. He offers: *"Whoever finds a way to open it gets 100 coins."*

A hunter finds the trick. But there's the classic standoff: if she tells Budi the trick first, he might say "that's obvious, no reward." If Budi pays first, she might take the coins and vanish. Nobody trusts anybody.

Now add a **magic robot** with two superpowers:

1. It can run the hunter's trick *inside its own belly* (where nobody can see) and then announce to everyone: **"I checked it myself — this trick really does open Budi's vault. I swear."** — without revealing the trick.
2. Its oath cannot be faked. That is the mathematics of zero-knowledge.

Budi trusts the robot's oath and pays. The trick stays secret. That robot is **RISC Zero**, and the oath is a **zero-knowledge proof**.

## How RISC Zero makes this concrete

The wonderful thing about RISC Zero is that you write **ordinary Rust code**, not cryptographic circuits. There are two programs:

* **Guest** — the code that runs *inside* the zkVM (the robot's belly). It reads the secret input, checks whether it breaks the contract, and commits some public outputs. This is the part that gets proven.
* **Host** — the code that runs the guest and produces the proof. It lives on the hunter's machine.

When the host runs the guest, it produces a **receipt**:

| Part | Meaning | Public? |
| --- | --- | --- |
| **journal** | the public outputs the guest chose to commit | ✅ yes |
| **seal** | the cryptographic proof itself (Groth16) | ✅ yes |

And one more crucial value:

* **ImageID** — a hash of the compiled guest program. It pins down *exactly which program was run*. The verifier checks the proof against a known `image_id`, so a hunter can't swap in a different (easier) program.

## What's secret and what's public

The hunter feeds the guest a secret input (for our demo: two factors `a` and `b`). The guest checks the rule and then commits **only public things** to the journal — never the secret. So:

* `a`, `b` → **never committed** → stay secret. ✅
* `victim_id`, a fingerprint of the secret → committed → public, but harmless.

The proof says *"I ran the official rule on some input and it passed"* without saying what the input was.

## How it gets verified on Stellar

The hunter sends `journal` + `seal` to the Veil registry contract. The contract:

1. computes `journal_digest = sha256(journal)` on-chain, then
2. calls the **RISC Zero verifier router** (a contract from Nethermind already deployed on Stellar) to check the seal against the bounty's `image_id` and the digest.

If the proof is invalid, the verifier traps and the whole transaction reverts — no payout. If valid, the reward is released. **This is the "ZK verified inside a Stellar smart contract" requirement of the hackathon, satisfied for real.**

## Two modes while developing

* `RISC0_DEV_MODE=1` — fast, **skips** real proving. Used for iterating on logic. Produces an invalid (fake) receipt — never use for real payouts.
* `RISC0_DEV_MODE=0` — real Groth16 proving (needs Docker, more RAM, a few minutes). Used for the actual demo and on-chain claims.

Next: how Veil makes the secret reveal *unfakeable* → [Commit–reveal fingerprint](commit-reveal-fingerprint.md).
