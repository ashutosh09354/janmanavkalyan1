import SectionHeading from './SectionHeading'
import CauseCard from './CauseCard'
import Reveal from './Reveal'
import { CAUSES } from '../data/siteData'

export default function CausesSection() {
  return (
    <section aria-labelledby="causes-title" className="section-y bg-white/60">
      <div className="container-x">
        <SectionHeading id="causes-title" title="Our Causes" subtitle="We work towards a stronger and more compassionate society." />
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {CAUSES.map((c, i) => <Reveal key={c.slug} delay={(i % 3) * 0.06}><CauseCard {...c} /></Reveal>)}
        </div>
      </div>
    </section>
  )
}
