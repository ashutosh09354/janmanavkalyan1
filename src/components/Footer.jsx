import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube } from 'lucide-react'
import { ORG, SOCIAL } from '../data/siteData'

const groups = [
  {
    title: 'Foundation',
    links: [
      ['Our Mission', '/about'],
      ['Our Causes', '/causes'],
      ['Our Work', '/work'],
      ['Our Impact', '/#impact'],
      ['Contact', '/contact'],
    ],
  },
  {
    title: 'Get Involved',
    links: [
      ['Donate', '/donate'],
      ['Volunteer', '/contact#volunteer-form'],
      ['Partner with Us', '/contact#volunteer-form'],
      ['Campaigns', '/campaigns'],
    ],
  },
  {
    title: 'Updates',
    links: [
      ['In the Media', '/media'],
      ['Photo Gallery', '/gallery'],
      ['Latest Updates', '/#updates'],
    ],
  },
  {
    title: 'Legal & Policies',
    links: [
      ['Legal Center', '/legal-center'],
      ['Privacy Policy', '/legal-center#privacy'],
      ['Terms & Conditions', '/legal-center#terms'],
      ['Donation Policy', '/legal-center#donations'],
      ['Refund / Cancellation', '/legal-center#refunds'],
      ['Disclaimer', '/legal-center#disclaimer'],
    ],
  },
]

const socials = [
  { icon: Instagram, label: 'Instagram', href: SOCIAL.instagram },
  { icon: Facebook, label: 'Facebook', href: SOCIAL.facebook },
  { icon: Youtube, label: 'YouTube', href: SOCIAL.youtube },
].filter((s) => s.href && s.href !== '#')

export default function Footer() {
  return (
    <footer className="bg-royal pb-24 text-white lg:pb-0">
      {/* Get in touch strip */}
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold !text-white sm:text-2xl">Get In Touch</h2>
            <span className="mt-2 block h-1 w-12 rounded-full bg-brand" />
          </div>
          <ul className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${ORG.name} on ${label}`} className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition hover:border-brand hover:bg-brand">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-x grid gap-10 py-12 lg:grid-cols-[1.2fr_2.8fr] lg:gap-16">
        <div>
          <img src={ORG.logo} alt={ORG.name} className="h-28 w-auto object-contain" loading="lazy" />
          <p className="mt-5 max-w-xs text-sm font-semibold uppercase tracking-[0.12em] text-saffron">{ORG.tagline}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">{ORG.mission}</p>
          <p className="mt-4 text-lg font-semibold text-white/90">{ORG.hindiTagline}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4">
          {groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.1em] !text-saffron">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map(([label, to]) => (
                  <li key={label}><Link to={to} className="text-sm text-white/75 transition hover:text-white hover:underline hover:underline-offset-4">{label}</Link></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/30">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-5 text-sm text-white/60 sm:flex-row sm:items-center">
          <p>© 2026 {ORG.name}. All Rights Reserved.</p>
          <p>{ORG.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
