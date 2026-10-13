import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Icon from './Icon'
import Photo from './Photo'

export default function CauseCard({ icon, title, text, image, imageAlt, to = '/causes' }) {
  return (
    <article className="group flex overflow-hidden rounded-lg border border-[#d9ded8] bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:flex-col">
      <div className={`relative grid h-28 w-28 shrink-0 place-items-center overflow-hidden sm:h-auto sm:w-full sm:aspect-[4/3] ${image ? 'bg-warm' : 'bg-gradient-to-br from-leaf-50 to-[#f6f3e9]'}`}>
        {image ? (
          <div className="h-full w-full transition duration-500 group-hover:scale-105">
            <Photo
              src={image}
              alt={imageAlt || `${title} activity by Jan Manav Kalyan Foundation`}
              fit="cover"
            />
          </div>
        ) : (
          <Icon name={icon} className="h-10 w-10 text-leaf/75" />
        )}
        {image && <span className="absolute bottom-0 left-0 hidden h-1 w-0 bg-saffron transition-all duration-300 group-hover:w-full sm:block" />}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <Icon name={icon} className="h-5 w-5 text-leaf" />
          <h3 className="text-base font-bold sm:text-lg">{title}</h3>
        </div>
        <p className="mt-1.5 text-sm text-ink/70">{text}</p>
        <Link to={to} className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-semibold text-saffron-700 hover:gap-2 transition-all" aria-label={`Learn more about ${title}`}>
          Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
