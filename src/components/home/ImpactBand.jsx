import { useEffect, useRef, useState } from 'react'
import Reveal from '../Reveal'
import SectionTitle from '../SectionTitle'
import { IMPACT } from '../../data/siteData'

/* ------------------------------------------------------------------ */
function Counter({ value }) {
  // Supports numbers (11) and strings like "5,000+" — counts up the digits, keeps suffix/prefix.
  const text = String(value)
  const match = text.match(/^(\D*)([\d,]+)(.*)$/)
  const [shown, setShown] = useState(match ? 0 : text)
  const ref = useRef(null)
  useEffect(() => {
    if (!match) return undefined
    const target = parseInt(match[2].replace(/,/g, ''), 10)
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      if (reduce) return setShown(target)
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min((t - start) / 1400, 1)
        setShown(Math.round(target * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])
  if (!match) return <span ref={ref}>{text}</span>
  const withCommas = match[2].includes(',') ? Number(shown).toLocaleString('en-IN') : String(shown)
  return <span ref={ref}>{match[1]}{withCommas}{match[3]}</span>
}

export default function ImpactBand() {
  return (
    <section id="impact" aria-labelledby="impact-h" className="scroll-mt-28 bg-royal py-16 text-white sm:py-20">
      <div className="container-x">
        <Reveal><SectionTitle id="impact-h" light>Our Impact</SectionTitle></Reveal>
        <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT.map((m) => (
            <div key={m.label} className="flex flex-col bg-royal px-6 py-9 text-center sm:py-12">
              <dt className="order-2 mx-auto mt-3 max-w-[14rem] text-sm font-medium leading-snug text-white/80 sm:text-base">{m.label}</dt>
              <dd className="order-1 text-5xl font-extrabold tracking-tight text-saffron sm:text-6xl">
                {m.value === null ? 'XX+' : <Counter value={m.value} />}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
