# Stake & reveal: the economic layer

The [fingerprint](commit-reveal-fingerprint.md) stops the hunter from *lying* about the exploit. But nothing yet forces them to reveal it at all — a hunter could claim the reward and ghost. Veil closes this with **economics**, not heavier cryptography.

## The core idea: stake at claim

When the hunter claims a bounty, they don't just submit the proof — they **lock a stake** in the same transaction. The reward is paid immediately (the proof is valid), but the stake is held by the contract.

> **Proof ≠ reveal.** They are paid separately:
>
> | Action | Proves | Reward |
> | --- | --- | --- |
> | Submit proof | the bug is **real** | the **bounty** is paid |
> | Reveal the exploit | gives the creator the **fix** | the **stake** is returned |

The hunter gets their stake back only when they reveal the real exploit. Rational choice: reveal.

## The happy path

1. Hunter claims bounty #N → reward paid, **stake locked**, fingerprint stored on-chain.
2. Hunter encrypts `reveal.json` to the creator's public key and sends the ciphertext (off-chain).
3. Creator decrypts, the app verifies the fingerprint matches (✅), and the creator calls `confirm_reveal()`.
4. Contract returns the stake to the hunter. Done — everyone is square, and the creator has the fix.

## If the hunter ghosts

If the reveal deadline (`reveal_window`) passes with no confirmation, anyone can call `forfeit_stake()` and the stake goes **to the creator** — compensation for never receiving the fix. This punishes ghosting and is fair: the hunter was paid for the proof but withheld the fix.

## The escape hatch

There's a subtle danger in the forfeit rule: what if the hunter **did** reveal honestly, but the creator **refuses to confirm** just to pocket the stake? That's *griefing by the creator*.

We can't solve this by auto-returning the stake (then the stake means nothing and ghosting returns). And we can't have the contract verify the private reveal — that would require putting the exploit on-chain (public) or much heavier ZK.

Veil's answer: give the hunter a **trustless escape hatch**.

```
claim ── creator should confirm (private) ── [escape opens] ── deadline
  │                                              │                 │
  └ hunter reveals privately                     └ hunter MAY      └ forfeit
                                                   reveal on-chain    to creator
```

* `prove_reveal(a, b, salt)` — the hunter reveals **on-chain**. The contract recomputes `sha256(a‖b‖salt)`, checks it matches the stored fingerprint, and returns the stake.
* This is only allowed in the **escape window** (the last stretch before the deadline, configured by `escape_window`). The grace period before it gives the creator a fair chance to confirm privately first — so an honest creator never triggers it, and the exploit stays private in the normal case.

### Why this resolves every case

| Scenario | Outcome | Fair? |
| --- | --- | --- |
| Hunter reveals, creator confirms | stake returned (exploit stays private) | ✅ |
| Creator griefs (won't confirm) | hunter uses `prove_reveal` on-chain → stake returned | ✅ (exploit becomes public — the griefing creator's own fault) |
| Hunter ghosts entirely (no private or on-chain reveal) | deadline → `forfeit_stake` → stake to creator | ✅ |

The system is **trustless**: no party depends on another's goodwill. The only "cost" is that defeating a griefing creator makes the exploit public — which is acceptable, since it's a response to bad behaviour.

## Contract parameters

A creator sets these per bounty in `create_bounty()`:

| Parameter | Meaning | Demo value |
| --- | --- | --- |
| `stake_amount` | how much the hunter locks at claim | e.g. 10 XLM |
| `reveal_window` | seconds after claim to reveal before forfeit | e.g. 3600 (1h) |
| `escape_window` | seconds before the deadline when the on-chain escape hatch opens | e.g. 1800 (30m) |
| `creator_pubkey` | X25519 public key the hunter encrypts the reveal to | generated in the UI |

> For a quick live demo of the escape hatch, set small values (e.g. `reveal_window = 120`, `escape_window = 90`) so the hatch opens ~30 seconds after claim.

## Honest limitation

In the griefing case, the escape hatch forces the exploit to become public to free the stake. A fully private *and* trustless *and* griefing-proof reveal would require encrypting the witness **inside** the zkVM (so the proof itself guarantees the ciphertext decrypts to the real exploit). That's "Level 2" — see [future work](../reference/future-work.md).
