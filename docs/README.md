---
description: The exploit stays behind the veil.
---

# Veil — Trustless Proof-of-Exploit Bug Bounty

> **Veil** lets a security researcher *prove* they found an exploit in a Stellar smart contract — **without revealing how** — and get paid automatically by an on-chain contract that verifies the proof.
>
> *"Proof that the exploit exists; the method stays behind the veil."*

Built for the **Real-World ZK on Stellar** hackathon (DoraHacks). Zero-knowledge is not a garnish here — it is the load-bearing wall. Remove it and the entire idea collapses.

**🎥 [Watch the demo](https://youtu.be/bL5tQSPMIWg)** · **🌐 [Live app](https://veil-gamma-five.vercel.app)** · **💻 [Source](https://github.com/veil-zk)** · **📖 [Docs & links](reference/resources.md)**

---

## The one-paragraph pitch

Bug bounties have a chicken-and-egg trust problem: the hunter wants to be paid before disclosing the bug; the owner refuses to pay for an unproven claim. **Veil breaks the deadlock with a zero-knowledge proof.** The hunter runs the contract's logic inside a RISC Zero zkVM against their secret input, producing a cryptographic receipt that says *"I have an input that breaks this contract"* — while keeping the input hidden. A Soroban contract on Stellar verifies that receipt on-chain and releases the reward automatically. No trust required.

## What makes Veil different

Most "prove-you-found-a-bug" demos stop at the payout. Veil goes further and answers the question every bounty creator actually cares about: **"Okay, you proved it's broken — now how do I fix it?"**

Veil adds an **economic reveal layer** on top of the ZK core:

| Layer | What it guarantees |
| --- | --- |
| **ZK proof** | The bug is real (verified on-chain). Pays the reward. |
| **Fingerprint commit (Level 1.5)** | The hunter cannot lie about the exploit later — the proof is cryptographically bound to it. |
| **Stake at claim** | The hunter is economically forced to reveal the fix to the creator. |
| **Escape hatch** | A griefing creator who refuses to confirm cannot steal the stake. |

The result is a complete, trustless loop: **prove → get paid → reveal → fix**, with no party able to cheat another.

## Where to go next

* New here? Start with [The problem](overview/the-problem.md) and [How Veil works](overview/how-it-works.md).
* Want the intuition behind the cryptography? Read [Zero-knowledge, in plain words](concepts/zero-knowledge-basics.md).
* Want to run it? Jump to [Local setup](guides/setup.md), then the [creator](guides/creator-guide.md) and [hunter](guides/hunter-guide.md) guides.
* Evaluating the project? See [Limitations & what's mocked](reference/limitations.md) — we are explicit about every assumption.

## Honesty note

This is a hackathon proof-of-concept. The vulnerable contract's bug is **planted on purpose**, and for the demo our team plays both actors (creator and hunter). Those are normal PoC simplifications and are documented plainly in [Limitations & what's mocked](reference/limitations.md). The cryptography, the on-chain verification, and the payout are **real** and run on Stellar testnet.
