import SectionHeading from './SectionHeading'
import ActivityCard from './ActivityCard'
import Reveal from './Reveal'
import { STORIES } from '../data/siteData'

export default function StoriesSection() {
  return (
    <section aria-labelledby="stories-title" className="section-y">
      <div className="container-x">
        <SectionHeading id="stories-title" title="Stories of Service" subtitle="Real stories from our community initiatives." />
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-5">
          {STORIES.map((s, i) => (
            <Reveal key={`${s.id}-media-v2`} delay={i * 0.06} className="w-[78%] shrink-0 snap-start sm:w-auto"><ActivityCard {...s} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
