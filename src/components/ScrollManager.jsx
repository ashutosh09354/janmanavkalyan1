import { useEffect } from 'react'

const PAGE_TITLES = {
  '/': 'Building a Better Tomorrow',
  '/about': 'About Us',
  '/vision': 'Our Vision',
  '/mission': 'Our Mission',
  '/campaigns': 'Campaigns',
  '/causes': 'Our Causes',
  '/work': 'Our Work',
  '/stories': 'Community Story',
  '/media': 'Media',
  '/gallery': 'Community Gallery',
  '/contact': 'Contact',
  '/donate': 'Donate',
  '/legal-center': 'Legal Center',
}

const PAGE_DESCRIPTIONS = {
  '/': 'Janmanav Kalyan Foundation supports communities through education, healthcare, food distribution, blood donation and humanitarian initiatives.',
  '/about': 'Learn about the community-led work and mission of Janmanav Kalyan Foundation.',
  '/vision': 'Read the vision and values of Janmanav Kalyan Foundation.',
  '/mission': 'Learn about the mission and focus areas of Janmanav Kalyan Foundation.',
  '/campaigns': 'Find campaign updates from Janmanav Kalyan Foundation. Campaign details are published when confirmed.',
  '/causes': 'Explore the community causes supported by Janmanav Kalyan Foundation.',
  '/work': 'Explore documented community activities by Janmanav Kalyan Foundation.',
  '/stories': 'Stories from Janmanav Kalyan Foundation community activities.',
  '/media': 'Read media coverage and updates about Janmanav Kalyan Foundation activities.',
  '/gallery': 'View photographs from Janmanav Kalyan Foundation community activities.',
  '/legal-center': 'Read the legal information and policy publication status for Janmanav Kalyan Foundation.',
  '/donate': 'Learn how to support the community initiatives of Janmanav Kalyan Foundation.',
  '/contact': 'Contact Janmanav Kalyan Foundation to ask a question or learn how to get involved.',
}

export default function ScrollManager({ pathname, hash }) {
  useEffect(() => {
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 80)
    else window.scrollTo(0, 0)
    const pageKey = pathname.startsWith('/stories/') ? '/stories' : pathname
    const title = `${PAGE_TITLES[pageKey] || 'Janmanav Kalyan Foundation'} | Janmanav Kalyan Foundation`
    const description = PAGE_DESCRIPTIONS[pageKey] || PAGE_DESCRIPTIONS['/']
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
  }, [pathname, hash])
  return null
}
