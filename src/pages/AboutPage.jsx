import PageBanner from '../components/PageBanner'
import About from '../components/About'
import FeaturedActivity from '../components/FeaturedActivity'
import VolunteerSection from '../components/VolunteerSection'
import CTASection from '../components/CTASection'

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" subtitle="Learn about the community-led work and mission of the Foundation." />
      <About full />
      <FeaturedActivity />
      <VolunteerSection />
      <CTASection />
    </>
  )
}
