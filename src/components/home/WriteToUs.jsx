import { useState } from 'react'
import { Send, Instagram } from 'lucide-react'
import Reveal from '../Reveal'
import { SOCIAL } from '../../data/siteData'

/* ------------------------------------------------------------------ */
const REASONS = ['Volunteering', 'Blood donation camps', 'Donations', 'Food distribution', 'Partnership with the Foundation', 'Others']
const field = 'w-full rounded-lg border border-white/25 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/45 focus:border-saffron'

export default function WriteToUs() {
  const [sent, setSent] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    // TODO: connect to your backend, Formspree, EmailJS, etc. (same as the Contact page form)
    setSent(true)
  }
  return (
    <section id="write-to-us" aria-labelledby="write-h" className="scroll-mt-28 bg-brand py-16 sm:py-20 lg:py-24">
      <div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal>
          <h2 id="write-h" className="section-title !text-white">Write to us</h2>
          <span className="title-bar !bg-saffron" aria-hidden="true" />
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/90">Have a question, want to volunteer or support our work? Tell us how you would like to be involved and our team will get back to you.</p>
          <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-white underline underline-offset-4 hover:text-saffron">
            <Instagram className="h-5 w-5" aria-hidden="true" /> Follow us on Instagram
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <div role="status" className="rounded-2xl bg-white p-8 text-center shadow-lift">
              <h3 className="text-2xl font-bold text-royal">Thank you for reaching out.</h3>
              <p className="mt-2 text-ink/70">We’ll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="sr-only">Reason for writing</span>
                <select required defaultValue="" className={field} aria-label="Reason for writing">
                  <option value="" disabled>I am writing about…</option>
                  {REASONS.map((r) => <option key={r}>{r}</option>)}
                </select>
              </label>
              <label><span className="sr-only">Your name</span><input required type="text" placeholder="Your Name" autoComplete="name" className={field} /></label>
              <label><span className="sr-only">Your email</span><input required type="email" placeholder="Your Email" autoComplete="email" className={field} /></label>
              <label className="sm:col-span-2"><span className="sr-only">Contact number</span><input type="tel" placeholder="Contact Number" autoComplete="tel" className={field} /></label>
              <label className="sm:col-span-2"><span className="sr-only">Message</span><textarea rows={4} placeholder="Your Message" className={field} /></label>
              <button type="submit" className="btn sm:col-span-2 !rounded-full bg-royal !px-8 text-white hover:bg-black sm:w-fit">
                Send <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
