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
import IntroOverlay from './IntroOverlay'
import { useWallet } from '@/hooks/useWallet'
import { shortAddr } from '@/lib/wallet'
import { CONTRACTS_CONFIGURED, claim } from '@/lib/stellar'

export default function VeilApp() {
  const [s, setS] = useState<AppState>(INITIAL_STATE)
  const [intro, setIntro] = useState(true)
  const [showTop, setShowTop] = useState(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const receiptRef = useRef<Uint8Array | null>(null)
  const wallet = useWallet()
  const connected = wallet.status === 'connected'

  const addTimer = (t: ReturnType<typeof setTimeout>) => { timers.current.push(t) }
  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = [] }

  useEffect(() => () => clearTimers(), [])

  // Esc → step back one level
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setS(prev => {
        if (prev.screen === 'submit' || prev.screen === 'verify') return { ...prev, screen: 'hunt' }
        if (prev.screen === 'landing') return prev
        return { ...prev, screen: 'landing' }
      })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // scroll-to-top button visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (screen: Screen) => {
    setS(prev => ({ ...prev, screen }))
    try { window.scrollTo(0, 0) } catch (_) {}
  }

  const showToast = (msg: string, ms = 3200) => {
    setS(prev => ({ ...prev, toast: msg }))
    addTimer(setTimeout(() => setS(prev => ({ ...prev, toast: null })), ms))
  }

  const connectWallet = async () => {
    try {
      const w = await wallet.connect()
      showToast('Wallet connected · ' + shortAddr(w.address))
    } catch (e) {
      showToast(e instanceof Error ? e.message : 'Could not connect — exploring in demo mode', 4200)
    }
    go('hunt')
  }

  const openSubmit = (id: string) => {
    clearTimers()
    setS(prev => ({ ...prev, screen: 'submit', activeId: id, fileLoaded: false, fileName: '', verifyStep: 0, verified: false }))
    try { window.scrollTo(0, 0) } catch (_) {}
  }

  const loadFile = (name: string) => {
    setS(prev => ({ ...prev, fileLoaded: true, fileName: name || 'receipt.bin', dragging: false }))
  }

  // capture the dropped/picked receipt bytes for a real on-chain claim
  const captureFile = async (file?: File) => {
    if (!file) { receiptRef.current = null; loadFile('receipt.bin'); return }
    try { receiptRef.current = new Uint8Array(await file.arrayBuffer()) } catch { receiptRef.current = null }
    loadFile(file.name)
  }

  const startVerify = async () => {
    if (!s.fileLoaded) return
    clearTimers()
    const activeId = s.activeId

    // ── real on-chain claim (only when a verifier contract + wallet exist) ──
    if (CONTRACTS_CONFIGURED && wallet.address && receiptRef.current) {
      setS(prev => ({ ...prev, screen: 'verify', verifyStep: 1, verified: false }))
      try { window.scrollTo(0, 0) } catch (_) {}
      try {
        await claim(wallet.address, receiptRef.current, wallet.sign)
        setS(st => ({ ...st, verifyStep: STEPS.length, verified: true, claimed: { ...st.claimed, [activeId]: true } }))
        wallet.refreshBalance()
        showToast('Proof valid · reward released on-chain', 4200)
      } catch (e) {
        setS(st => ({ ...st, verifyStep: 0, screen: 'submit' }))
        showToast(e instanceof Error ? e.message : 'Claim failed on-chain', 5000)
      }
      return
    }

    // ── demo flow (no contract configured) ──
    let step = 0

    const tick = () => {
      step++
      setS(st => ({ ...st, verifyStep: step }))
      if (step < STEPS.length) {
        addTimer(setTimeout(tick, 1150))
      } else {
        setS(st => ({ ...st, verified: true, claimed: { ...st.claimed, [activeId]: true } }))
        tickBalance(activeId)
        showToast('Proof valid · reward released to your wallet', 4000)
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
      <div key={s.screen} className="screen-enter">
      {s.screen === 'landing'    && <Landing go={go} connectWallet={connectWallet} />}
      {s.screen === 'features'   && <Features go={go} connectWallet={connectWallet} />}
      {s.screen === 'howitworks' && <HowItWorks go={go} connectWallet={connectWallet} />}

      {isApp && (
        <>
          <AppNav
            go={go}
            huntActive={huntActive}
            createActive={s.screen === 'create'}
            connected={connected}
            address={wallet.address}
            connecting={wallet.status === 'connecting'}
            onConnect={connectWallet}
            balanceStr={(connected ? wallet.balance : s.balance).toLocaleString('en-US')}
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
              onDrop={(e) => { e.preventDefault(); captureFile(e.dataTransfer?.files?.[0]) }}
              onPick={(e) => captureFile((e.target as HTMLInputElement).files?.[0] ?? undefined)}
              startVerify={startVerify}
            />
          )}

          {s.screen === 'verify' && (
            <Verify
              bounty={activeBounty}
              steps={steps}
              verified={s.verified}
              balanceStr={(connected ? wallet.balance : s.balance).toLocaleString('en-US')}
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
      </div>

      {s.toast && <Toast message={s.toast} />}

      {showTop && !intro && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="vbtn"
          aria-label="Scroll to top"
          style={{
            position: 'fixed', right: 22, bottom: 22, zIndex: 40,
            width: 42, height: 42, borderRadius: '50%',
            background: '#161616', color: '#EDEDED',
            border: '1px solid #2e2e2e', cursor: 'pointer',
            fontSize: 16, lineHeight: 1,
            boxShadow: '0 8px 24px -10px rgba(0,0,0,.7)',
          }}
        >↑</button>
      )}

      {intro && <IntroOverlay onDone={() => setIntro(false)} />}
    </div>
  )
}
