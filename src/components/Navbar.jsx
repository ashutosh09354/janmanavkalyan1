import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, Heart } from 'lucide-react'
import Logo from './Logo'
import Ticker from './layout/Ticker'

// Dropdown structure mirrors goonj.org: top-level items with hover sub-menus.
const NAV = [
  {
    label: 'Our Causes',
    to: '/causes',
  },
  {
    label: 'Our Work',
    to: '/work',
    children: [
      { label: 'Activities', to: '/work' },
      { label: 'Photo Gallery', to: '/gallery' },
      { label: 'Stories', to: '/#updates' },
    ],
  },
  { label: 'Impact', to: '/#impact' },
  {
    label: 'Get Involved',
    to: '/#get-involved',
    children: [
      { label: 'Donate', to: '/donate' },
      { label: 'Volunteer', to: '/contact#volunteer-form' },
    ],
  },
  {
    label: 'Updates',
    to: '/#updates',
    children: [
      { label: 'In the Media', to: '/media' },
      { label: 'Campaigns', to: '/campaigns' },
    ],
  },
  {
    label: 'About Us',
    to: '/about',
    children: [
      { label: 'Knowing the Foundation', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Legal Center', to: '/legal-center' },
    ],
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { setOpen(false); setExpanded(null) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKeyDown = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Skip to content</a>
      <header className={`sticky top-0 z-40 w-full bg-white transition ${scrolled || open ? 'shadow-soft' : 'border-b border-ink/10'}`}>
        <div className="container-x flex h-[70px] items-center justify-between gap-3 xl:h-[78px]">
          <Logo showText />

          <nav aria-label="Main" className="hidden items-center xl:flex">
            {NAV.map((item) => (
              <div key={item.label} className="group relative">
                <Link to={item.to} className={`flex items-center gap-1 px-3 py-6 text-[13.5px] font-semibold transition hover:text-brand xl:px-4 ${pathname === item.to ? 'text-brand' : 'text-ink'}`}>
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" aria-hidden="true" />}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 min-w-[220px] translate-y-1 border-t-[3px] border-brand bg-white py-2 opacity-0 shadow-lift transition duration-150 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((c) => (
                      <Link key={c.label} to={c.to} className="block px-5 py-2.5 text-[13.5px] font-medium text-ink/80 transition hover:bg-brand-light hover:text-brand">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/donate" className="btn hidden !min-h-11 !rounded-full !bg-[#ff8000] !px-7 !py-2.5 !text-[14px] !text-white hover:!bg-[#d96800] xl:inline-flex">
              <Heart className="h-4 w-4" aria-hidden="true" /> Contribute
            </Link>
            <button
              className="grid h-11 w-11 place-items-center text-royal xl:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open && (
            <nav
              id="mobile-menu"
              aria-label="Mobile"
              className="max-h-[calc(100dvh-110px)] overflow-y-auto border-t border-ink/10 bg-white xl:hidden"
            >
              <ul className="container-x py-2">
                {NAV.map((item) => (
                  <li key={item.label} className="border-b border-ink/10">
                    {item.children ? (
                      <>
                        <button
                          className="flex min-h-[52px] w-full items-center justify-between text-left text-[15px] font-semibold text-ink"
                          aria-expanded={expanded === item.label}
                          onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                        >
                          {item.label}
                          <ChevronDown className={`h-4 w-4 transition ${expanded === item.label ? 'rotate-180 text-brand' : ''}`} aria-hidden="true" />
                        </button>
                        {expanded === item.label && (
                          <ul className="mb-2 border-l-2 border-brand pl-4">
                            {item.children.map((c) => (
                              <li key={c.label}><Link to={c.to} className="flex min-h-[44px] items-center text-sm text-ink/75">{c.label}</Link></li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link to={item.to} className="flex min-h-[52px] items-center text-[15px] font-semibold text-ink">{item.label}</Link>
                    )}
                  </li>
                ))}
                <li className="py-4">
                  <Link to="/donate" className="btn w-full !rounded-full !bg-[#ff8000] !text-white hover:!bg-[#d96800]"><Heart className="h-4 w-4" aria-hidden="true" /> Contribute</Link>
                </li>
              </ul>
            </nav>
          )}
      </header>
      <Ticker />
    </>
  )
}
