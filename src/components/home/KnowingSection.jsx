import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Photo from '../Photo'
import Reveal from '../Reveal'
import SectionTitle from '../SectionTitle'
import { ORG } from '../../data/siteData'

/* ------------------------------------------------------------------ */
export default function KnowingSection() {
  return (
    <section aria-labelledby="know-h" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lift">
            <Photo src="/images/about/About.png" alt="Foundation members and volunteers at a community activity" position="50% 40%" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <SectionTitle id="know-h">Knowing the Foundation</SectionTitle>
          <p className="mt-6 text-lg leading-relaxed text-ink/85">
            {ORG.name} is a community-led organisation. {ORG.mission}
          </p>
          <Link to="/about" className="btn mt-7 !px-8">Discover More <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </Reveal>
      </div>
    </section>
  )
}
