# The smart contracts (Soroban)

Location: `contracts/`. Written in Rust with `soroban-sdk`, deployed to Stellar testnet.

## Victim — `contracts/victim`

The deliberately vulnerable target. It exposes an invariant the creator *believes* is unbreakable but isn't.

For the demo: a vault assumes `target = 1,000,000` has no non-trivial factors.

```rust
// returns true (exploited) when a non-trivial factor pair is found
fn is_broken(a: u128, b: u128) -> bool {
    a * b == target && a != 1 && b != 1 && a != target && b != target
}
```

This is breakable (e.g. `1000 × 1000`). The rule is **pure, deterministic math** — no I/O, time, randomness, or external state — which is exactly what lets it be re-implemented faithfully inside the [guest](zk-layer.md).

## Bounty Registry — `contracts/bounty-verifier`

One deployed contract holds **many** bounties keyed by `bounty_id`. It handles escrow, on-chain proof verification, and the stake/reveal lifecycle.

### State per bounty

```rust
struct Bounty {
    creator: Address,
    token: Address,
    amount: i128,             // reward
    victim_id: Address,
    image_id: BytesN<32>,     // hash of the guest (pins the challenge)
    creator_pubkey: BytesN<32>, // X25519 pubkey for the encrypted reveal
    title: String,            // on-chain, self-describing
    description: String,      // on-chain
    stake_amount: i128,       // locked at claim
    reveal_window: u64,       // seconds to reveal before forfeit
    escape_window: u64,       // seconds before deadline the escape hatch opens
    claimed: bool,
    claimer: Option<Address>,
    fingerprint: BytesN<32>,  // sha256(a,b,salt) extracted from the winning journal
    claim_time: u64,
    revealed: bool,           // creator confirmed / hunter proved on-chain → stake returned
    forfeited: bool,          // deadline passed → stake to creator
    expiry: u64,
    refunded: bool,
}
```

### Functions

| Function | Who | What it does |
| --- | --- | --- |
| `create_bounty(...)` | creator | open a bounty: bind `victim_id`, `image_id`, `creator_pubkey`, set `stake_amount`, `reveal_window`, `escape_window` |
| `fund(bounty_id, from, amount)` | creator | lock the reward in escrow |
| `claim(bounty_id, hunter, journal, seal)` | hunter | verify the proof on-chain, lock the stake, pay the reward, store the fingerprint — all atomically |
| `confirm_reveal(bounty_id)` | creator | after verifying the reveal off-chain, release the stake back to the hunter |
| `forfeit_stake(bounty_id)` | anyone | after the deadline with no reveal, send the stake to the creator |
| `prove_reveal(bounty_id, a, b, salt)` | hunter | escape hatch: reveal on-chain, contract checks `sha256(a,b,salt)==fingerprint`, returns the stake |
| `withdraw(bounty_id)` | creator | reclaim the reward if the bounty expired unclaimed |
| `get_bounty / count / router` | anyone | read-only getters |

### How `claim` works (the heart)

```
1. checks: not already claimed, not refunded
2. journal_digest = sha256(journal)            // computed ON-CHAIN
3. router.verify(seal, image_id, journal_digest)  // traps if invalid → tx reverts
4. transfer stake_amount  hunter → contract
5. transfer reward        contract → hunter
6. fingerprint = extract from journal (logical bytes 32..64)
7. mark claimed, store claimer + claim_time
```

Because the hunter is the transaction source, **one signature** authorises both the stake transfer and the claim — the stake step is bundled into the claim, by design.

### The RISC Zero router

Verification is delegated to the official **[NethermindEth/stellar-risc0-verifier](https://github.com/NethermindEth/stellar-risc0-verifier)** router + Groth16 verifier already deployed on testnet. We never hand-roll cryptographic verification. The router is registered with the Groth16 selector `73c457ba` (matching RISC Zero 3.0 Groth16 seals).

We declare a minimal local `Risc0Router` client trait so our contract (soroban-sdk 26) can call the router without depending on its exact SDK version:

```rust
#[contractclient(name = "Risc0RouterClient")]
pub trait Risc0Router {
    fn verify(env: Env, seal: Bytes, image_id: BytesN<32>, journal: BytesN<32>);
}
```

## Build & deploy

```bash
cd contracts/bounty-verifier
stellar contract build
# deploy: see scripts/redeploy-registry.sh (deploys + seeds + updates frontend/.env.local)
```

See [Deployments](../reference/deployments.md) for live addresses.
