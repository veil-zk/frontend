# How Veil works

Veil has **two actors** and a single trustless loop between them.

* **Bounty creator** — locks a reward against a deployed contract and publishes the rule that defines "a valid exploit."
* **Bug hunter** — finds the secret input that breaks the contract, proves it in zero-knowledge, claims the reward, and reveals the fix to the creator.

## The full loop

```
CREATOR                                           HUNTER
   │                                                 │
   │ 1. open bounty (lock reward, publish image_id)  │
   ▼                                                 │
[ Bounty Registry on Stellar ]                       │
   │                                                 │ 2. find secret input
   │                                                 ▼
   │                                  3. run RISC Zero host LOCALLY
   │                                     → receipt (journal + seal)
   │                                     → reveal.json (a, b, salt) stays secret
   │                                                 │
   │           4. claim(journal, seal) + stake       │
   │  ◄──────────────────────────────────────────────
   ▼
[ Registry verifies proof via RISC Zero router ] ── valid? ──► reward to hunter
   │                                                            stake locked
   │                                                 │
   │           5. encrypted reveal (off-chain)       │
   │  ◄──────────────────────────────────────────────
   │ 6. decrypt + verify fingerprint → confirm       │
   ▼                                                 ▼
   stake returned to hunter                    creator can now fix the bug
```

## Step by step

1. **Open the bounty.** The creator calls `create_bounty()` on the registry with the victim contract address, the guest **ImageID** (the hash of the open-source rule that defines the exploit), a reward, a stake amount, and a reveal deadline. Then `fund()` locks the reward in escrow. *(See the [creator guide](../guides/creator-guide.md).)*

2. **Find the exploit.** The hunter studies the victim contract and the published guest logic, and discovers a secret input that breaks the contract's invariant.

3. **Prove it locally.** The hunter runs the RISC Zero **host** program *on their own machine*. It executes the **guest** (the exploit-checking logic) against the secret input and produces a **receipt** = `journal` (public outputs) + `seal` (the Groth16 proof). The secret input never leaves the machine. The host also writes `reveal.json` (the secret `a, b, salt`) — used later, never uploaded.

4. **Claim + stake.** The hunter submits `journal` and `seal` to `claim()` and locks a stake, in a single transaction. The registry computes `sha256(journal)` on-chain and calls the **RISC Zero verifier router** to check the proof against the bounty's `image_id`. If valid: the reward transfers to the hunter and the stake is held.

5. **Reveal privately.** The hunter encrypts the exploit (`reveal.json`) to the creator's public key and sends the ciphertext off-chain. Only the creator can read it.

6. **Confirm.** The creator decrypts the reveal and the app **verifies its fingerprint matches** the one committed inside the proof (so the hunter cannot send a fake). The creator calls `confirm_reveal()` and the stake returns to the hunter. The creator now has the exact exploit and can patch the contract.

## What keeps everyone honest

* **The reward is released by the proof, not by trust.** The contract pays the instant the ZK proof verifies on-chain.
* **The reveal cannot be faked.** The proof commits a fingerprint of the secret; a fake reveal won't match. See [commit–reveal](../concepts/commit-reveal-fingerprint.md).
* **The reveal cannot be skipped.** The hunter's stake is only returned when they reveal. See [stake & reveal](../concepts/stake-and-reveal.md).
* **The creator cannot grief.** If the creator refuses to confirm a valid reveal, the hunter can reveal on-chain to reclaim the stake (the [escape hatch](../concepts/stake-and-reveal.md#the-escape-hatch)).

## Why ZK is load-bearing

Remove the zero-knowledge proof and step 3–4 become impossible: the hunter would have to disclose the exploit to prove it, which is the very thing the whole system exists to avoid. ZK is the foundation, not a feature.
