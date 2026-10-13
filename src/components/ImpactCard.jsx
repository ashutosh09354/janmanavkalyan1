import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import Icon from './Icon'

export default function ImpactCard({ icon, value, label, tone = 'leaf' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView || value == null) return
    const c = animate(0, value, { duration: 1.4, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, value])

  return (
    <div ref={ref} className="rounded-2xl bg-white p-5 text-center shadow-soft sm:p-6">
      <span className={`mx-auto grid h-11 w-11 place-items-center rounded-full ${tone === 'leaf' ? 'bg-leaf-50 text-leaf' : 'bg-saffron/15 text-saffron-700'}`}>
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <p className="mt-3 text-3xl font-extrabold text-royal sm:text-4xl">
        {value == null ? '—' : typeof value === 'number' ? n : value}
      </p>
      <p className="mt-1 text-sm font-medium text-ink/70">{label}</p>
    </div>
  )
}
