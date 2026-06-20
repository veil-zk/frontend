'use client'

import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '@/lib/motion'

const MONO = "var(--font-mono,'JetBrains Mono',monospace)"
const SANS = "var(--font-sans,'Inter',sans-serif)"

const TEAL = '#14B88A'
const TEAL_HI = '#2BD8A6'
const EDGE = '#242424'

/** A single leaf node box. */
function Node({ x, y, w, h, label, value, accent }: {
  x: number; y: number; w: number; h: number; label: string; value: string; accent?: boolean
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={7}
        fill="#0E0E0E" stroke={accent ? 'rgba(20,184,138,.45)' : EDGE} strokeWidth={1} />
      <text x={x + 13} y={y + h / 2 - 7} fill={TEAL} style={{ fontFamily: MONO, fontSize: 8.5, letterSpacing: '.12em' }}>{label}</text>
      <text x={x + 13} y={y + h / 2 + 11} fill="#EDEDED" style={{ fontFamily: MONO, fontSize: 12 }}>{value}</text>
    </g>
  )
}

/** A container with a bottom header strip and two inner chips. */
function Container({ x, y, w, h, title, c1, c2 }: {
  x: number; y: number; w: number; h: number; title: string
  c1: { label: string; value: string }; c2: { label: string; value: string }
}) {
  const chipX = x + 16, chipW = w - 32, chipH = 50
  const c1y = y + 26, c2y = y + 90
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={9} fill="#0B0B0B" stroke={EDGE} strokeWidth={1} />
      {/* inner chips */}
      {[{ ...c1, cy: c1y }, { ...c2, cy: c2y }].map((c, i) => (
        <g key={i}>
          <rect x={chipX} y={c.cy} width={chipW} height={chipH} rx={5}
            fill="#121212" stroke="rgba(20,184,138,.28)" strokeWidth={1} />
          <text x={chipX + 12} y={c.cy + 20} fill={TEAL} style={{ fontFamily: MONO, fontSize: 8, letterSpacing: '.1em' }}>{c.label}</text>
          <text x={chipX + 12} y={c.cy + 37} fill="#EDEDED" style={{ fontFamily: MONO, fontSize: 11.5 }}>{c.value}</text>
        </g>
      ))}
      {/* bottom header strip */}
      <rect x={x} y={y + h - 34} width={w} height={34} rx={0} fill="rgba(20,184,138,.06)" />
      <line x1={x} y1={y + h - 34} x2={x + w} y2={y + h - 34} stroke={EDGE} strokeWidth={1} />
      <text x={x + w / 2} y={y + h - 13} fill="#C7C7C7" textAnchor="middle" style={{ fontFamily: SANS, fontWeight: 600, fontSize: 12 }}>{title}</text>
    </g>
  )
}

type Edge = { id: string; d: string; label?: string; lx?: number; ly?: number; private?: boolean; dur: number }

// ── edges (viewBox 0 0 1000 560) ───────────────────────────────
const EDGES: Edge[] = [
  { id: 'e1', d: 'M136,280 C158,280 156,275 176,275', label: 'exploit', lx: 150, ly: 267, dur: 2.0 },
  { id: 'e2a', d: 'M344,204 C384,204 380,204 420,204', label: 'a = •••', lx: 382, ly: 196, private: true, dur: 1.7 },
  { id: 'e2b', d: 'M344,276 C384,276 380,276 420,276', label: 'b = •••', lx: 382, ly: 268, private: true, dur: 1.9 },
  { id: 'e3a', d: 'M588,204 C626,204 626,204 664,204', label: 'journal', lx: 610, ly: 196, dur: 2.1 },
  { id: 'e3b', d: 'M588,276 C626,276 626,276 664,276', label: 'seal', lx: 616, ly: 268, dur: 1.8 },
  { id: 'e4a', d: 'M832,204 C858,204 856,280 872,280', dur: 2.0 },
  { id: 'e4b', d: 'M832,276 C856,276 858,280 872,280', label: 'valid ✓', lx: 846, ly: 250, dur: 2.2 },
  // decorative long binding arc victim → verifier
  { id: 'e5', d: 'M76,244 C76,86 748,86 748,150', label: 'victim binding', lx: 412, ly: 78, dur: 3.4 },
]

export default function FlowDiagram() {
  const [reduce, setReduce] = useState(false)
  useEffect(() => { setReduce(prefersReducedMotion()) }, [])

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <div style={{ minWidth: 760 }}>
        <svg viewBox="0 0 1000 560" width="100%" role="img"
          aria-label="Veil proof pipeline: victim contract to hunter to RISC Zero zkVM to verifier to payout"
          style={{ display: 'block' }}
        >
          {/* dotted-grid background */}
          <defs>
            <pattern id="flowgrid" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#181818" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="1000" height="560" fill="url(#flowgrid)" />

          {/* edges: faint base + animated flow overlay */}
          {EDGES.map((e) => (
            <g key={e.id}>
              <path id={e.id} d={e.d} fill="none" stroke={EDGE} strokeWidth={1.4} />
              <path d={e.d} fill="none"
                stroke={e.private ? TEAL_HI : TEAL}
                strokeWidth={e.private ? 1.8 : 1.4}
                strokeDasharray={e.private ? '4 6' : '5 8'}
                strokeLinecap="round"
                className={reduce ? undefined : 'flow-edge'}
                opacity={e.id === 'e5' ? 0.5 : 0.95}
              />
              {/* traveling dot */}
              {!reduce && (
                <circle r={e.private ? 3.4 : 3} fill={e.private ? TEAL_HI : TEAL}>
                  <animateMotion dur={`${e.dur}s`} repeatCount="indefinite" rotate="auto">
                    <mpath href={`#${e.id}`} />
                  </animateMotion>
                </circle>
              )}
              {e.label && (
                <text x={e.lx} y={e.ly} fill={e.private ? TEAL_HI : '#8A8A8A'}
                  textAnchor="middle" style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '.02em' }}>{e.label}</text>
              )}
            </g>
          ))}

          {/* port dots */}
          {[[136, 280], [176, 275], [344, 204], [344, 276], [420, 204], [420, 276],
            [588, 204], [588, 276], [664, 204], [664, 276], [832, 204], [832, 276], [872, 280]].map(([px, py], i) => (
            <circle key={i} cx={px} cy={py} r={2.6} fill={TEAL} />
          ))}

          {/* nodes */}
          <Node x={16} y={244} w={120} h={72} label="VICTIM" value="CA4F…9XQ2" accent />
          <Container x={176} y={150} w={168} h={250} title="Hunter · local"
            c1={{ label: 'EXPLOIT', value: 'a •• b ••' }} c2={{ label: 'GUEST', value: 'program' }} />
          <Container x={420} y={150} w={168} h={250} title="RISC Zero zkVM"
            c1={{ label: 'RECEIPT', value: 'journal' }} c2={{ label: 'RECEIPT', value: 'seal' }} />
          <Container x={664} y={150} w={168} h={250} title="Verifier contract"
            c1={{ label: 'CHECK', value: 'image_id ✓' }} c2={{ label: 'CHECK', value: 'victim_id ✓' }} />
          <Node x={872} y={244} w={112} h={72} label="PAYOUT" value="2,500 XLM" accent />
        </svg>
      </div>

      {/* legend */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-5 px-1">
        <span className="inline-flex items-center gap-2" style={{ fontFamily: MONO, fontSize: 11, color: '#8A8A8A' }}>
          <span style={{ width: 14, height: 0, borderTop: `2px dashed ${TEAL}`, display: 'inline-block' }} /> data flow
        </span>
        <span className="inline-flex items-center gap-2" style={{ fontFamily: MONO, fontSize: 11, color: TEAL_HI }}>
          <span style={{ width: 14, height: 0, borderTop: `2px dashed ${TEAL_HI}`, display: 'inline-block' }} /> private · never leaves machine
        </span>
        <span style={{ fontFamily: MONO, fontSize: 11, color: '#5A5A5A' }}>
          secret <span style={{ color: '#EDEDED' }}>a,b</span> enter the proof but never the chain
        </span>
      </div>
    </div>
  )
}
