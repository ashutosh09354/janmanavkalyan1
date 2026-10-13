import { Link } from 'react-router-dom'
import { HeartHandshake, Users, Handshake } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const cards = [
  { icon: HeartHandshake, title: 'Donate', text: 'Support initiatives that help communities in need.', to: '/donate', label: 'Donate Now', cls: 'btn-saffron', tint: 'text-saffron-700 bg-saffron/15' },
  { icon: Users, title: 'Volunteer', text: 'Give your time, skills and energy to meaningful causes.', to: '/contact#volunteer-form', label: 'Become a Volunteer', cls: 'btn-royal', tint: 'text-royal bg-royal-50' },
  { icon: Handshake, title: 'Partner', text: 'Work with us to create greater community impact.', to: '/contact#partner-form', label: 'Partner With Us', cls: 'btn-leaf', tint: 'text-leaf bg-leaf-50' },
]

export default function CTASection() {
  return (
    <section aria-labelledby="cta-title" className="section-y">
      <div className="container-x">
        <div className="rounded-xl border border-royal-50/20 bg-gradient-to-br from-royal to-royal-700 px-4 py-10 sm:px-10">
          <SectionHeading id="cta-title" light align="center" title="Be a Part of the Change" subtitle="Your support can help us reach more people and create lasting impact." />
          <div className="grid gap-4 md:grid-cols-3">
            {cards.map(({ icon: I, title, text, to, label, cls, tint }, i) => (
              <Reveal key={title} delay={i * 0.07} className="flex flex-col items-center rounded-lg border border-[#d9ded8] bg-white p-6 text-center">
                <span className={`grid h-12 w-12 place-items-center rounded-full ${tint}`}><I className="h-6 w-6" aria-hidden="true" /></span>
                <h3 className="mt-3 text-lg font-bold">{title}</h3>
                <p className="mt-1 mb-5 text-sm text-ink/70">{text}</p>
                <Link to={to} className={`btn ${cls} mt-auto w-full`}>{label}</Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
