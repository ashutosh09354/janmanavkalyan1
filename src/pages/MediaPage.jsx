import PageBanner from '../components/PageBanner'
import MediaSection from '../components/MediaSection'
import CTASection from '../components/CTASection'

export default function MediaPage() {
  return (
    <>
      <PageBanner title="In the Media" subtitle="Media coverage of documented Foundation activities." />
      <MediaSection />
      <CTASection />
    </>
  )
}
