import { Instagram } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Photo from './Photo'
import { INSTAGRAM_POSTS, SOCIAL } from '../data/siteData'

export default function InstagramSection() {
  return (
    <section aria-labelledby="ig-title" className="section-y">
      <div className="container-x">
        <SectionHeading id="ig-title" title="Follow Our Journey" subtitle="See our latest activities, community initiatives and moments from the field." />
        <ul className="grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
          {INSTAGRAM_POSTS.map((p) => (
            <li key={p.image} className="aspect-square overflow-hidden rounded-xl shadow-soft">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Open our Instagram profile" className="block h-full w-full transition duration-300 hover:scale-105">
                <Photo src={p.image} alt={p.alt} />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-royal"><Instagram className="h-4 w-4" aria-hidden="true" /> Follow Us on Instagram</a>
        </div>
      </div>
    </section>
  )
}
