import SectionHeading from './SectionHeading'
import ImpactCard from './ImpactCard'
import Reveal from './Reveal'
import { IMPACT } from '../data/siteData'

export default function ImpactIntro() {
  return (
    <section aria-labelledby="impact-title" className="section-y">
      <div className="container-x">
        <SectionHeading id="impact-title" align="center" title="Making a Difference, One Initiative at a Time" subtitle="Together we work towards stronger, healthier and more empowered communities." />
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {IMPACT.map((i, k) => <Reveal key={i.label} delay={k * 0.07}><ImpactCard {...i} /></Reveal>)}
        </div>
        <p className="mt-4 text-center text-xs text-ink/50">Figures will be added once verified by the Foundation.</p>
      </div>
    </section>
  )
}
