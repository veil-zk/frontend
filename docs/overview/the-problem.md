# The problem

## Bug bounties run on broken trust

A bug bounty is a deal: *"find a flaw in my system, and I'll pay you."* In practice that deal is poisoned by a **who-goes-first** standoff.

* **The hunter** has found a real exploit. If they disclose it to claim the reward, the owner can simply say *"that's not a real bug"* or *"we already knew that"* and refuse to pay. The hunter has given away their leverage for nothing.
* **The owner** is asked to pay for a claim they cannot verify without seeing the exploit. If they pay first, they might be paying for a fake or trivial bug.

Neither side can move first without risking being cheated. The usual patch for this is a **trusted intermediary** — a bounty platform that holds funds, mediates disputes, and decides who is right. That works, but it reintroduces exactly what blockchains are supposed to remove: a middleman you have to trust, who takes a cut, who can be wrong, biased, or compromised.

## What we actually need

To make a bug bounty trustless, two things must be true at the same time:

1. The hunter can **prove the bug is real** strongly enough that the contract pays automatically.
2. The hunter does **not have to reveal the exploit** in order to get that proof accepted.

These sound contradictory — how do you prove you know something without showing it? That is precisely the problem **zero-knowledge proofs** were invented to solve.

## And then a second problem

Suppose we solve the first problem and the hunter gets paid on proof alone. The creator now has a new headache:

> "A proof told me my contract is broken. Great. But it told me *nothing* about how to fix it."

A proof of existence ("a breaking input exists") is valuable, but it is not a patch. The creator still needs the actual exploit to repair their contract. So Veil needs a second mechanism that makes the hunter **hand over the real exploit** — privately, verifiably, and without anyone being able to cheat.

This is the gap most ZK bounty demos ignore. Veil closes it with the [stake & reveal layer](../concepts/stake-and-reveal.md).

## Why this matters in the real world

Smart contracts hold real money and cannot be patched as casually as a web server. A trustless, privacy-preserving disclosure channel — where researchers are paid the moment their finding is cryptographically proven, and creators are guaranteed the information they need to fix the flaw — is exactly the kind of infrastructure the on-chain world is missing.

Veil is a proof-of-concept of that infrastructure.
