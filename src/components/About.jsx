import { Link } from 'react-router-dom'
import Photo from './Photo'
import Reveal from './Reveal'

export default function About({ full = false }) {
  const Heading = 'h2'
  return (
    <section aria-labelledby="about-title" className="section-y">
      <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <Reveal className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
            <Photo src="/images/about/About.png" alt="Volunteers and members of Janmanav Kalyan Foundation at a community activity" position="center 30%" />
          </div>
          <span aria-hidden="true" className="absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-3xl bg-leaf/20" />
          <span aria-hidden="true" className="absolute -left-3 -top-3 -z-10 h-16 w-16 rounded-full bg-saffron/30" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-sm font-semibold text-leaf-700">About Janmanav Kalyan Foundation</p>
          <Heading id="about-title" className="mt-1 text-2xl font-bold sm:text-3xl lg:text-4xl">Working Together for a Better Tomorrow</Heading>
          <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink/75">
            <p>Janmanav Kalyan Foundation is a community-driven organization dedicated to supporting people in need through education, healthcare, food distribution, blood donation, social welfare and other humanitarian initiatives.</p>
            <p>Our aim is to create positive change in society by bringing people together, with volunteers and community members working side by side.</p>
            {full && <p>[ Founding story, leadership and area of work — to be added by the Foundation. ]</p>}
          </div>
          {!full && <Link to="/about" className="btn btn-royal mt-6">Learn More</Link>}
        </Reveal>
      </div>
    </section>
  )
}
