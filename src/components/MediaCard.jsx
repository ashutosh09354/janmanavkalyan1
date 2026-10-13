import { Maximize2, Newspaper } from 'lucide-react'
import Photo from './Photo'

export default function MediaCard({ item, onOpen }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-[#d9ded8] bg-white shadow-soft">
      <div className="flex items-center gap-2 px-4 pt-4">
        <Newspaper className="h-4 w-4 text-leaf" aria-hidden="true" />
        <span className="rounded-full bg-royal-50 px-3 py-1 text-[11px] font-semibold tracking-wide text-royal">MEDIA COVERAGE</span>
      </div>
      <button
        type="button"
        onClick={() => onOpen(item)}
        aria-label="Open newspaper coverage in full size"
        className="group relative m-4 aspect-[4/3] overflow-hidden rounded-xl bg-warm ring-1 ring-royal/10"
      >
        {/* object-contain keeps the article readable */}
        <Photo src={item.image} alt={item.alt} fit="contain" />
        <span className="absolute bottom-2 right-2 grid h-10 w-10 place-items-center rounded-full bg-royal text-white shadow-lift transition group-hover:scale-110"><Maximize2 className="h-4 w-4" aria-hidden="true" /></span>
      </button>
      <div className="px-4 pb-4">
        {item.headline && <p className="mb-3 text-sm font-semibold text-ink">{item.headline}</p>}
        <button type="button" onClick={() => onOpen(item)} className="btn btn-royal !py-2.5">Read Coverage</button>
      </div>
    </article>
  )
}
