import PageBanner from '../components/PageBanner'
import WorkSection from '../components/WorkSection'
import StoriesSection from '../components/StoriesSection'
import CTASection from '../components/CTASection'

export default function WorkPage() {
  return (
    <>
      <PageBanner title="Our Work" subtitle="Documented community activities by the Foundation." />
      <WorkSection />
      <StoriesSection />
      <CTASection />
    </>
  )
}
