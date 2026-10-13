import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import Photo from './Photo'
import Lightbox from './Lightbox'
import { WORK, WORK_CATEGORIES } from '../data/siteData'

export default function Gallery({ limit, showFilters = true, showCategories = true }) {
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState(null)
  const [failedImages, setFailedImages] = useState(() => new Set())
  const items = WORK
    .filter((w) => (cat === 'All' || w.category === cat) && !failedImages.has(w.id))
    .slice(0, limit)
  const removeFailedImage = (id) => setFailedImages((current) => new Set(current).add(id))

  return (
    <div>
      {showFilters && (
        <div role="tablist" aria-label="Filter activities" className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {WORK_CATEGORIES.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${cat === c ? 'bg-royal text-white' : 'bg-white text-ink/70 shadow-soft hover:text-royal'}`}>
              {c}
            </button>
          ))}
        </div>
      )}
      <motion.ul layout className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {items.map((w) => (
            <motion.li layout key={w.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={w.tall ? 'row-span-2' : ''}>
              {w.instagramUrl ? (
                <a href={w.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open Instagram post: ${w.title}`}
                  className="group flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 rounded-xl border border-[#d9ded8] bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-4 text-center text-white shadow-soft transition duration-300 hover:scale-[1.02]">
                  <Instagram className="h-9 w-9" aria-hidden="true" />
                  <span className="text-sm font-semibold">{w.title}</span>
                  <span className="text-xs text-white/90">Open on Instagram</span>
                </a>
              ) : (
                <button type="button" onClick={() => setOpen({ image: w.image, alt: `${w.title} - ${w.category}` })}
                  className={`group relative block w-full overflow-hidden rounded-xl border border-[#d9ded8] bg-white shadow-soft ${w.tall ? 'aspect-[3/5]' : 'aspect-[4/3]'}`}
                  aria-label={`View photo: ${w.title}`}>
                  <div className="h-full w-full transition duration-500 group-hover:scale-105"><Photo src={w.image} alt={`${w.title} - ${w.category}`} onError={() => removeFailedImage(w.id)} /></div>
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-royal/85 via-royal/10 to-transparent p-3 text-left opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                    {showCategories && <span className="mb-1 w-fit rounded-full bg-saffron px-2 py-0.5 text-[10px] font-semibold text-ink">{w.category}</span>}
                    <span className="text-sm font-semibold text-white">{w.title}</span>
                    {w.date && <span className="text-xs text-white/80">{w.date}</span>}
                  </div>
                </button>
              )}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      <Lightbox item={open} onClose={() => setOpen(null)} />
    </div>
  )
}
