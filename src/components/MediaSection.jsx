import { useCallback, useState } from 'react'
import SectionHeading from './SectionHeading'
import MediaCard from './MediaCard'
import Lightbox from './Lightbox'
import { MEDIA } from '../data/siteData'

export default function MediaSection() {
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])
  return (
    <section aria-label="Media coverage" className="section-y bg-white/60">
      <div className="container-x">
        
        <div className="grid gap-5 md:grid-cols-2">
          {MEDIA.map((m) => <MediaCard key={m.id} item={m} onOpen={setOpen} />)}
        </div>
      </div>
      <Lightbox item={open} onClose={close} />
    </section>
  )
}
