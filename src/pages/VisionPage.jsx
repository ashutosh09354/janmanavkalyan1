import { Link } from 'react-router-dom'
import { ArrowRight, HeartHandshake, Leaf, Users } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { ORG } from '../data/siteData'

const values = [
  {
    icon: HeartHandshake,
    title: 'Compassion in Action',
    text: 'We respond to people’s needs with empathy, dignity and practical support.',
    tone: 'bg-saffron/15 text-saffron-700',
  },
  {
    icon: Users,
    title: 'Community Togetherness',
    text: 'We bring volunteers and communities together to create meaningful, lasting change.',
    tone: 'bg-royal-50 text-royal',
  },
  {
    icon: Leaf,
    title: 'Sustainable Hope',
    text: 'We work towards stronger, healthier communities where everyone can move forward.',
    tone: 'bg-leaf-50 text-leaf-700',
  },
]

export default function VisionPage() {
  return (
    <>
      <PageBanner title="Our Vision" subtitle="A more caring, inclusive and empowered society for everyone." />

      <section aria-labelledby="vision-title" className="section-y">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-royal to-royal-700 px-7 py-12 text-center shadow-lift sm:px-12 sm:py-16">
              <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand text-white">
                <HeartHandshake className="h-10 w-10" aria-hidden="true" />
              </span>
              <p className="mt-7 font-serif text-2xl leading-relaxed text-white sm:text-3xl">
                “Serving humanity, creating hope, and building a better tomorrow together.”
              </p>
            </div>
            <span aria-hidden="true" className="absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-3xl bg-saffron/30" />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow">The future we believe in</p>
            <SectionHeading id="vision-title" title="A better tomorrow begins with all of us" subtitle="Our vision is to help create a society where people support one another and every community has the opportunity to thrive." />
            <div className="space-y-4 text-[15px] leading-relaxed text-ink/75">
              <p>{ORG.name} works towards a future where access to education, healthcare, food and social support is strengthened through collective action.</p>
              <p>We believe that lasting change grows from compassion, participation and responsible service. By working alongside communities, volunteers and partners, we aim to turn hope into practical progress.</p>
            </div>
            <Link to="/about" className="btn btn-royal mt-7">Know Our Work <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="values-title" className="bg-cream section-y">
        <div className="container-x">
          <SectionHeading id="values-title" align="center" title="What guides our vision" subtitle="Our values shape the way we serve communities and work with people." />
          <div className="grid gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text, tone }, index) => (
              <Reveal key={title} delay={index * 0.08} className="rounded-2xl border border-ink/10 bg-white p-6 text-center shadow-soft">
                <span className={`mx-auto grid h-14 w-14 place-items-center rounded-full ${tone}`}><Icon className="h-7 w-7" aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold text-royal">{title}</h3>
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
