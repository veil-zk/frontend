// Thin wrapper around @stellar/freighter-api (v6, object-return shape).
// All calls are browser-only; guard with isBrowser before use.
import {
  isConnected,
  isAllowed,
  setAllowed,
  requestAccess,
  getAddress,
  getNetwork,
  signTransaction,
} from '@stellar/freighter-api'

export type WalletInfo = {
  address: string
  network: string
  networkPassphrase: string
}

/** Is the Freighter extension installed in this browser? */
export async function freighterInstalled(): Promise<boolean> {
  try {
    const r = await isConnected()
    return !!r.isConnected
  } catch {
    return false
  }
}

/** Already authorised for this site + has an address? Returns null if not. */
export async function getConnected(): Promise<WalletInfo | null> {
  try {
    if (!(await freighterInstalled())) return null
    const allowed = await isAllowed()
    if (!allowed.isAllowed) return null
    const addr = await getAddress()
    if (addr.error || !addr.address) return null
    const net = await getNetwork()
    return {
      address: addr.address,
      network: net.network ?? 'TESTNET',
      networkPassphrase: net.networkPassphrase ?? '',
    }
  } catch {
    return null
  }
}

/** Prompt the user to connect. Throws a human message on failure. */
export async function connect(): Promise<WalletInfo> {
  if (!(await freighterInstalled())) {
    throw new Error('Freighter not detected. Install the Freighter extension to connect.')
  }
  await setAllowed()
  const access = await requestAccess()
  if (access.error || !access.address) {
    throw new Error(access.error || 'Connection rejected in Freighter.')
  }
  const net = await getNetwork()
  return {
    address: access.address,
    network: net.network ?? 'TESTNET',
    networkPassphrase: net.networkPassphrase ?? '',
  }
}

/** Sign a transaction XDR with Freighter; returns signed XDR. */
export async function sign(xdr: string, networkPassphrase: string): Promise<string> {
  const res = await signTransaction(xdr, { networkPassphrase })
  if (res.error || !res.signedTxXdr) {
    throw new Error(res.error || 'Signing rejected in Freighter.')
  }
  return res.signedTxXdr
}

/** GD7X…K2P9 style truncation for display. */
export function shortAddr(a: string): string {
  return a.length > 9 ? `${a.slice(0, 4)}…${a.slice(-4)}` : a
}
