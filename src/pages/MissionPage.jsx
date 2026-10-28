import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, HeartPulse, Soup, Users } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { MISSION_CONTENT } from '../data/siteData'

const focusAreas = [
  { icon: BookOpen, title: 'Education', text: 'Supporting learning opportunities that help children and families build a stronger future.', tone: 'bg-royal-50 text-royal' },
  { icon: HeartPulse, title: 'Healthcare', text: 'Helping communities access care, awareness and support when it matters most.', tone: 'bg-saffron/15 text-saffron-700' },
  { icon: Soup, title: 'Food Support', text: 'Standing with people in need through food distribution and community care.', tone: 'bg-leaf-50 text-leaf-700' },
  { icon: Users, title: 'Social Welfare', text: 'Bringing people together through service, volunteering and collective action.', tone: 'bg-royal-50 text-royal' },
]

export default function MissionPage() {
  return (
    <>
      <PageBanner title="Our Mission" subtitle="Working together to serve people and strengthen communities." />

      <section aria-labelledby="mission-title" className="section-y">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">What drives our work</p>
            <SectionHeading id="mission-title" title={MISSION_CONTENT.title} subtitle="Our mission is to support people in need and help communities move towards a healthier, more hopeful future." />
            <div className="space-y-4 text-[15px] leading-relaxed text-ink/75">
              <p>{MISSION_CONTENT.introduction}</p>
              <p>{MISSION_CONTENT.belief}</p>
            </div>
            <Link to="/contact" className="btn btn-royal mt-7">Work With Us <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-saffron to-[#e96d00] p-8 text-center shadow-lift sm:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/70">Our promise</p>
              <p className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-4xl">Serve with compassion. Act with purpose.</p>
              <span className="mx-auto mt-7 block h-1 w-16 rounded-full bg-royal" aria-hidden="true" />
            </div>
            <span aria-hidden="true" className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-3xl bg-leaf/25" />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="mission-goals-title" className="section-y">
        <div className="container-x">
          <SectionHeading id="mission-goals-title" align="center" title="What We Strive For" subtitle="Our mission is shaped by four commitments to the communities we serve." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MISSION_CONTENT.goals.map((goal, index) => (
              <Reveal key={goal.title} delay={index * 0.07} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
                <span className="text-sm font-bold text-saffron">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-bold text-royal">{goal.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{goal.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="commitment-title" className="section-y bg-cream">
        <div className="container-x max-w-4xl text-center">
          <SectionHeading id="commitment-title" align="center" title="Our Commitment" />
          <div className="space-y-4 text-[15px] leading-relaxed text-ink/75">
            <p>{MISSION_CONTENT.commitment}</p>
            <p>{MISSION_CONTENT.closing}</p>
            <p className="font-semibold text-royal">{MISSION_CONTENT.callToAction}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="mission-focus-title" className="section-y bg-cream">
        <div className="container-x">
          <SectionHeading id="mission-focus-title" align="center" title="Our areas of focus" subtitle="We focus our efforts where community support can make a practical difference." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map(({ icon: Icon, title, text, tone }, index) => (
              <Reveal key={title} delay={index * 0.07} className="rounded-2xl border border-ink/10 bg-white p-6 text-center shadow-soft">
                <span className={`mx-auto grid h-14 w-14 place-items-center rounded-full ${tone}`}><Icon className="h-7 w-7" aria-hidden="true" /></span>
                <h3 className="mt-5 text-lg font-bold text-royal">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
