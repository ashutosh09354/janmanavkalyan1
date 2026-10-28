import PageBanner from '../components/PageBanner'
import MediaSection from '../components/MediaSection'
import Gallery from '../components/Gallery'
import CTASection from '../components/CTASection'

export default function MediaPage() {
  return (
    <>
      <PageBanner title="In the Media" subtitle="Media coverage of documented Foundation activities." />
      <MediaSection />
      <section aria-labelledby="instagram-updates-title" className="section-y bg-cream">
        <div className="container-x">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">From the field</p>
            <h2 id="instagram-updates-title" className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">Latest Instagram Updates</h2>
            <span aria-hidden="true" className="mt-3 flex gap-1"><i className="h-1 w-10 rounded-full bg-[#ff8000]" /><i className="h-1 w-4 rounded-full bg-[#ffb347]" /></span>
            <p className="mt-3 text-sm text-ink/70 sm:text-base">Recent moments and activities shared by Janmanav Kalyan Foundation.</p>
          </div>
          <Gallery showFilters={false} showCategories={false} />
        </div>
      </section>
      <CTASection />
    </>
  )
}
