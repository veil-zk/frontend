'use client'

import { useEffect, useRef } from 'react'

interface Props {
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
}

export default function CanvasDiamond({ width = 540, height = 540, className, style }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cv = ref.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const w = cv.clientWidth || width
    const h = cv.clientHeight || height
    cv.width = w * dpr
    cv.height = h * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const gap = 12
    const R = w * 0.46
    const cx = w / 2
    const cy = h / 2
    const start = performance.now()
    let raf = 0

    const draw = (t: number) => {
      const time = (t - start) / 1000
      ctx.clearRect(0, 0, w, h)
      for (let y = 0; y <= h; y += gap) {
        for (let x = 0; x <= w; x += gap) {
          const dx = Math.abs(x - cx)
          const dy = Math.abs(y - cy)
          const man = dx + dy
          if (man > R) continue
          const nd = man / R
          const wave = Math.sin(nd * 9 - time * 1.5)
          let inten = (1 - nd) * 0.62 + wave * 0.24 + 0.12
          inten = Math.max(0, Math.min(1, inten))
          if (inten < 0.07) continue
          const sq = 1.1 + inten * 3.4
          const teal = nd < 0.34 && wave > 0.5
          ctx.fillStyle = teal
            ? `rgba(20,184,138,${(0.5 * inten + 0.25).toFixed(2)})`
            : `rgba(237,237,237,${(0.5 * inten).toFixed(2)})`
          ctx.fillRect(x - sq / 2, y - sq / 2, sq, sq)
        }
      }
      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [width, height])

  return (
    <canvas
      ref={ref}
      className={className}
      style={{ width, height, ...style }}
    />
  )
}
