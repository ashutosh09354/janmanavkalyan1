import PageBanner from '../components/PageBanner'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" subtitle="We'd love to hear from you. Get in touch with us." />
      <ContactForm standalone />
    </>
  )
}
