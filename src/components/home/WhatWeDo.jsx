import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Photo from '../Photo'
import Reveal from '../Reveal'
import SectionTitle from '../SectionTitle'
import { BLOOD_DONATION_IMAGE } from '../../data/siteData'
import { IMG } from './homeImages'

/* ------------------------------------------------------------------ */
const GROUPS = [
  {
    title: 'Health & Care',
    items: [
      { title: 'Healthcare', image: IMG.hospital, alt: 'Foundation members gathered outside a hospital emergency department' },
      { title: 'Blood Donation', image: BLOOD_DONATION_IMAGE, alt: 'A Foundation volunteer donating blood' },
    ],
  },
  {
    title: 'Food & Nutrition',
    items: [{ title: 'Food Distribution', image: IMG.food, alt: 'Volunteers serving food at a community activity' }],
  },
  {
    title: 'Education',
    items: [{ title: 'Education', image: IMG.education, alt: 'Foundation members at an activity supporting education' }],
  },
  {
    title: 'Community & Environment',
    items: [
      { title: 'Community Welfare', image: '/images/about/About.png', alt: 'Foundation members holding commemorative plaques together' },
      { title: 'Environment', image: '/images/causes/environment.png', alt: 'Foundation volunteers at a community clean-up' },
    ],
  },
]

export default function WhatWeDo() {
  const tiles = GROUPS.flatMap((g) => g.items.map((it) => ({ ...it, group: g.title })))
  return (
    <section id="causes" aria-labelledby="wwd-h" className="scroll-mt-28 bg-sand py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <Reveal><SectionTitle id="wwd-h">What We Work On</SectionTitle></Reveal>
        <div className="mt-12 grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((it, n) => (
            <Reveal key={it.title} delay={(n % 3) * 0.07}>
              <Link to="/work" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-soft">
                  <Photo src={it.image} alt={it.alt} className="transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">{it.group}</span>
                </div>
                <h3 className="mt-4 flex items-center justify-between border-b-2 border-ink/10 pb-3 text-xl font-bold text-royal transition group-hover:border-brand group-hover:text-brand">
                  {it.title}
                  <ArrowRight className="h-5 w-5 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
