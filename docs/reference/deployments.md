# Deployments

All on **Stellar testnet**. Testnet can reset; if addresses disappear, redeploy with `scripts/redeploy-registry.sh`.

## Network

* RPC: `https://soroban-testnet.stellar.org`
* Passphrase: `Test SDF Network ; September 2015`

## Veil contracts

| Contract | Address |
| --- | --- |
| **Bounty Registry** (v6 — Level 1.5 + stake) | `CDIXJSREC5IQRWHQUW32BWZY2PWW64OENMZPQXGKN6QNM3W55OU2TSN4` |
| Victim (factoring guard) | `CCNTDKYBO6N2BOISKZEQX73FPEGBG6WERBW4PUAPBRZQA6UPBKUMWOPY` |
| Reward token (native XLM SAC) | `CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC` |

The current registry stores, per bounty: the on-chain title/description, the X25519 reveal public key, the stake amount, the reveal window, the escape window, and (after a claim) the committed fingerprint.

## RISC Zero verifier (NethermindEth/stellar-risc0-verifier)

| Component | Address |
| --- | --- |
| Router (called by the registry) | `CBYMARZLV5YRU2PRFPGYAXRGZWAJOB3AFSGEFFC4FJ3YUZNBDKTO2H7V` |
| Groth16 Verifier (BN254) | `CAX2WV2KE6NQGGGQW4LCIVPK5SCUZ23O5TPD3DK6KASYKODV6NW7QEUT` |
| Groth16 selector | `73c457ba` |

The proof was tested directly against the router via CLI: a valid proof returns success, a tampered proof is rejected. ZK-verified-on-chain is proven, not assumed.

## Guest ImageID (Level 1.5)

```
3b7ef9255df5c33af5d3db6955a8e22733717cc42d28ee6eaac6743e9bf393de
```

Reprint any time with `cd zk && cargo run --release --bin imageid`.

> ⚠️ The ImageID changes whenever the guest source changes. After editing the guest, reprint it and update the bounty, `frontend/.env.local`, and the seed scripts.

## Source repositories

* Contracts — `github.com/veil-zk/contract`
* Frontend — `github.com/veil-zk/frontend`
* Backend — `github.com/veil-zk/backend`

## Reproducing

```bash
# real proof (writes zk/proof.json + zk/reveal.json)
cd zk && RISC0_DEV_MODE=0 cargo run --release --bin host -- 1000 1000

# deploy a fresh registry, seed #0 (claimed) & #1 (open), update frontend/.env.local
cd .. && bash scripts/redeploy-registry.sh
```
