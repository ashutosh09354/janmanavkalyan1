import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Photo from '../Photo'
import Reveal from '../Reveal'
import SectionTitle from '../SectionTitle'
import { ORG } from '../../data/siteData'

/* ------------------------------------------------------------------ */
export default function MissionSection() {
  return (
    <section aria-labelledby="mission-h" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <SectionTitle id="mission-h">Our Mission</SectionTitle>
          <p className="mt-6 text-lg leading-relaxed text-ink/85 sm:text-xl">{ORG.mission}</p>
          <p className="mt-5 text-2xl font-semibold text-[#ff8000]">{ORG.hindiTagline}</p>
          <Link to="/about" className="btn mt-7 !rounded-full !bg-[#ff8000] !px-8 !text-white hover:!bg-[#d96800]">Know More <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </Reveal>
        <Reveal delay={0.1} className="relative">
          <span aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-[#ff8000]/25" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lift">
            <Photo src="/images/about/About1.png" alt="Foundation members and volunteers standing together at a community clean-up" position="50% 30%" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
