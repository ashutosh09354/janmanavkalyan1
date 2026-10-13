import { Link } from 'react-router-dom'
import Photo from './Photo'
import Reveal from './Reveal'

export default function VolunteerSection() {
  return (
    <section id="volunteer" aria-labelledby="vol-title" className="relative overflow-hidden bg-royal py-14 text-white sm:py-20">
      <span aria-hidden="true" className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-leaf/25 blur-2xl" />
      <span aria-hidden="true" className="absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-saffron/20 blur-2xl" />
      <div className="container-x relative grid items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <h2 id="vol-title" className="text-2xl font-bold !text-white sm:text-3xl lg:text-4xl">People Behind the Change</h2>
          <p className="mt-3 max-w-md text-white/85">Change becomes possible when people come together.</p>
          <Link to="/contact#volunteer-form" className="btn btn-saffron mt-6">Become a Volunteer</Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="aspect-[16/9] overflow-hidden rounded-2xl ring-2 ring-white/20 shadow-lift">
            <Photo src="/images/about/About.png" alt="Jan Manav Kalyan Foundation members standing together" position="center 40%" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
