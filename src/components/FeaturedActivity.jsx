import { Link } from 'react-router-dom'
import Photo from './Photo'
import Reveal from './Reveal'

export default function FeaturedActivity() {
  return (
    <section aria-labelledby="featured-title" className="section-y">
      <div className="container-x">
        <div className="overflow-hidden rounded-xl border border-royal/15 bg-royal text-white shadow-lift lg:grid lg:grid-cols-5">
          <Reveal className="relative aspect-[4/3] lg:col-span-3 lg:aspect-auto lg:min-h-[420px]">
            <Photo src="/images/about/About1.png" alt="Foundation members and volunteers taking part together in a community activity" position="center 25%" />
          </Reveal>
          <Reveal delay={0.1} className="relative flex flex-col justify-center p-6 sm:p-10 lg:col-span-2">
            <span aria-hidden="true" className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-leaf/30" />
            <h2 id="featured-title" className="text-2xl font-bold !text-white sm:text-3xl lg:text-4xl">Serving the Community</h2>
            <p className="mt-4 leading-relaxed text-white/85">When members, volunteers and neighbours come together, a simple act of service becomes a shared effort. Every activity is carried by people who show up for their community.</p>
            <Link to="/work" className="btn btn-saffron mt-6 w-fit">Explore Our Work</Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
