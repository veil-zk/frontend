# Local setup

What you need to run Veil locally and reproduce the demo.

## Prerequisites

| Tool | Why | Notes |
| --- | --- | --- |
| Rust ≥ 1.84 | Soroban + RISC Zero | `rustup target add wasm32v1-none` for Soroban |
| Stellar CLI | build/deploy/invoke contracts | `cargo install --locked stellar-cli` |
| RISC Zero toolchain | proving | `curl -L https://risczero.com/install \| bash && rzup install` |
| Docker | real Groth16 proving | must be **running** for `RISC0_DEV_MODE=0` |
| Node.js ≥ 18 | frontend | |
| Freighter | wallet (browser extension) | set to **Testnet** |

> **WSL users:** run everything (the frontend included) from **inside WSL**. Running `npm run dev` from native Windows makes Turbopack panic and leaves corrupt `.next` artifacts. A 16 GB machine should give WSL `memory=10GB, swap=16GB` via `.wslconfig` for real proving.

## Network & identities

```bash
stellar network add testnet \
  --rpc-url https://soroban-testnet.stellar.org \
  --network-passphrase "Test SDF Network ; September 2015"

stellar keys generate mywallet --network testnet --fund   # creator/deployer
stellar keys generate hunter   --network testnet --fund   # hunter
stellar keys address mywallet
```

## Smoke test (don't skip)

Make sure both foundations work before building on them:

```bash
# A) Soroban builds
cd contracts/bounty-verifier && stellar contract build

# B) RISC Zero runs (dev mode, fast)
cd ../../zk && RISC0_DEV_MODE=1 cargo run --release --bin host -- 1000 1000
```

## Frontend

```bash
cd frontend
npm install
npm run dev      # http://localhost:3000
```

`frontend/.env.local` wires the app to the deployed contracts:

```
NEXT_PUBLIC_RPC_URL=https://soroban-testnet.stellar.org
NEXT_PUBLIC_HORIZON_URL=https://horizon-testnet.stellar.org
NEXT_PUBLIC_NETWORK_PASSPHRASE=Test SDF Network ; September 2015
NEXT_PUBLIC_VERIFIER_ID=<bounty registry contract id>
NEXT_PUBLIC_TOKEN_ID=<reward token / native XLM SAC>
```

## Redeploy + seed (one command)

To deploy a fresh registry and seed example bounties (and auto-update `.env.local`):

```bash
cd /path/to/Veil
bash scripts/redeploy-registry.sh
```

It deploys the registry, creates bounty #0 (CLAIMED) and #1 (OPEN), generates a reveal keypair, and **prints the creator's reveal private key** so you can demo the confirm step. Restart `npm run dev` afterward.

## Resetting a broken frontend cache

```bash
cd frontend && rm -rf .next && npm run dev
```

Next: open a bounty as a [creator](creator-guide.md), or claim one as a [hunter](hunter-guide.md).
