import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

// Goonj-style inner-page banner: dark band, big title, breadcrumb trail. Renders the page's <h1>.
export default function PageBanner({ title, subtitle, crumb }) {
  return (
    <section className="relative overflow-hidden bg-royal text-white">
      <span aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/30 blur-2xl" />
      <span aria-hidden="true" className="absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-saffron/15 blur-2xl" />
      <div className="container-x relative py-12 sm:py-16 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-[13px] text-white/70">
          <Link to="/" className="hover:text-saffron">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span aria-current="page" className="text-saffron">{crumb || title}</span>
        </nav>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight !text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <span className="mt-5 block h-1 w-16 rounded-full bg-brand" aria-hidden="true" />
        {subtitle && <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  )
}
