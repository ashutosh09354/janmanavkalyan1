import { useState } from 'react'
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Send } from 'lucide-react'
import { CONTACT, SOCIAL } from '../data/siteData'

const input = 'w-full rounded-xl border border-royal/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-royal'

export default function ContactForm({ standalone = false }) {
  const [sent, setSent] = useState(false)
  const Title = 'h2'
  const submit = (e) => {
    e.preventDefault()
    // TODO: connect to your backend, Formspree, EmailJS, etc.
    setSent(true)
  }
  const info = [
    { icon: MapPin, label: 'Address', value: CONTACT.address },
    { icon: Phone, label: 'Phone', value: CONTACT.phone },
    { icon: Mail, label: 'Email', value: CONTACT.email },
  ].filter(({ value }) => value)
  const socials = [
    { icon: Instagram, label: 'Instagram', href: SOCIAL.instagram },
    { icon: Facebook, label: 'Facebook', href: SOCIAL.facebook },
    { icon: Youtube, label: 'YouTube', href: SOCIAL.youtube },
  ]
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-10 sm:py-12 lg:py-14">
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 h-full w-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
        <path d="M0 0h250C194 87 112 105 0 170z" fill="#38bdf8" opacity=".22" />
        <path d="M0 282c152 57 213 175 175 303-23 76-82 130-175 158z" fill="#7dd3fc" opacity=".2" />
        <path d="M1440 0h-220c-41 100-131 145-271 184 124 42 225 40 326-3 78-34 132-91 165-181z" fill="#34d399" opacity=".16" />
        <path d="M1440 193c-127 14-204 86-242 195-47 135-107 230-246 298 173 53 353 2 488-83z" fill="#fde047" opacity=".3" />
        <path d="M0 800h440C309 749 207 660 177 540 151 437 94 379 0 344z" fill="#60a5fa" opacity=".14" />
        <g fill="#38bdf8" opacity=".16">
          <circle cx="42" cy="205" r="3" /><circle cx="66" cy="205" r="3" /><circle cx="90" cy="205" r="3" /><circle cx="114" cy="205" r="3" />
          <circle cx="42" cy="229" r="3" /><circle cx="66" cy="229" r="3" /><circle cx="90" cy="229" r="3" /><circle cx="114" cy="229" r="3" />
          <circle cx="42" cy="253" r="3" /><circle cx="66" cy="253" r="3" /><circle cx="90" cy="253" r="3" /><circle cx="114" cy="253" r="3" />
          <circle cx="1320" cy="568" r="3" /><circle cx="1344" cy="568" r="3" /><circle cx="1368" cy="568" r="3" /><circle cx="1392" cy="568" r="3" />
          <circle cx="1320" cy="592" r="3" /><circle cx="1344" cy="592" r="3" /><circle cx="1368" cy="592" r="3" /><circle cx="1392" cy="592" r="3" />
          <circle cx="1320" cy="616" r="3" /><circle cx="1344" cy="616" r="3" /><circle cx="1368" cy="616" r="3" /><circle cx="1392" cy="616" r="3" />
        </g>
      </svg>
      <div className="container-x relative">
        <div className={`mb-7 max-w-3xl sm:mb-8 ${standalone ? 'sr-only' : ''}`}>
          <p className="mb-2 flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-leaf-700">
            <span className="h-1 w-9 rounded-full bg-leaf" />
            GET IN TOUCH
          </p>
          <Title id="contact-title" className="text-4xl font-extrabold tracking-tight text-royal sm:text-5xl lg:text-6xl">
            Contact <span className="text-leaf-700">Us</span>
          </Title>
          <p className="mt-2 text-lg font-semibold text-ink sm:text-xl">We'd love to hear from you. Get in touch with us.</p>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink/70 sm:text-base">
            Have a question, want to volunteer, or looking to support our work? Reach out to us. Our team is here to help.
          </p>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          <div className="rounded-2xl border border-white/80 bg-white/90 p-6 shadow-[0_12px_35px_rgba(30,64,175,0.09)] backdrop-blur-sm sm:p-7">
            <h2 className="text-2xl font-bold tracking-tight text-royal">Contact Information</h2>
            <div className="mb-3 mt-2 flex gap-1"><span className="h-1 w-7 rounded-full bg-leaf" /><span className="h-1 w-4 rounded-full bg-saffron" /></div>
            <p className="mb-4 text-sm leading-relaxed text-ink/65">You can reach us through the following channels. We'll get back to you as soon as possible.</p>
            <ul>
              {info.map(({ icon: I, label, value }) => (
                <li key={label} className="flex items-center gap-4 border-b border-royal/10 py-2.5 last:border-0">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${label === 'Address' ? 'bg-leaf-50 text-leaf' : label === 'Phone' ? 'bg-sky-100 text-sky-500' : 'bg-amber-100 text-amber-500'}`}><I className="h-5 w-5" aria-hidden="true" /></span>
                  <div><p className="text-sm font-bold text-royal">{label}</p><p className="text-sm text-ink/75">{value}</p></div>
                </li>
              ))}
              <li className="flex items-center gap-4 border-t border-royal/10 pt-4">
                <span className="text-sm font-bold text-royal">Follow Us</span>
                <div className="flex gap-3">
                  {socials.map(({ icon: I, label, href }) => (
                    <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-royal text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-royal-700"><I className="h-5 w-5" aria-hidden="true" /></a>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          <form id="volunteer-form" onSubmit={submit} className="rounded-2xl border border-white/80 bg-white/90 p-6 shadow-[0_12px_35px_rgba(30,64,175,0.09)] backdrop-blur-sm sm:p-7" aria-label="Contact form">
            <h2 className="text-2xl font-bold tracking-tight text-royal">Send Us a Message</h2>
            <div className="mb-3 mt-2 flex gap-1"><span className="h-1 w-7 rounded-full bg-leaf" /><span className="h-1 w-4 rounded-full bg-saffron" /></div>
            <p className="mb-4 text-sm leading-relaxed text-ink/65">Fill out the form below and we'll get back to you as soon as possible.</p>
            {sent ? (
              <p role="status" className="rounded-xl bg-leaf-50 p-4 text-sm font-medium text-leaf-700">Thank you. Your message has been sent and we will get back to you soon.</p>
            ) : (
              <>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div><label htmlFor="c-name" className="mb-1 block text-sm font-semibold">Name <span className="text-red-500">*</span></label><input id="c-name" name="name" required autoComplete="name" className={input} placeholder="Your name" /></div>
                  <div><label htmlFor="c-phone" className="mb-1 block text-sm font-semibold">Phone <span className="text-red-500">*</span></label><input id="c-phone" name="phone" type="tel" required autoComplete="tel" className={input} placeholder="Your phone number" /></div>
                </div>
                <div className="mt-3"><label htmlFor="c-email" className="mb-1 block text-sm font-semibold">Email <span className="text-red-500">*</span></label><input id="c-email" name="email" type="email" required autoComplete="email" className={input} placeholder="Your email" /></div>
                <div className="mt-3"><label htmlFor="c-msg" className="mb-1 block text-sm font-semibold">Message <span className="text-red-500">*</span></label><textarea id="c-msg" name="message" required rows={3} className={input} placeholder="How can we help?" /></div>
                <button type="submit" className="btn btn-royal mt-4 w-full"><Send className="h-4 w-4" aria-hidden="true" />Send Message</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
