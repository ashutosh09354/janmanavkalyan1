import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Heart, Leaf } from 'lucide-react'
import Photo from '../Photo'
import { BLOOD_DONATION_IMAGE, ORG } from '../../data/siteData'
import { IMG } from './homeImages'

/* ── Slides ──────────────────────────────────────────────────────────── */
const SLIDES = [
  {
    image: '/images/hero/hero.jpeg',
    position: '50% 40%',
    title: ['Serving Humanity,', 'Creating Hope'],
    text: ORG.mission,
    cta: { label: 'Join Our Mission', to: '/contact#volunteer-form' },
    cta2: { label: 'Explore Our Work', to: '/work' },
    alt: 'Foundation members and volunteers gathered at a community meal',
    badge: 'Together, we make a difference',
  },
  {
    image: BLOOD_DONATION_IMAGE,
    position: '50% 35%',
    title: ['Blood Donation', 'Camps'],
    text: 'Organizing blood donation camps so that people in need can be supported.',
    cta: { label: 'Get Involved', to: '/contact#volunteer-form' },
    cta2: { label: 'See Our Work', to: '/work' },
    alt: 'A Foundation volunteer donating blood',
    badge: 'Donate blood, save a life',
  },
  {
    image: IMG.foodPrep,
    position: '50% 45%',
    title: ['Food', 'Distribution'],
    text: 'Providing food to those in need, together with our volunteers.',
    cta: { label: 'Contribute Now', to: '/donate' },
    cta2: { label: 'Learn More', to: '/work' },
    alt: 'Foundation volunteers preparing food at a community activity',
    badge: 'Nourishing our community',
  },
  {
    image: '/images/causes/environment.png',
    position: '50% 50%',
    title: ['A Cleaner,', 'Greener Future'],
    text: 'Supporting a cleaner and greener future through community clean-up activities.',
    cta: { label: 'Get Involved', to: '/contact#volunteer-form' },
    cta2: { label: 'See Our Work', to: '/work' },
    alt: 'Foundation volunteers at a community clean-up',
    badge: 'Building a better tomorrow',
  },
]


/* ── Component ───────────────────────────────────────────────────────── */
export default function HeroSlider() {
  const [i, setI] = useState(0)
  const reduced = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (reduced.current) return undefined
    const timer = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 6500)
    return () => clearInterval(timer)
  }, [])

  const slide = SLIDES[i]

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured"
      className="relative overflow-hidden bg-white"
    >
      {/* ── Decorative blobs (very subtle) ──────────────────────────── */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-brand/5 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 h-[360px] w-[360px] rounded-full bg-saffron/10 blur-3xl"
      />

      {/* ── Slide ───────────────────────────────────────────────────── */}
      <div className="container-x py-10 sm:py-14 lg:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${SLIDES.length}`}
          >
            {/* ── Left: text ──────────────────────────────────────── */}
            <div className="order-1 max-w-[560px]">

              {/* Eyebrow badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-[#FF8000]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
                
                Community · Compassion · Change
              </span>

              {/* Headline */}
              <h1
                style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
                className="mt-5 text-5xl font-bold leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]"
              >
                {slide.title[0]}
                <br />
                <span className="text-brand">{slide.title[1]}</span>
              </h1>

              {/* Sub-text */}
              <p className="mt-5 max-w-[480px] text-base leading-relaxed text-ink/70 sm:text-lg">
                {slide.text}
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link to={slide.cta.to} className="btn !px-7">
                  {slide.cta.label}{' '}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to={slide.cta2.to}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-full border-2 border-ink/20 px-6 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
                >
                  {slide.cta2.label}
                </Link>
              </div>

            </div>

            {/* ── Right: image + badge ─────────────────────────────── */}
            <div className="relative order-2">
              {/* Image frame */}
              <div className="relative overflow-hidden rounded-3xl shadow-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <Photo
                    src={slide.image}
                    alt={slide.alt}
                    position={slide.position}
                    eager
                    className="transition duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating badge card */}
              <div className="absolute -bottom-4 left-4 flex max-w-[220px] items-center gap-3 rounded-2xl border border-white/60 bg-white px-4 py-3 shadow-lift sm:left-6">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Heart className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold leading-snug text-ink">
                  {slide.badge}
                </p>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Slide dots ──────────────────────────────────────────── */}
        <div
          className="mt-10 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Slides"
        >
          {SLIDES.map((_, k) => (
            <button
              key={k}
              role="tab"
              aria-selected={k === i}
              aria-label={`Go to slide ${k + 1}`}
              onClick={() => setI(k)}
              className={`h-2 rounded-full transition-all duration-300 ${
                k === i ? 'w-6 bg-brand' : 'w-2 bg-ink/20 hover:bg-brand/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
