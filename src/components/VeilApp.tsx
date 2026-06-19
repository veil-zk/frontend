'use client'

import { useState, useRef, useEffect } from 'react'
import { AppState, Screen, Filter, Token, BOUNTIES, STEPS, INITIAL_STATE } from '@/lib/data'
import Landing from './screens/Landing'
import Features from './screens/Features'
import HowItWorks from './screens/HowItWorks'
import Hunt from './screens/Hunt'
import Submit from './screens/Submit'
import Verify from './screens/Verify'
import Create from './screens/Create'
import AppNav from './AppNav'
import Toast from './Toast'

export default function VeilApp() {
  const [s, setS] = useState<AppState>(INITIAL_STATE)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  const addTimer = (t: ReturnType<typeof setTimeout>) => { timers.current.push(t) }
  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = [] }

  useEffect(() => () => clearTimers(), [])

  const go = (screen: Screen) => {
    setS(prev => ({ ...prev, screen }))
    try { window.scrollTo(0, 0) } catch (_) {}
  }

  const openSubmit = (id: string) => {
    clearTimers()
    setS(prev => ({ ...prev, screen: 'submit', activeId: id, fileLoaded: false, fileName: '', verifyStep: 0, verified: false }))
    try { window.scrollTo(0, 0) } catch (_) {}
  }

  const loadFile = (name: string) => {
    setS(prev => ({ ...prev, fileLoaded: true, fileName: name || 'receipt.bin', dragging: false }))
  }

  const startVerify = () => {
    if (!s.fileLoaded) return
    clearTimers()

    const activeId = s.activeId
    let step = 0

    const tick = () => {
      step++
      setS(st => ({ ...st, verifyStep: step }))
      if (step < STEPS.length) {
        addTimer(setTimeout(tick, 1150))
      } else {
        setS(st => ({ ...st, verified: true, claimed: { ...st.claimed, [activeId]: true } }))
        tickBalance(activeId)
      }
    }

    setS(prev => ({ ...prev, screen: 'verify', verifyStep: 0, verified: false }))
    addTimer(setTimeout(tick, 900))
    try { window.scrollTo(0, 0) } catch (_) {}
  }

  const tickBalance = (activeId: string) => {
    const bounty = BOUNTIES.find(b => b.id === activeId)
    const total = bounty?.rewardNum ?? 500
    const inc = Math.ceil(total / 22)
    let remaining = total

    const step = () => {
      const toAdd = Math.min(inc, remaining)
      remaining -= toAdd
      setS(st => ({ ...st, balance: st.balance + toAdd }))
      if (remaining > 0) addTimer(setTimeout(step, 32))
    }
    step()
  }

  const backToBounties = () => {
    clearTimers()
    setS(prev => ({ ...prev, screen: 'hunt', verifyStep: 0, verified: false }))
    try { window.scrollTo(0, 0) } catch (_) {}
  }

  const submitCreate = () => {
    clearTimers()
    setS(prev => ({ ...prev, toast: 'Bounty opened — reward locked in escrow', screen: 'hunt' }))
    try { window.scrollTo(0, 0) } catch (_) {}
    addTimer(setTimeout(() => setS(prev => ({ ...prev, toast: null })), 3400))
  }

  // Derived
  const allBounties = BOUNTIES.map(b => ({
    ...b,
    isOpen:    b.status === 'open' && !s.claimed[b.id],
    isClaimed: b.status === 'claimed' || !!s.claimed[b.id],
  }))

  let filtered = allBounties
  if (s.filter === 'open')    filtered = allBounties.filter(b => b.isOpen)
  if (s.filter === 'claimed') filtered = allBounties.filter(b => b.isClaimed)
  if (s.search.trim()) {
    const q = s.search.trim().toLowerCase()
    filtered = filtered.filter(b => b.title.toLowerCase().includes(q) || b.victim.toLowerCase().includes(q))
  }

  const openCount  = allBounties.filter(b => b.isOpen).length
  const totalPool  = allBounties.filter(b => b.isOpen).reduce((a, b) => a + b.rewardNum, 0).toLocaleString('en-US')
  const activeBounty = allBounties.find(b => b.id === s.activeId) ?? allBounties[0]

  const steps = STEPS.map((label, i) => {
    const done   = s.verifyStep > i
    const active = s.verifyStep === i && !s.verified
    return {
      label,
      idx: String(i + 1).padStart(2, '0'),
      glyph: done ? '✓' : '',
      dotBorder:  done ? 'rgba(20,184,138,.5)' : (active ? '#14B88A' : '#242424'),
      dotBg:      done ? '#14B88A' : (active ? 'rgba(20,184,138,.15)' : 'transparent'),
      labelColor: done || active ? '#EDEDED' : '#5A5A5A',
      tag:        done ? 'done' : (active ? 'verifying' : 'pending'),
      tagColor:   done ? '#4ADE9E' : (active ? '#14B88A' : '#5A5A5A'),
    }
  })

  const isApp      = ['hunt', 'submit', 'verify', 'create'].includes(s.screen)
  const huntActive = ['hunt', 'submit', 'verify'].includes(s.screen)

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A', color: '#EDEDED', position: 'relative' }}>
      {s.screen === 'landing'    && <Landing go={go} connectWallet={() => go('hunt')} />}
      {s.screen === 'features'   && <Features go={go} connectWallet={() => go('hunt')} />}
      {s.screen === 'howitworks' && <HowItWorks go={go} connectWallet={() => go('hunt')} />}

      {isApp && (
        <>
          <AppNav
            go={go}
            huntActive={huntActive}
            createActive={s.screen === 'create'}
            balanceStr={s.balance.toLocaleString('en-US')}
          />

          {s.screen === 'hunt' && (
            <Hunt
              bounties={filtered}
              openCount={openCount}
              totalPool={totalPool}
              filter={s.filter}
              search={s.search}
              onFilter={(f: Filter) => setS(prev => ({ ...prev, filter: f }))}
              onSearch={(q: string) => setS(prev => ({ ...prev, search: q }))}
              onSubmit={openSubmit}
            />
          )}

          {s.screen === 'submit' && (
            <Submit
              bounty={activeBounty}
              fileLoaded={s.fileLoaded}
              fileName={s.fileName}
              dragging={s.dragging}
              go={go}
              onPickFile={() => (document.getElementById('veil-file') as HTMLInputElement | null)?.click()}
              onDragOver={(e) => { e.preventDefault(); if (!s.dragging) setS(prev => ({ ...prev, dragging: true })) }}
              onDragLeave={(e) => { e.preventDefault(); setS(prev => ({ ...prev, dragging: false })) }}
              onDrop={(e) => { e.preventDefault(); loadFile(e.dataTransfer?.files?.[0]?.name ?? 'receipt.bin') }}
              onPick={(e) => loadFile((e.target as HTMLInputElement).files?.[0]?.name ?? 'receipt.bin')}
              startVerify={startVerify}
            />
          )}

          {s.screen === 'verify' && (
            <Verify
              bounty={activeBounty}
              steps={steps}
              verified={s.verified}
              balanceStr={s.balance.toLocaleString('en-US')}
              backToBounties={backToBounties}
            />
          )}

          {s.screen === 'create' && (
            <Create
              form={s.form}
              go={go}
              onAddrChange={(v: string) => setS(prev => ({ ...prev, form: { ...prev.form, addr: v } }))}
              onImageChange={(v: string) => setS(prev => ({ ...prev, form: { ...prev.form, imageId: v } }))}
              onRewardChange={(v: string) => setS(prev => ({ ...prev, form: { ...prev.form, reward: v } }))}
              onToken={(t: Token) => setS(prev => ({ ...prev, form: { ...prev.form, token: t } }))}
              onSubmit={submitCreate}
            />
          )}
        </>
      )}

      {s.toast && <Toast message={s.toast} />}
    </div>
  )
}
