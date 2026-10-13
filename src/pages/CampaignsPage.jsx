import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'

export default function CampaignsPage() {
  return (
    <>
    <PageBanner title="Campaigns" subtitle="Community action, shared openly." />
    <section className="section-y">
      <div className="container-x max-w-4xl">
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/65">There are no current campaign details available to publish. This page will be updated when the Foundation confirms a campaign brief, dates and location.</p>
        <div className="mt-8 border-l-2 border-saffron bg-white px-5 py-4">
          <p className="font-semibold text-royal">Campaign details pending confirmation</p>
          <p className="mt-1 text-sm text-ink/60">No dates, locations or fundraising targets have been assumed.</p>
        </div>
        <Link to="/work" className="text-link mt-7">Explore documented activities <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </div>
    </section>
    </>
  )
}
