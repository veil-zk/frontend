# Future work

Veil's core loop is complete and trustless. This page collects the directions that would turn the proof-of-concept into a product, grouped by theme. For a time-phased view, see the [Roadmap](roadmap.md).

**None of these are science fiction.** Each direction below *composes a technique already proven in production elsewhere* — inclusion proofs from light clients, in-circuit execution from zkEVMs, proof recursion, confidential compute, on-chain attestations — into a single new primitive: **trustless, privacy-preserving vulnerability disclosure on Stellar.** Veil's contribution is the composition, not an unproven leap. Where an item is genuinely research-grade, we say so.

---

## 1. Expanding what bugs Veil can express

Today the exploit rule must be a **pure, deterministic function** of the hunter's secret input — no chain state, time, randomness, other contracts. That covers a powerful class (arithmetic/logic invariants) but not stateful or interactive bugs. Several extensions widen the net.

### 1a. Inject external context as public input, verify on-chain *(near-term)*

The guest can't read the outside world — so we **feed it** the relevant context (a storage value, a balance, a price, a timestamp) as a **public input**, the guest commits it to the journal, and the **bounty contract checks that committed value against the real on-chain state** at claim time.

```
guest commits "assumed context S"  →  contract verifies S == real on-chain state
```

This unlocks most **stateful** bugs:

| Context | How it's bound |
| --- | --- |
| Contract storage / balances | contract reads the victim's real state (cross-contract call) and compares |
| Oracle / price | contract checks the committed price matches the real oracle |
| Timestamp / block data | contract checks it's within range of the current ledger |
| Pseudo-randomness (seed-derived) | reduces to a "state" input once the seed is provided |

Effort: moderate. This is the single most valuable coverage extension.

### 1b. Storage / inclusion proofs *(mid-term)*

A stronger version of 1a: instead of a live cross-contract read at claim time, the guest accepts a **Merkle / storage-inclusion proof** of the victim's state at a specific ledger and verifies it against a committed state root. This binds the exploit to **real on-chain state at an exact point in time**, fully trustlessly — and works even for **historical** or **cross-contract** state the registry can't read live. It's the bridge from pure-math bugs to genuinely state-dependent ones.

*Grounded in:* the same trust-minimized inclusion proofs that light clients and cross-chain bridges already rely on in production.

### 1c. Recursive / multi-transaction proofs *(research)*

Some exploits need a **sequence of transactions**, not a single call. Recursive proof composition lets the guest prove a whole execution trace (step 1 → step 2 → … → invariant broken), turning a multi-step attack into one succinct proof.

### 1d. Simulate the contract inside the zkVM *(research)*

Interactive bugs — **reentrancy**, call-ordering, multi-step sequences — aren't a single pure function; they're an *interaction* that mutates state mid-execution. To prove them, the guest must **execute a model of the contract** and run the attack against it. Two flavours:

* **Faithful Rust re-implementation** of the victim's logic in the guest — lighter, but risks *drift* (you'd prove a bug in the model, not the deployed bytecode).
* **A Soroban/WASM interpreter inside the guest** that loads the victim's **actual bytecode** and executes the attack — the "holy grail": any deterministic bug becomes provable, at a heavy proving cost.

*Grounded in:* this is exactly how **zkEVMs prove EVM execution** in production today — Veil applies the same "prove the VM ran correctly" idea to a single Soroban contract, a far smaller target.

Effort: high / research-level. The honest long-term answer for interactive bugs.

> **The one hard limit:** truly *external* non-determinism — real randomness from outside, real-time events — cannot be proven ahead of time. That's a fundamental boundary, not a bug class. (Pseudo-randomness derived from on-chain seeds is deterministic, so it reduces to 1a/1b.)

---

## 2. Strengthening the protocol

### 2a. Level 2 — encrypt the witness inside the zkVM

The guest encrypts the secret itself to the creator's public key *inside* the zkVM and commits the ciphertext, so the proof guarantees "this ciphertext is the encryption of the real, valid exploit." Makes the reveal **atomic, unfakeable, and private on-chain** — fully removing the griefing trade-off. Deferred because in-zkVM crypto is heavy (proving RAM/time), and offloading to a remote prover conflicts with the privacy premise unless self-hosted. See [stake & reveal](../concepts/stake-and-reveal.md) for the trade-off it solves.

*Grounded in:* in-circuit encryption is already used by private-payment zk systems — the blocker here is proving overhead, not feasibility.

### 2b. Bind the claimer into the proof (anti-frontrunning)

Today `claim()` doesn't bind the proof to the claimer, so a watcher could resubmit a seen `seal` with their own address. Fix: commit the hunter's address into the journal and check it in the contract. (Severity is lower on Stellar than Ethereum — no public mempool/gas auction — but the window exists.)

### 2c. Bind `bounty_id` into the journal

A proof commits `victim_id` + fingerprint, not `bounty_id`. Two bounties sharing an `image_id` could accept the same proof. Commit a per-bounty value in the guest to close this.

### 2d. Forfeit-to-neutral option

Let creators send forfeited stakes to a neutral address / burn instead of to themselves, removing any incentive to grief in the first place.

### 2e. Dispute / arbitration fallback

An optional, opt-in arbiter for edge cases the pure mechanism can't resolve (e.g. a creator claims the reveal was malformed). Keeps the trustless path as default, adds a safety net for high-value bounties.

### 2f. Auditor attestations on guests

Whoever writes the guest defines "truth" — so a **trusted auditor can sign an on-chain attestation** that a guest faithfully captures a contract's invariant. Hunters and funders can require attested guests, closing the "malicious or incorrect guest" trust point **without** a central authority.

### 2g. Coordinated-disclosure timelock

After a valid proof, enforce an **on-chain grace window** before the exploit may be revealed publicly (via the escape hatch), giving the owner time to patch first. Bakes responsible-disclosure norms directly into the protocol.

---

## 3. Privacy & proving

### 3a. Atomic on-chain reveal storage

A lighter step than Level 2: store the encrypted reveal **on-chain as part of `claim()`** so the creator doesn't depend on a manual off-chain handoff. They still need their private key to read it. Trade-off: more storage, and the (encrypted) ciphertext lives publicly forever.

### 3b. Self-hosted / privacy-preserving remote proving

Heavy proofs (Level 2, in-zkVM simulation) need more compute than a laptop. A managed remote prover (e.g. Bonsai) removes the RAM ceiling but would see the secret — unacceptable unless **self-hosted** by the hunter or run under confidential compute. Document and support a self-hosted prover path.

### 3c. Private / decentralized proving network

For hunters without proving hardware, a **proving marketplace running under TEEs or MPC** could generate proofs **without ever seeing the secret** — bridging the privacy trade-off of a managed prover (§3b) with the accessibility of not needing local hardware.

### 3d. Reproducible compile service

The no-install compile service asks the creator to trust the server's ImageID. A **reproducible build** lets anyone independently recompile the guest and verify the ImageID matches — turning "trust the server" into "verify the server."

---

## 4. Economics & marketplace

### 4a. Severity tiers

Let the guest **prove a severity class** (e.g. "drains ≥ X" vs "merely reverts"), so a single bounty can pay **tiered rewards** by proven impact instead of a flat amount.

### 4b. Crowdfunded / DAO bounty pools

Allow **many funders to back one bounty** (top-ups already supported) and DAO-governed pools, so a protocol — or its community — can underwrite its own security budget collectively.

### 4c. Gasless claims (account abstraction)

Sponsor the claim transaction so a hunter can collect a reward **without holding XLM**, lowering the barrier for first-time researchers.

### 4d. Event-based indexer

Bounty listing currently fetches each bounty directly. Emit contract events and index them (e.g. Mercury) for fast, scalable listing and history.

### 4e. Reputation & multiple hunters

Track hunter reputation across bounties; support multiple submissions, partial rewards, or first-valid-wins races more richly than today's single-claim model.

### 4f. Mainnet + audits

Move from testnet to mainnet with a security audit of the registry contract, especially around escrow, stake accounting, and the verifier integration.

### 4g. Multi-token & richer escrow

Already token-agnostic (any SAC); extend with multiple reward tranches, top-ups, and milestone-based payouts.

---

## 5. Developer experience & closing the loop

### 5a. Guest template library

A library of **audited, reusable guests per bug class** (overflow, access-control, rounding, …). Creators start from a vetted template instead of a blank file — faster, safer, with network effects.

### 5b. Shared guest/victim spec

Generate both the victim's invariant and the guest's check from a **single shared `no_std` crate**, so they can't drift out of sync. Removes a class of "proved the wrong thing" bugs.

### 5c. Formal-spec → guest

Derive the guest **from a formal invariant spec** (Scribble / Certora-style) so the on-chain rule, the guest, and the contract's intended invariant all come from one source — eliminating drift by construction.

### 5d. AI-assisted guest generation *(prototype exists)*

The creator enters a contract address; an AI agent drafts the guest logic; the creator reviews, edits, and compiles. The AI only writes a draft — correctness stays human at the edit + compile step.

### 5e. No-install compile service *(prototype exists)*

A backend that compiles a creator's guest and returns the ImageID, so creators don't need the local toolchain. Honest trade-off documented; the local-compile path always remains the default. Hardened by §3d (reproducible builds).

### 5f. AI patch suggestion (closing the loop)

Once the owner decrypts the reveal, an AI agent **drafts a concrete fix** for the vulnerable contract — completing the full loop: **prove → get paid → reveal → suggested patch**.
