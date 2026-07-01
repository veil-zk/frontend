# Resources & links

Everything to see Veil in action — the demo, the source, and the live contracts on Stellar testnet.

## Demo

* 🎥 **Demo video (2–3 min)** — [youtu.be/bL5tQSPMIWg](https://youtu.be/bL5tQSPMIWg)
* 📖 **Documentation (this site)** — [veil-3.gitbook.io/veil-docs-1](https://veil-3.gitbook.io/veil-docs-1/)

## Source code

Open-source on GitHub — org [github.com/veil-zk](https://github.com/veil-zk):

* **Frontend + docs** — [github.com/veil-zk/frontend](https://github.com/veil-zk/frontend)
* **Smart contracts** — [github.com/veil-zk/contract](https://github.com/veil-zk/contract)
* **Backend** (AI guest-gen + compile service) — [github.com/veil-zk/backend](https://github.com/veil-zk/backend)

## Live on Stellar testnet

Verify it yourself on [stellar.expert](https://stellar.expert/explorer/testnet) — proofs, claims and payouts are real on-chain:

| Contract | Explorer |
| --- | --- |
| **Bounty registry** (escrow + verify + stake/reveal) | [`CDIXJSRE…DYOV`](https://stellar.expert/explorer/testnet/contract/CDIXJSREC5IQRWHQUW32BWZY2PWW64OENMZPQXGKN6QNM3W55OU2TSN4) |
| **Victim** (factoring bug) | [`CCNT…WOPY`](https://stellar.expert/explorer/testnet/contract/CCNTDKYBO6N2BOISKZEQX73FPEGBG6WERBW4PUAPBRZQA6UPBKUMWOPY) |
| **Victim 2** (integer-overflow bug) | [`CDUU…LEWH`](https://stellar.expert/explorer/testnet/contract/CDUU6WKW6JX6GZXHBF6E7UHL2ODOBYVV7V6UC6BDTKYB7MCP573OLEWH) |
| **RISC Zero verifier router** (Nethermind) | [`CBYM…2H7V`](https://stellar.expert/explorer/testnet/contract/CBYMARZLV5YRU2PRFPGYAXRGZWAJOB3AFSGEFFC4FJ3YUZNBDKTO2H7V) |
| **Groth16 verifier** (BN254) | [`CAX2…QEUT`](https://stellar.expert/explorer/testnet/contract/CAX2WV2KE6NQGGGQW4LCIVPK5SCUZ23O5TPD3DK6KASYKODV6NW7QEUT) |

Full address list & re-deploy scripts: see [Deployments](deployments.md).

## Built on

* **RISC Zero** zkVM — [dev.risczero.com](https://dev.risczero.com)
* **Stellar / Soroban** — [developers.stellar.org](https://developers.stellar.org)
* **RISC Zero verifier for Stellar** (Nethermind) — [github.com/NethermindEth/stellar-risc0-verifier](https://github.com/NethermindEth/stellar-risc0-verifier)
