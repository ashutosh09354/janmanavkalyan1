import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Photo from '../Photo'
import Reveal from '../Reveal'
import SectionTitle from '../SectionTitle'
import { IMG } from './homeImages'

/* ------------------------------------------------------------------ */
const UPDATES = [
  { image: IMG.clipBlood, alt: 'Newspaper clipping on a Foundation blood donation camp where 11 people donated blood', label: 'Blood donation camp' },
  { image: '/images/instagram/insta2.webp', alt: 'Newspaper clipping on a Foundation clean-up drive at a lake area', label: 'Clean-up drive' },
  { image: '/images/instagram/insta5.webp', alt: 'Newspaper clipping on a community meal organised by the Foundation', label: 'Community meal' },
  { image: '/images/instagram/insta4.webp', alt: 'Newspaper clipping featuring the Foundation', label: 'Foundation in the news' },
]

export default function LatestUpdates() {
  return (
    <section id="updates" aria-labelledby="updates-h" className="scroll-mt-28 bg-sand py-14 sm:py-16 lg:py-20">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal><SectionTitle id="updates-h">Latest Updates</SectionTitle></Reveal>
          <Link to="/media" className="text-link uppercase tracking-wider text-brand">View all <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {UPDATES.map((u, n) => (
            <Reveal key={u.image} delay={n * 0.06}>
              <Link to="/media" className="group block overflow-hidden rounded-2xl bg-white shadow-soft transition duration-300 hover:shadow-lift hover:-translate-y-1">
                <div className="aspect-[4/5] overflow-hidden rounded-t-2xl bg-[#eee]">
                  <Photo src={u.image} alt={u.alt} position="50% 0%" className="transition duration-500 group-hover:scale-105" />
                </div>
                <p className="border-t-4 border-brand px-4 py-3 text-sm font-semibold text-royal transition-colors duration-300 group-hover:text-brand sm:text-base">{u.label}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
