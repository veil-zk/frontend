'use client'

import { Bounty } from '@/lib/data'
import { shortAddr } from '@/lib/wallet'
import { RevealDecrypt } from '@/components/RevealBox'

const MONO = "var(--font-mono,'JetBrains Mono',monospace)"
const SERIF = "var(--font-serif,'Instrument Serif',serif)"
const SANS = "var(--font-sans,'Inter',sans-serif)"

interface Props {
  bounty: Bounty
  backToBounties: () => void
}

export default function Detail({ bounty, backToBounties }: Props) {
  const claimed = bounty.status === 'claimed'
  const rows: [string, string, string][] = [
    ['Status', claimed ? 'CLAIMED' : 'OPEN', claimed ? '#5A8A75' : '#14B88A'],
    ['Reward', bounty.reward, '#14B88A'],
    ['Victim contract', bounty.victim, '#EDEDED'],
    ['Created by', bounty.creator ? shortAddr(bounty.creator) : '—', '#EDEDED'],
    ['Claimed by', bounty.claimer ? shortAddr(bounty.claimer) : '— (not yet claimed)', claimed ? '#EDEDED' : '#5A5A5A'],
  ]

  return (
    <div className="max-w-[720px] mx-auto px-5 md:px-10 pt-10 md:pt-14 pb-16 md:pb-20">
      <div style={{ background: '#111111', border: '1px solid #242424' }}>
        <div className="px-5 md:px-8 py-7 md:py-9" style={{ borderBottom: '1px solid #242424' }}>
          <div style={{ fontFamily: MONO, fontSize: 11, color: '#5A5A5A', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 10 }}>
            Bounty #{bounty.id}
          </div>
          <h2 className="text-[28px] md:text-[40px]" style={{ fontFamily: SERIF, fontWeight: 400, lineHeight: 1.05, color: '#EDEDED', margin: 0 }}>
            {bounty.title}
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 14, color: '#8A8A8A', margin: '10px 0 0' }}>{bounty.desc}</p>
        </div>

        <div className="px-5 md:px-8 py-5 md:py-7">
          {rows.map(([k, v, c]) => (
            <div key={k} className="flex justify-between py-3 gap-4" style={{ borderBottom: '1px solid #1c1c1c' }}>
              <span style={{ fontFamily: MONO, fontSize: 12, color: '#5A5A5A' }}>{k}</span>
              <span style={{ fontFamily: MONO, fontSize: 12, color: c, textAlign: 'right', wordBreak: 'break-all' }}>{v}</span>
            </div>
          ))}
          <p style={{ fontFamily: MONO, fontSize: 11, color: '#5A5A5A', margin: '14px 0 0', lineHeight: 1.6 }}>
            {claimed
              ? 'The hunter proved the exploit in zero-knowledge — the secret input was never revealed. The contract verified the proof on-chain and released the reward automatically.'
              : 'Bounty is still open. A hunter can submit a valid proof to claim the reward.'}
          </p>
        </div>
      </div>

      {claimed && <div className="mt-4 md:mt-5"><RevealDecrypt /></div>}

      <button onClick={backToBounties} className="vbtn vbtn-ghost mt-4 md:mt-5"
        style={{ background: 'transparent', color: '#EDEDED', border: '1px solid #333', padding: '13px 24px', fontFamily: SANS, fontWeight: 500, fontSize: 14, borderRadius: 2, cursor: 'pointer' }}>
        ← Back to bounties
      </button>
    </div>
  )
}
