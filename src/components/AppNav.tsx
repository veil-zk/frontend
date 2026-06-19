'use client'

import { Screen } from '@/lib/data'

const MONO = "var(--font-mono,'JetBrains Mono',monospace)"
const SANS = "var(--font-sans,'Inter',sans-serif)"

interface Props {
  go: (s: Screen) => void
  huntActive: boolean
  createActive: boolean
  balanceStr: string
}

export default function AppNav({ go, huntActive, createActive, balanceStr }: Props) {
  const tabBg  = (on: boolean) => on ? '#1c1c1c' : 'transparent'
  const tabClr = (on: boolean) => on ? '#EDEDED' : '#8A8A8A'

  return (
    <div className="flex items-center justify-between px-5 md:px-10 py-[14px] md:py-[18px]"
      style={{ borderBottom: '1px solid #242424', position: 'sticky', top: 0, background: '#0A0A0A', zIndex: 20 }}
    >
      <div className="flex items-center gap-5 md:gap-10">
        <div onClick={() => go('landing')}
          style={{ fontFamily: MONO, fontWeight: 700, fontSize: 17, letterSpacing: '.34em', cursor: 'pointer', color: '#EDEDED' }}
        >
          VEIL
        </div>
        <div className="flex gap-[3px] md:gap-[6px]"
          style={{ border: '1px solid #242424', borderRadius: 2, padding: 3 }}
        >
          <span onClick={() => go('hunt')}
            className="text-[11px] md:text-[12px] px-3 md:px-[14px] py-[6px] md:py-[7px]"
            style={{ fontFamily: MONO, letterSpacing: '.02em', borderRadius: 1, cursor: 'pointer', background: tabBg(huntActive), color: tabClr(huntActive) }}
          >
            <span className="hidden sm:inline">Hunt bounties</span>
            <span className="inline sm:hidden">Hunt</span>
          </span>
          <span onClick={() => go('create')}
            className="text-[11px] md:text-[12px] px-3 md:px-[14px] py-[6px] md:py-[7px]"
            style={{ fontFamily: MONO, letterSpacing: '.02em', borderRadius: 1, cursor: 'pointer', background: tabBg(createActive), color: tabClr(createActive) }}
          >
            <span className="hidden sm:inline">Create bounty</span>
            <span className="inline sm:hidden">Create</span>
          </span>
        </div>
      </div>

      {/* wallet badge */}
      <div className="flex items-center gap-2 md:gap-[9px] px-3 md:px-[14px] py-2 md:py-[8px]"
        style={{ border: '1px solid #242424', borderRadius: 2 }}
      >
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#14B88A', display: 'inline-block', boxShadow: '0 0 0 3px rgba(20,184,138,.12)' }} />
        <span className="hidden sm:inline" style={{ fontFamily: MONO, fontSize: 12, color: '#EDEDED', letterSpacing: '.02em' }}>GD7X…K2P9</span>
        <span className="hidden sm:inline" style={{ fontFamily: MONO, fontSize: 12, color: '#5A5A5A' }}>·</span>
        <span style={{ fontFamily: MONO, fontSize: 12, color: '#8A8A8A' }}>{balanceStr} XLM</span>
      </div>
    </div>
  )
}
