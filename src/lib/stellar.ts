// Stellar / Soroban plumbing: RPC config, balance reads, contract invokes.
// Contract IDs come from NEXT_PUBLIC_* env. When unset, CONTRACTS_CONFIGURED
// is false and the UI falls back to the local demo flow.
import {
  rpc,
  Networks,
  Contract,
  Address,
  TransactionBuilder,
  BASE_FEE,
  Horizon,
  nativeToScVal,
  scValToNative,
  xdr,
} from '@stellar/stellar-sdk'

export const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL || 'https://soroban-testnet.stellar.org'
export const HORIZON_URL = process.env.NEXT_PUBLIC_HORIZON_URL || 'https://horizon-testnet.stellar.org'
export const NETWORK_PASSPHRASE = process.env.NEXT_PUBLIC_NETWORK_PASSPHRASE || Networks.TESTNET

export const VERIFIER_ID = process.env.NEXT_PUBLIC_VERIFIER_ID || ''
export const TOKEN_ID = process.env.NEXT_PUBLIC_TOKEN_ID || ''

export const CONTRACTS_CONFIGURED = Boolean(VERIFIER_ID)

const server = () => new rpc.Server(RPC_URL, { allowHttp: RPC_URL.startsWith('http://') })

/** Native XLM balance for an account (0 if unfunded / missing). */
export async function getXlmBalance(address: string): Promise<number> {
  try {
    const horizon = new Horizon.Server(HORIZON_URL)
    const acct = await horizon.loadAccount(address)
    const native = acct.balances.find((b) => b.asset_type === 'native')
    return native ? Math.floor(parseFloat(native.balance)) : 0
  } catch {
    return 0 // unfunded account → 404
  }
}

type SignFn = (xdr: string, networkPassphrase: string) => Promise<string>

/**
 * Build → simulate → sign → submit a contract invocation, then poll for the
 * result. `caller` is the source account (the connected wallet address).
 */
async function invoke(
  contractId: string,
  method: string,
  args: xdr.ScVal[],
  caller: string,
  sign: SignFn,
): Promise<unknown> {
  const srv = server()
  const source = await srv.getAccount(caller)
  const contract = new Contract(contractId)

  const built = new TransactionBuilder(source, {
    fee: BASE_FEE,
    networkPassphrase: NETWORK_PASSPHRASE,
  })
    .addOperation(contract.call(method, ...args))
    .setTimeout(60)
    .build()

  // simulate + assemble footprint/auth
  const prepared = await srv.prepareTransaction(built)
  const signedXdr = await sign(prepared.toXDR(), NETWORK_PASSPHRASE)
  const signed = TransactionBuilder.fromXDR(signedXdr, NETWORK_PASSPHRASE)

  const sent = await srv.sendTransaction(signed)
  if (sent.status === 'ERROR') {
    throw new Error('Transaction submission failed: ' + JSON.stringify(sent.errorResult))
  }

  // poll until the ledger closes
  let got = await srv.getTransaction(sent.hash)
  for (let i = 0; i < 30 && got.status === 'NOT_FOUND'; i++) {
    await new Promise((r) => setTimeout(r, 1000))
    got = await srv.getTransaction(sent.hash)
  }
  if (got.status !== 'SUCCESS') {
    throw new Error('Transaction did not succeed: ' + got.status)
  }
  return got.returnValue ? scValToNative(got.returnValue) : null
}

/** claim(hunter, receipt_bytes) on the bounty-verifier → pays out on valid proof. */
export async function claim(hunter: string, receipt: Uint8Array, sign: SignFn) {
  if (!CONTRACTS_CONFIGURED) throw new Error('No verifier contract configured (NEXT_PUBLIC_VERIFIER_ID).')
  return invoke(
    VERIFIER_ID,
    'claim',
    [new Address(hunter).toScVal(), nativeToScVal(receipt, { type: 'bytes' })],
    hunter,
    sign,
  )
}

/** init(admin, token, victim_id, image_id) — bounty creator sets config. */
export async function initBounty(
  admin: string,
  victimId: string,
  imageId: Uint8Array,
  sign: SignFn,
) {
  if (!CONTRACTS_CONFIGURED) throw new Error('No verifier contract configured (NEXT_PUBLIC_VERIFIER_ID).')
  return invoke(
    VERIFIER_ID,
    'init',
    [
      new Address(admin).toScVal(),
      new Address(TOKEN_ID).toScVal(),
      nativeToScVal(victimId, { type: 'string' }),
      nativeToScVal(imageId, { type: 'bytes' }),
    ],
    admin,
    sign,
  )
}

/** fund(from, amount) — lock the reward into escrow. */
export async function fundBounty(from: string, amount: bigint, sign: SignFn) {
  if (!CONTRACTS_CONFIGURED) throw new Error('No verifier contract configured (NEXT_PUBLIC_VERIFIER_ID).')
  return invoke(
    VERIFIER_ID,
    'fund',
    [new Address(from).toScVal(), nativeToScVal(amount, { type: 'i128' })],
    from,
    sign,
  )
}
