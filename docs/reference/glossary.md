# Glossary

**Bounty creator** — the actor who locks a reward against a contract and publishes the rule that defines a valid exploit.

**Bug hunter** — the actor who finds the exploit, proves it in zero-knowledge, claims the reward, and reveals the fix.

**Escape hatch** — the `prove_reveal` function. Lets the hunter reveal on-chain (in the escape window) to reclaim their stake if the creator refuses to confirm. Makes the exploit public, so it's a last resort.

**Escape window** — the stretch before the reveal deadline during which the on-chain escape hatch is allowed. The grace period before it gives the creator time to confirm privately.

**Fingerprint** — `sha256(a ‖ b ‖ salt)`, committed by the guest to the journal. Binds the proof to the exact secret so the reveal can't be faked. See [commit–reveal](../concepts/commit-reveal-fingerprint.md).

**Guest** — the Rust program that runs inside the zkVM and defines what counts as a valid exploit. Its hash is the ImageID.

**Host** — the program that runs the guest and produces the proof, on the hunter's machine.

**ImageID** — the hash of the compiled guest. Pins down exactly which program a proof corresponds to; stored per bounty on-chain.

**Journal** — the public outputs the guest commits (here: `victim_id` + `fingerprint`). Part of the receipt.

**Journal digest** — `sha256(journal)`, computed on-chain by the registry and passed to the verifier.

**Receipt** — the proof output: `journal` + `seal`.

**Registry (bounty-verifier)** — the single Soroban contract that holds many bounties, handles escrow, verifies proofs, and runs the stake/reveal lifecycle.

**Reveal** — the secret exploit (`{a, b, salt}` = `reveal.json`), encrypted to the creator's public key and sent off-chain.

**Reveal window** — seconds after a claim during which the hunter must reveal before the stake can be forfeited.

**Router (RISC Zero verifier router)** — the on-chain contract (from Nethermind) that routes a seal to the correct verifier and checks it. Veil delegates all cryptographic verification to it.

**Seal** — the cryptographic proof (Groth16) inside the receipt.

**Stake** — XLM the hunter locks when claiming. Returned when they reveal; forfeited to the creator if they ghost past the deadline.

**Stake-at-claim** — the design where the stake is locked in the same transaction as the claim (one signature).

**Victim contract** — the deliberately vulnerable target whose invariant the hunter breaks.

**zkVM** — RISC Zero's zero-knowledge virtual machine. Runs ordinary Rust and produces a proof that it ran correctly, without revealing private inputs.

**RISC0_DEV_MODE** — env var. `1` = fast, fake proofs (dev only). `0` = real Groth16 proofs (needs Docker).
