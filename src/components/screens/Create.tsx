'use client'

import { Screen, Token } from '@/lib/data'

const MONO  = "var(--font-mono,'JetBrains Mono',monospace)"
const SERIF = "var(--font-serif,'Instrument Serif',serif)"
const SANS  = "var(--font-sans,'Inter',sans-serif)"

interface Props {
  form: { addr: string; imageId: string; reward: string; token: Token }
  go: (s: Screen) => void
  onAddrChange: (v: string) => void
  onImageChange: (v: string) => void
  onRewardChange: (v: string) => void
  onToken: (t: Token) => void
  onSubmit: () => void
}

export default function Create({ form, go: _go, onAddrChange, onImageChange, onRewardChange, onToken, onSubmit }: Props) {
  const tokenBg  = (t: Token) => form.token === t ? '#1c1c1c' : 'transparent'
  const tokenClr = (t: Token) => form.token === t ? '#EDEDED' : '#8A8A8A'

  const inputCls = "w-full"
  const inputSty: React.CSSProperties = {
    width: '100%', background: '#0A0A0A', border: '1px solid #242424',
    color: '#EDEDED', fontFamily: MONO, fontSize: 13, padding: '13px 14px', borderRadius: 2,
  }

  return (
    <div className="max-w-[600px] mx-auto px-5 md:px-10 pt-10 md:pt-14 pb-16 md:pb-20">
      <div className="p-6 md:p-10" style={{ background: '#111111', border: '1px solid #242424' }}>
        <h1 className="text-[34px] md:text-[42px] mb-3"
          style={{ fontFamily: SERIF, fontWeight: 400, lineHeight: 1, color: '#EDEDED', margin: 0 }}
        >Open a bounty</h1>
        <p className="text-[13px] md:text-[14px] mb-7 md:mb-9"
          style={{ lineHeight: 1.55, color: '#8A8A8A', fontFamily: SANS, margin: 0 }}
        >
          Lock a reward against a contract. Hunters prove the exploit privately; the contract pays out automatically.
        </p>

        <div className="mb-5 md:mb-6">
          <label style={{ display: 'block', fontFamily: SANS, fontWeight: 500, fontSize: 13, color: '#EDEDED', marginBottom: 8 }}>
            Victim contract address
          </label>
          <input className={inputCls} value={form.addr} onChange={e => onAddrChange(e.target.value)} placeholder="CA4F…9XQ2" style={inputSty} />
          <div style={{ fontFamily: SANS, fontSize: 11, color: '#5A5A5A', marginTop: 7 }}>the deployed contract being tested</div>
        </div>

        <div className="mb-5 md:mb-6">
          <label style={{ display: 'block', fontFamily: SANS, fontWeight: 500, fontSize: 13, color: '#EDEDED', marginBottom: 8 }}>
            Guest ImageID
          </label>
          <input className={inputCls} value={form.imageId} onChange={e => onImageChange(e.target.value)} placeholder="0x9a3f…" style={inputSty} />
          <div style={{ fontFamily: SANS, fontSize: 11, color: '#5A5A5A', marginTop: 7 }}>hash of the open-source rule that defines a valid exploit</div>
        </div>

        <div className="mb-7">
          <label style={{ display: 'block', fontFamily: SANS, fontWeight: 500, fontSize: 13, color: '#EDEDED', marginBottom: 8 }}>
            Reward
          </label>
          <div className="flex gap-2 md:gap-3">
            <input value={form.reward} onChange={e => onRewardChange(e.target.value)} placeholder="500"
              style={{ ...inputSty, flex: 1, width: 'auto' }} />
            <div className="flex" style={{ border: '1px solid #242424', borderRadius: 2, overflow: 'hidden' }}>
              {(['XLM', 'USDC'] as Token[]).map((t, i) => (
                <span key={t} onClick={() => onToken(t)}
                  className="text-[11px] md:text-[12px] px-3 md:px-4 py-3 cursor-pointer"
                  style={{
                    fontFamily: MONO, background: tokenBg(t), color: tokenClr(t),
                    borderLeft: i > 0 ? '1px solid #242424' : 'none',
                  }}
                >{t}</span>
              ))}
            </div>
          </div>
          <div style={{ fontFamily: SANS, fontSize: 11, color: '#5A5A5A', marginTop: 7 }}>locked in escrow until a valid proof is submitted</div>
        </div>

        <div className="flex gap-3 items-start mb-7 p-4"
          style={{ border: '1px solid #242424', background: '#161616', borderRadius: 2 }}
        >
          <span style={{ fontSize: 13, color: '#8A8A8A', marginTop: 1 }}>ⓘ</span>
          <span style={{ fontFamily: MONO, fontSize: 12, color: '#8A8A8A', lineHeight: 1.55 }}>
            Opening calls <span style={{ color: '#EDEDED' }}>init()</span> then <span style={{ color: '#EDEDED' }}>fund()</span> via your wallet — two signatures.
          </span>
        </div>

        <button onClick={onSubmit}
          style={{ width: '100%', background: '#EDEDED', color: '#0A0A0A', border: 'none', padding: 16, fontFamily: SANS, fontWeight: 600, fontSize: 15, borderRadius: 2, cursor: 'pointer' }}
        >Open bounty &amp; lock reward</button>
        <div className="text-center mt-4 md:mt-5">
          <span style={{ fontFamily: MONO, fontSize: 12, color: '#5A5A5A', cursor: 'pointer', textDecoration: 'underline' }}>
            Advanced / how guests work ↓
          </span>
        </div>
      </div>
    </div>
  )
}
