import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import Photo from '../Photo'
import { BLOOD_DONATION_IMAGE, ORG } from '../../data/siteData'
import { IMG } from './homeImages'

/* ------------------------------------------------------------------ */
const SLIDES = [
  {
    bg: 'bg-brand',
    image: '/images/hero/hero.jpeg',
    position: '50% 40%',
    eyebrow: ORG.name,
    title: ['Serving Humanity,', 'Creating Hope'],
    text: ORG.mission,
    cta: { label: 'Join Us', to: '/contact#volunteer-form' },
    alt: 'Foundation members and volunteers gathered at a community meal',
  },
  {
    bg: 'bg-royal',
    image: BLOOD_DONATION_IMAGE,
    position: '50% 35%',
    eyebrow: 'Our Causes',
    title: ['Blood Donation', 'Camps'],
    text: 'Organizing blood donation camps so that people in need can be supported.',
    cta: { label: 'See Our Work', to: '/work' },
    alt: 'A Foundation volunteer donating blood',
  },
  {
    bg: 'bg-brand-dark',
    image: IMG.foodPrep,
    position: '50% 45%',
    eyebrow: 'Our Causes',
    title: ['Food', 'Distribution'],
    text: 'Providing food to those in need, together with our volunteers.',
    cta: { label: 'Contribute Now', to: '/donate' },
    alt: 'Foundation volunteers preparing food at a community activity',
  },
  {
    bg: 'bg-[#26412F]',
    image: '/images/causes/environment.png',
    position: '50% 50%',
    eyebrow: 'Our Causes',
    title: ['A Cleaner,', 'Greener Future'],
    text: 'Supporting a cleaner and greener future through community clean-up activities.',
    cta: { label: 'Get Involved', to: '/contact#volunteer-form' },
    alt: 'Foundation volunteers at a community clean-up',
  },
]

export default function HeroSlider() {
  const [i, setI] = useState(0)
  const [playing, setPlaying] = useState(true)
  const reduced = useRef(typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    if (!playing || reduced.current) return undefined
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 6500)
    return () => clearInterval(t)
  }, [playing])

  const go = (n) => setI((n + SLIDES.length) % SLIDES.length)
  const s = SLIDES[i]

  return (
    <section aria-roledescription="carousel" aria-label="Featured" className="relative overflow-hidden bg-royal">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className={`grid min-h-[560px] lg:min-h-[600px] lg:grid-cols-[0.9fr_1.1fr] ${s.bg}`}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${SLIDES.length}`}
        >
          {/* image side (top on mobile, right on desktop) */}
          <div className="relative order-1 h-64 sm:h-80 lg:order-2 lg:h-auto">
            <Photo src={s.image} alt={s.alt} position={s.position} eager className="absolute inset-0" />
            <span aria-hidden="true" className={`pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r to-transparent lg:block ${s.bg === 'bg-brand' ? 'from-brand' : s.bg === 'bg-royal' ? 'from-royal' : s.bg === 'bg-brand-dark' ? 'from-brand-dark' : 'from-[#26412F]'}`} />
          </div>

          {/* text side */}
          <div className="order-2 flex items-center px-6 pb-20 pt-8 sm:px-10 lg:order-1 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] lg:pr-6 lg:pb-8 lg:pt-8">
            <div className="max-w-xl">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-saffron">{s.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight !text-white sm:text-5xl lg:text-[3.6rem]">
                {s.title[0]}
                <br />
                <span className="text-saffron">{s.title[1]}</span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">{s.text}</p>
              <Link to={s.cta.to} className="btn mt-8 !rounded-full bg-white !px-8 text-ink hover:bg-saffron">
                {s.cta.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* controls */}
      <div className="absolute inset-x-0 bottom-5 z-10 flex items-center justify-center gap-3 lg:justify-start lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
        <button onClick={() => go(i - 1)} aria-label="Previous slide" className="grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur transition hover:bg-white hover:text-ink"><ChevronLeft className="h-5 w-5" /></button>
        <div className="flex items-center gap-2">
          {SLIDES.map((_, n) => (
            <button key={n} onClick={() => setI(n)} aria-label={`Go to slide ${n + 1}`} aria-current={n === i} className={`h-2.5 rounded-full transition-all ${n === i ? 'w-8 bg-saffron' : 'w-2.5 bg-white/60 hover:bg-white'}`} />
          ))}
        </div>
        <button onClick={() => go(i + 1)} aria-label="Next slide" className="grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur transition hover:bg-white hover:text-ink"><ChevronRight className="h-5 w-5" /></button>
        <button onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause slideshow' : 'Play slideshow'} className="grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur transition hover:bg-white hover:text-ink">
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
      </div>
    </section>
  )
}
