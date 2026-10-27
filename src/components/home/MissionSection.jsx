import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Activity, Soup, Users, Target } from 'lucide-react'
import Photo from '../Photo'
import Reveal from '../Reveal'
import { ORG } from '../../data/siteData'

/* ── Cause pillars ───────────────────────────────────────────────────── */
const PILLARS = [
  { icon: BookOpen, title: 'Education',     color: 'text-brand bg-[#FF8000]/10' },
  { icon: Activity, title: 'Healthcare',    color: 'text-rose-500 bg-rose-50'   },
  { icon: Soup,     title: 'Food Support',  color: 'text-amber-500 bg-amber-50' },
  { icon: Users,    title: 'Social Welfare',color: 'text-leaf bg-leaf-50'       },
]

/* ──────────────────────────────────────────────────────────────────── */
export default function MissionSection() {
  return (
    <section aria-labelledby="mission-h" className="bg-sand py-14 sm:py-16 lg:py-20">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

        {/* ── Left: text ─────────────────────────────────────────── */}
        <Reveal>
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Our Mission
            </span>
          </div>

          {/* Headline */}
          <h2
            id="mission-h"
            style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
            className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.25rem]"
          >
            Working for a<br />
            <span className="text-brand">Better Tomorrow</span>
          </h2>

          {/* Underline accent */}
          <span className="mt-3 block h-1 w-16 rounded-full bg-saffron" aria-hidden="true" />

          {/* Mission text */}
          <p className="mt-5 max-w-[480px] text-base leading-relaxed text-ink/75 sm:text-lg">
            {ORG.mission}
          </p>

          {/* Cause pillars */}
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {PILLARS.map(({ icon: Icon, title, color }) => (
              <div key={title} className="flex items-center gap-2.5">
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${color}`}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-sm font-bold text-ink">{title}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link to="/about" className="btn mt-8 !px-8">
            Know More <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>

        {/* ── Right: image ───────────────────────────────────────── */}
        <Reveal delay={0.1} className="relative">
          {/* Dot-grid accent */}
          <span
            aria-hidden="true"
            className="absolute -right-3 -top-3 grid h-20 w-20 grid-cols-4 gap-1.5 opacity-25"
          >
            {Array.from({ length: 16 }).map((_, k) => (
              <span key={k} className="h-1.5 w-1.5 rounded-full bg-saffron" />
            ))}
          </span>

          {/* Image frame */}
          <div className="relative overflow-hidden rounded-3xl shadow-lift">
            <div className="aspect-[4/3] overflow-hidden">
              <Photo
                src="/images/about/About1.png"
                alt="Foundation members and volunteers standing together at a community clean-up"
                position="50% 30%"
              />
            </div>

            {/* Hindi tagline ribbon — overlaps bottom-right corner */}
            <div
              aria-hidden="true"
              className="absolute bottom-4 right-0 rounded-l-xl bg-brand px-5 py-2.5 shadow-lift"
            >
              <p className="text-base font-bold text-white">{ORG.hindiTagline}</p>
            </div>
          </div>

          {/* Floating badge card */}
          <div className="absolute -bottom-4 left-5 flex max-w-[210px] items-center gap-3 rounded-2xl border border-white/70 bg-white px-4 py-3 shadow-lift">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
              <Target className="h-4 w-4" aria-hidden="true" />
            </span>
            <p className="text-sm font-semibold leading-snug text-ink">
              Stronger Communities<br />Happier Futures
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
