import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const policies = [
  {
    id: 'privacy',
    title: 'Privacy Policy',
    text: 'The Foundation’s approved privacy policy will be published here. It should explain what personal information is collected, how it is used and retained, and how people can contact the Foundation about their information.',
  },
  {
    id: 'terms',
    title: 'Terms & Conditions',
    text: 'The Foundation’s approved terms and conditions will be added here after review.',
  },
  {
    id: 'donations',
    title: 'Donation Policy',
    text: 'The Foundation’s approved donation policy will be published here, including how contributions are accepted and acknowledged.',
  },
  {
    id: 'refunds',
    title: 'Refund & Cancellation Policy',
    text: 'The Foundation’s approved refund and cancellation policy will be published here. Please contact the Foundation before making a donation if you have a question.',
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    text: 'Information on this website is provided by Janmanav Kalyan Foundation. Campaign details, impact figures and other information will be updated when verified by the Foundation.',
  },
  {
    id: 'representation',
    title: 'Third-Party Representation Disclosure',
    text: 'The Foundation’s approved disclosure about third-party representatives, fundraising and use of its name or materials will be published here.',
  },
]

export default function LegalCenter() {
  return (
    <>
    <PageBanner title="Legal Center" subtitle="Policies and legal information for the Foundation." />
    <section className="section-y">
      <div className="container-x grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <header className="h-fit lg:sticky lg:top-28">
          <p className="eyebrow">Transparency</p>
          <h2 className="editorial-heading mt-3">Our Policies</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/65">Important information about the Foundation and its work. Policy wording is pending approval by the Foundation and will be published here when confirmed.</p>
          <nav aria-label="Legal documents" className="mt-7 hidden border-t border-ink/10 pt-3 lg:block">
            <ul className="space-y-1">
              {policies.map((policy) => (
                <li key={policy.id}>
                  <a href={`#${policy.id}`} className="block py-2 text-sm text-ink/70 transition hover:text-royal">{policy.title}</a>
                </li>
              ))}
              <li><a href="#grievance" className="block py-2 text-sm text-ink/70 transition hover:text-royal">Grievance & Contact</a></li>
            </ul>
          </nav>
        </header>

        <div>
          {policies.map((policy) => (
            <article id={policy.id} key={policy.id} className="scroll-mt-28 border-t border-ink/15 py-6 first:border-t-0 first:pt-0 sm:py-8">
              <h2 className="font-serif text-2xl font-medium text-royal">{policy.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65">{policy.text}</p>
            </article>
          ))}
          <article id="grievance" className="scroll-mt-28 border-t border-ink/15 py-6 sm:py-8">
            <h2 className="font-serif text-2xl font-medium text-royal">Grievance & Contact</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65">Official grievance contact details will be added after confirmation by the Foundation. For now, use the contact form to get in touch.</p>
            <Link to="/contact" className="text-link mt-4">Contact the Foundation <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </article>
        </div>
      </div>
    </section>
    </>
  )
}
