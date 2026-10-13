import PageBanner from '../components/PageBanner'
import CauseCard from '../components/CauseCard'
import { CAUSES } from '../data/siteData'

export default function CausesPage() {
  return (
    <>
      <PageBanner title="Our Causes" subtitle="We work towards a stronger and more compassionate society." />
      <section className="section-y">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAUSES.map((c) => <CauseCard key={c.slug} {...c} to="/work" />)}
        </div>
      </section>
    </>
  )
}
