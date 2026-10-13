import { useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import Photo from './Photo'

export default function ActivityCard({ title, text, image, video, poster, date, to = '/work' }) {
  const [playing, setPlaying] = useState(false)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#d9ded8] bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="aspect-[4/3] overflow-hidden">
        {video && playing ? (
          <video className="h-full w-full object-cover" controls playsInline autoPlay preload="metadata" poster={poster} aria-label={title}>
            <source src={video} type="video/mp4" />
          </video>
        ) : video ? (
          <div className="relative h-full w-full">
            <Photo src={poster || image} alt={title} />
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play ${title}`}
              className="absolute inset-0 grid place-items-center bg-black/10 transition hover:bg-black/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-saffron"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-royal/95 text-white shadow-lg">
                <Play className="ml-1 h-6 w-6 fill-current" aria-hidden="true" />
              </span>
            </button>
          </div>
        ) : (
          <div className="h-full w-full transition duration-500 group-hover:scale-105"><Photo src={image} alt={title} /></div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        {date && <time className="text-xs font-medium text-leaf-700">{date}</time>}
        <h3 className="text-base font-bold">{title}</h3>
        <p className="mt-1 text-sm text-ink/70">{text}</p>
        <Link to={to} className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-semibold text-saffron-700">
          Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
