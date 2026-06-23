'use client'

import { useState } from 'react'
import { generateKeypair, encryptForCreator, decryptAsCreator } from '@/lib/reveal'

const MONO = "var(--font-mono,'JetBrains Mono',monospace)"
const SANS = "var(--font-sans,'Inter',sans-serif)"

const box: React.CSSProperties = { border: '1px solid #242424', background: '#0d0d0d', borderRadius: 2, padding: 14 }
const label: React.CSSProperties = { display: 'block', fontFamily: SANS, fontWeight: 500, fontSize: 12, color: '#EDEDED', marginBottom: 6 }
const field: React.CSSProperties = { width: '100%', background: '#0A0A0A', border: '1px solid #242424', color: '#EDEDED', fontFamily: MONO, fontSize: 11.5, padding: '9px 11px', borderRadius: 2, resize: 'vertical' }
const btn: React.CSSProperties = { background: '#14B88A', color: '#06241B', border: 'none', padding: '8px 14px', fontFamily: SANS, fontWeight: 600, fontSize: 12, borderRadius: 2, cursor: 'pointer' }
const heading: React.CSSProperties = { fontFamily: MONO, fontSize: 10, color: '#14B88A', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 10 }
const hint: React.CSSProperties = { fontFamily: SANS, fontSize: 10.5, color: '#5A5A5A', marginTop: 6 }

const copy = (t: string) => { try { navigator.clipboard.writeText(t) } catch {} }

/** Creator: generate reveal keypair. */
export function RevealKeyGen() {
  const [kp, setKp] = useState<{ publicKey: string; secretKey: string } | null>(null)
  return (
    <div style={box}>
      <div style={heading}>🔑 Reveal key (so hunters can send you the exploit privately)</div>
      <button style={btn} onClick={() => setKp(generateKeypair())}>{kp ? 'Regenerate' : 'Generate key'}</button>
      {kp && (
        <div className="mt-3 flex flex-col gap-3">
          <div>
            <span style={label}>Public key <span style={{ color: '#5A5A5A' }}>· share / put on the bounty</span></span>
            <textarea readOnly rows={2} value={kp.publicKey} style={field} onFocus={e => e.target.select()} />
            <span onClick={() => copy(kp.publicKey)} style={{ ...hint, color: '#14B88A', cursor: 'pointer' }}>copy public key</span>
          </div>
          <div>
            <span style={label}>Private key <span style={{ color: '#E06A6A' }}>· SAVE SECRETLY — needed to read exploits</span></span>
            <textarea readOnly rows={2} value={kp.secretKey} style={field} onFocus={e => e.target.select()} />
            <span onClick={() => copy(kp.secretKey)} style={{ ...hint, color: '#14B88A', cursor: 'pointer' }}>copy private key</span>
          </div>
        </div>
      )}
    </div>
  )
}

/** Hunter: encrypt exploit to creator's public key. */
export function RevealEncrypt() {
  const [msg, setMsg] = useState('')
  const [pub, setPub] = useState('')
  const [out, setOut] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)
  const run = () => {
    setErr(null); setOut(null)
    try { setOut(encryptForCreator(msg, pub)) }
    catch (e) { setErr(e instanceof Error ? e.message : 'encrypt failed') }
  }
  return (
    <div style={box}>
      <div style={heading}>🔒 Reveal your exploit to the creator (encrypted)</div>
      <span style={label}>Exploit writeup (secret inputs + how)</span>
      <textarea rows={4} value={msg} onChange={e => setMsg(e.target.value)} placeholder="e.g. a=1000, b=1000 → 1000×1000=1,000,000…" style={field} />
      <span style={{ ...label, marginTop: 10 }}>Creator&apos;s public key</span>
      <textarea rows={2} value={pub} onChange={e => setPub(e.target.value)} placeholder="paste the creator's public key" style={field} />
      <button style={{ ...btn, marginTop: 10 }} onClick={run}>Encrypt →</button>
      {err && <div style={{ ...hint, color: '#E06A6A' }}>✗ {err}</div>}
      {out && (
        <div className="mt-3">
          <span style={label}>Ciphertext <span style={{ color: '#5A5A5A' }}>· only the creator can read this</span></span>
          <textarea readOnly rows={3} value={out} style={field} onFocus={e => e.target.select()} />
          <span onClick={() => copy(out)} style={{ ...hint, color: '#14B88A', cursor: 'pointer' }}>copy ciphertext → send to creator</span>
        </div>
      )}
    </div>
  )
}

/** Creator: decrypt the revealed exploit. */
export function RevealDecrypt() {
  const [ct, setCt] = useState('')
  const [sec, setSec] = useState('')
  const [out, setOut] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)
  const run = () => {
    setErr(null); setOut(null)
    try { setOut(decryptAsCreator(ct, sec)) }
    catch (e) { setErr(e instanceof Error ? e.message : 'decrypt failed') }
  }
  return (
    <div style={box}>
      <div style={heading}>🔓 Read revealed exploit</div>
      <span style={label}>Ciphertext (from hunter)</span>
      <textarea rows={3} value={ct} onChange={e => setCt(e.target.value)} placeholder="paste ciphertext" style={field} />
      <span style={{ ...label, marginTop: 10 }}>Your private key</span>
      <textarea rows={2} value={sec} onChange={e => setSec(e.target.value)} placeholder="paste your private key" style={field} />
      <button style={{ ...btn, marginTop: 10 }} onClick={run}>Decrypt →</button>
      {err && <div style={{ ...hint, color: '#E06A6A' }}>✗ {err}</div>}
      {out && (
        <div className="mt-3">
          <span style={label}>Exploit <span style={{ color: '#5A5A5A' }}>· decrypted with your key</span></span>
          <textarea readOnly rows={4} value={out} style={{ ...field, color: '#4ADE9E' }} />
        </div>
      )}
    </div>
  )
}
