import PageBanner from '../components/PageBanner'
import DonateSection from '../components/DonateSection'
import CTASection from '../components/CTASection'

export default function DonatePage() {
  return (
    <>
      <PageBanner title="Contribute" subtitle="Your contribution can help us continue serving communities." />
      <DonateSection />
      <CTASection />
    </>
  )
}
