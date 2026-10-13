import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, GraduationCap, HeartPulse, Droplet } from 'lucide-react'
import Photo from './Photo'

const chips = [
  { icon: Users, label: 'Community Welfare' },
  { icon: GraduationCap, label: 'Education Support' },
  { icon: HeartPulse, label: 'Healthcare Assistance' },
  { icon: Droplet, label: 'Blood Donation' },
]

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate w-full overflow-hidden bg-royal">
      {/* Photo — focal point kept toward the group so faces stay visible on mobile */}
      <div className="absolute inset-0 -z-10">
        <Photo src="/images/hero/hero.jpeg" alt="Members and volunteers of Jan Manav Kalyan Foundation gathered at a community food distribution" position="62% 30%" eager />
        {/* Light royal-blue overlay: photo stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-royal/85 via-royal/45 to-transparent max-md:bg-gradient-to-t max-md:from-royal max-md:via-royal/55 max-md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-royal/80 to-transparent" />
      </div>

      <div className="container-x flex min-h-[560px] flex-col justify-end pb-6 pt-56 sm:min-h-[600px] sm:pt-32 md:justify-center md:pb-24 md:pt-28 lg:min-h-[640px]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="max-w-xl">
          <h1 id="hero-title" className="text-4xl font-extrabold leading-[1.1] tracking-[0.03em] !text-white sm:text-5xl lg:text-6xl">
            <span className="inline-block">Together, We Can</span>{' '}
            <span className="inline-block">Create <span className="text-saffron">a Better Tomorrow</span></span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
            Jan Manav Kalyan Foundation works to create meaningful change through community service, humanitarian initiatives and collective action.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/donate" className="btn btn-saffron px-7">Donate Now</Link>
            <Link to="/contact#volunteer" className="btn btn-ghost px-7">Join Our Mission</Link>
          </div>
        </motion.div>

        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="mt-10 grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:gap-8">
          {chips.map(({ icon: I, label }) => (
            <li key={label} className="flex flex-col items-center gap-1.5 text-center text-[11px] font-medium text-white sm:flex-row sm:text-sm">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-leaf sm:h-10 sm:w-10"><I className="h-4 w-4" aria-hidden="true" /></span>
              {label}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
