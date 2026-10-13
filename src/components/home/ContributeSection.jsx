import { Link } from 'react-router-dom'
import { ArrowRight, HeartHandshake, HandHeart, Droplet } from 'lucide-react'
import Photo from '../Photo'
import Reveal from '../Reveal'
import SectionTitle from '../SectionTitle'
import { BLOOD_DONATION_IMAGE } from '../../data/siteData'
import { IMG } from './homeImages'

/* ------------------------------------------------------------------ */
const CONTRIB = [
  { icon: HeartHandshake, title: 'Donate', text: 'Support the Foundation’s community initiatives with your contribution.', image: IMG.food, alt: 'Volunteers serving food', to: '/donate', cta: 'Contribute' },
  { icon: HandHeart, title: 'Volunteer', text: 'Share your time, skills and care with the community.', image: '/images/hero/hero01.jpeg', alt: 'Foundation volunteers gathered together', to: '/contact#volunteer-form', cta: 'Join Us' },
  { icon: Droplet, title: 'Blood Donation', text: 'Take part in our blood donation camps and help those in need.', image: BLOOD_DONATION_IMAGE, alt: 'A Foundation volunteer donating blood', to: '/contact#volunteer-form', cta: 'Get Involved' },
]

export default function ContributeSection() {
  return (
    <section id="get-involved" aria-labelledby="contrib-h" className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <Reveal><SectionTitle id="contrib-h">Contribute</SectionTitle></Reveal>
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {CONTRIB.map(({ icon: Icon, ...c }, n) => (
            <Reveal key={c.title} delay={n * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="relative">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Photo src={c.image} alt={c.alt} className="transition duration-500 group-hover:scale-105" />
                  </div>
                  <span className="absolute bottom-0 left-5 z-10 grid h-12 w-12 translate-y-1/2 place-items-center rounded-full border-4 border-white bg-brand text-white shadow-lift"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                </div>
                <div className="flex flex-1 flex-col px-6 pb-7 pt-10">
                  <h3 className="text-2xl font-bold text-royal">{c.title}</h3>
                  <p className="mt-2 flex-1 text-base leading-relaxed text-ink/70">{c.text}</p>
                  <Link to={c.to} className="btn btn-brand mt-6 w-fit !rounded-full !px-7">{c.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
