# The ZK layer (RISC Zero)

Location: `zk/`. Two programs — **guest** (proven logic) and **host** (proving + export).

## Guest — `zk/methods/guest/src/main.rs`

The guest is the "brain of the proof." It runs inside the zkVM, reads the secret input, checks the exploit rule, and commits public outputs.

For the demo challenge (a factoring guard), its logic is:

```rust
// secret inputs — NEVER committed
let a: u128 = env::read();
let b: u128 = env::read();
let salt: [u8; 32] = env::read();   // high-entropy, used for the fingerprint

// challenge parameters baked in (pins the challenge into the ImageID)
let target: u128 = 1_000_000;
let victim_id: [u8; 32] = [7u8; 32];

// the "is broken" rule — identical to the victim contract's invariant
assert!(a.checked_mul(b) == Some(target), "a*b != target");
assert!(a != 1 && b != 1, "trivial factor");
assert!(a != target && b != target, "trivial factor");

// Level 1.5 fingerprint = sha256(a ‖ b ‖ salt)
let mut data = [0u8; 64];
data[0..16].copy_from_slice(&a.to_le_bytes());
data[16..32].copy_from_slice(&b.to_le_bytes());
data[32..64].copy_from_slice(&salt);
let fingerprint: [u8; 32] = Impl::hash_bytes(&data).as_bytes().try_into().unwrap();

// commit PUBLIC outputs only (no a, b, salt)
env::commit(&victim_id);     // binding to the target contract
env::commit(&fingerprint);   // commit–reveal binding
```

Key design choices:

* **Challenge parameters are baked into the guest**, so the `ImageID` (hash of the guest) pins down *which* challenge this proof is for. The contract doesn't need a separate "expected output" from the creator.
* **The guest logic must equal the victim contract's `is_broken`.** If they diverge, the proof proves a bug in the wrong copy. Keep them in sync.
* **Only public values are committed.** `a`, `b`, `salt` stay secret.

The resulting **journal** is 256 bytes: `victim_id` (32 logical bytes) followed by `fingerprint` (32 logical bytes). RISC Zero serialises each `u8` as a 4-byte little-endian word, so 64 logical bytes → 256 on-chain bytes.

## Host — `zk/host/src/main.rs`

The host runs on the **hunter's machine** and orchestrates proving.

* Reads the secret input from CLI args: `cargo run --release --bin host -- <a> <b> [salt_hex]` (defaults `1000 1000` + a random salt).
* Generates a random 32-byte `salt` (or accepts one for reproducible tests).
* Runs the guest under Groth16 proving and verifies the receipt.
* Exports two files:

| File | Contents | Visibility |
| --- | --- | --- |
| `proof.json` | `{ image_id, journal, seal }` (hex) | **public** — uploaded to `claim()` |
| `reveal.json` | `{ a, b, salt }` | **secret** — encrypted to the creator, never uploaded |

It also prints the host-side fingerprint for cross-checking against the guest and the frontend.

## Running it

```bash
cd zk

# fast iteration (skips real proving, fake receipt):
RISC0_DEV_MODE=1 cargo run --release --bin host -- 1000 1000

# real Groth16 proof for the demo (needs Docker; ~3 min; uses real RAM):
RISC0_DEV_MODE=0 cargo run --release --bin host -- 1000 1000
```

Print the current ImageID any time:

```bash
cd zk && cargo run --release --bin imageid
```

## Important gotchas

* **ImageID changes whenever the guest changes.** After editing the guest, reprint the ImageID and update it everywhere (the bounty, `.env`, seed scripts).
* **Real proving needs RAM.** On a 16 GB laptop we set WSL to `memory=10GB, swap=16GB`. The current guest peaks near that — keep an eye on it. This is the main reason heavier in-zkVM crypto (Level 2) is future work.
* **Docker must be running** for `RISC0_DEV_MODE=0`.
