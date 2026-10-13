import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Photo from '../Photo'
import Reveal from '../Reveal'
import SectionTitle from '../SectionTitle'
import { ORG } from '../../data/siteData'

/* ------------------------------------------------------------------ */
export default function KnowingSection() {
  return (
    <section aria-labelledby="know-h" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lift">
            <Photo src="/images/hero/hero01.jpeg" alt="Foundation members and community volunteers gathered at an event" position="50% 40%" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <SectionTitle id="know-h">Knowing the Foundation</SectionTitle>
          <p className="mt-7 text-lg leading-relaxed text-ink/80">
            {ORG.name} is a community-led organisation. {ORG.mission}
          </p>
          <Link to="/about" className="btn btn-brand mt-8 !rounded-full !px-8">Discover More <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </Reveal>
      </div>
    </section>
  )
}
