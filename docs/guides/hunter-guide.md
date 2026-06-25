# For bug hunters

You are the party who finds the exploit, proves it privately, claims the reward, and reveals the fix to the creator.

## 1. Pick a bounty and read the rule

Browse open bounties in the UI. Open one and read its description and the published guest logic — that tells you exactly **what counts as a valid exploit** ("you win if you can show inputs that…").

## 2. Find the secret input

Study the victim contract until you find an input that breaks its invariant. For the demo factoring guard, the secret is a non-trivial factor pair of 1,000,000 — e.g. `a = 1000, b = 1000`.

## 3. Generate the proof — on your own machine

This is where the magic happens, and it happens **locally** so your secret never leaves your computer.

```bash
cd zk
RISC0_DEV_MODE=0 cargo run --release --bin host -- 1000 1000
```

This produces two files:

| File | Use |
| --- | --- |
| `proof.json` | **public** — you upload this to claim. Contains `image_id`, `journal`, `seal`. |
| `reveal.json` | **secret** — `{a, b, salt}`. You'll encrypt this to the creator later. **Never upload it.** |

> Don't have the RISC Zero toolchain? The project can ship a prebuilt prover binary or guest+host bundle so you only provide your secret input. Proving still runs on your machine.

## 4. Claim + stake

1. Connect Freighter (an account with enough XLM for the stake + fees).
2. Open the bounty → **Submit** → upload **`proof.json`** → **Claim**.
3. Approve the single transaction. It atomically: verifies your proof on-chain, **locks your stake**, and **pays you the reward**.

Your balance increases by roughly `reward − stake` (the stake is held, not spent). The success screen and the bounty Detail page show the staked amount.

## 5. Reveal the exploit (to get your stake back)

On the success screen or the bounty's **Detail** page (the **🔒 Reveal your exploit** panel):

1. **Load `reveal.json`** (the creator's public key is auto-filled from the bounty).
2. Click **Encrypt** → **copy the ciphertext**.
3. Send the ciphertext to the creator through any channel (email, chat). Only they can decrypt it.

When the creator confirms, your **stake is returned**. The bounty Detail shows "REVEALED · stake returned to hunter."

## 6. If the creator won't confirm (escape hatch)

If the creator stalls and the **escape window** opens (near the deadline), you can reclaim your stake yourself, trustlessly:

* On the Detail page, in **⛓ Reclaim stake (escape hatch)**, load `reveal.json` and click **Reveal on-chain & reclaim stake**.
* The contract checks your reveal against the fingerprint and returns the stake.
* Note: this makes the exploit **public**, so prefer the private reveal if the creator is responsive.

## Things to remember

* `proof.json` and `reveal.json` must be a **matching pair** from the same proving run (their fingerprints must agree). If you reprove with different inputs, regenerate both.
* Use `RISC0_DEV_MODE=1` only for testing your logic — it does **not** produce a valid on-chain proof.
