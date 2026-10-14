import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Photo from '../Photo'
import { BLOOD_DONATION_IMAGE, ORG } from '../../data/siteData'
import { IMG } from './homeImages'

const SLIDES = [
  {
    image: '/images/hero/hero.jpeg',
    position: '50% 40%',
    eyebrow: ORG.name,
    title: ['Serving Humanity,', 'Creating Hope'],
    text: ORG.mission,
    cta: { label: 'Join Us', to: '/contact#volunteer-form' },
    alt: 'Foundation members and volunteers gathered at a community meal',
  },
  {
    image: BLOOD_DONATION_IMAGE,
    position: '50% 35%',
    eyebrow: 'Our Causes',
    title: ['Blood Donation', 'Camps'],
    text: 'Organizing blood donation camps so that people in need can be supported.',
    cta: { label: 'See Our Work', to: '/work' },
    alt: 'A Foundation volunteer donating blood',
  },
  {
    image: IMG.foodPrep,
    position: '50% 45%',
    eyebrow: 'Our Causes',
    title: ['Food', 'Distribution'],
    text: 'Providing food to those in need, together with our volunteers.',
    cta: { label: 'Contribute Now', to: '/donate' },
    alt: 'Foundation volunteers preparing food at a community activity',
  },
  {
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
  const reduced = useRef(typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    if (reduced.current) return undefined
    const timer = setInterval(() => setI((value) => (value + 1) % SLIDES.length), 6500)
    return () => clearInterval(timer)
  }, [])
  const slide = SLIDES[i]

  return (
    <section aria-roledescription="carousel" aria-label="Featured" className="relative overflow-hidden bg-white py-6 sm:py-8 lg:pb-8 lg:pt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="container-x grid items-center gap-9 lg:min-h-[640px] lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-12"
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${SLIDES.length}`}
        >
          <div className="order-1 max-w-[570px] lg:pb-12">
            <h1 style={{ fontFamily: 'Georgia, Times New Roman, serif' }} className="text-5xl font-semibold leading-[.98] tracking-[-0.055em] text-black sm:text-6xl lg:text-7xl xl:text-[5.15rem]">
              {slide.title[0]}<br />{slide.title[1]}
            </h1>
            <p className="mt-7 max-w-[510px] text-base leading-relaxed text-ink sm:text-lg">{slide.text}</p>
            <Link to={slide.cta.to} className="btn mt-8 !rounded-full !bg-[#ff8000] !px-8 !text-white hover:!bg-[#d96800]">
              {slide.cta.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="order-2 overflow-hidden rounded-[2rem] border-[3px] border-[#e9b65d] bg-white sm:rounded-[2.5rem]">
            <div className="aspect-[1.42/1] overflow-hidden rounded-[1.8rem] sm:rounded-[2.3rem]">
              <Photo src={slide.image} alt={slide.alt} position={slide.position} eager />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

    </section>
  )
}
