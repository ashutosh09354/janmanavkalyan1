import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ZoomIn, ZoomOut } from 'lucide-react'
import Photo from './Photo'

/** Full-screen viewer. Zoom buttons + scroll/pinch inside the container; Esc closes. */
export default function Lightbox({ item, onClose }) {
  const [zoom, setZoom] = useState(1)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!item) return
    setZoom(1)
    closeRef.current?.focus()
    const key = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(3, z + 0.5))
      if (e.key === '-') setZoom((z) => Math.max(1, z - 0.5))
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', key)
    return () => { window.removeEventListener('keydown', key); document.body.style.overflow = '' }
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog" aria-modal="true" aria-label={item.alt}
          className="fixed inset-0 z-[60] flex flex-col bg-ink/90"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-end gap-2 p-3" onClick={(e) => e.stopPropagation()}>
            <button aria-label="Zoom out" disabled={zoom <= 1} onClick={() => setZoom((z) => Math.max(1, z - 0.5))} className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white disabled:opacity-40"><ZoomOut /></button>
            <button aria-label="Zoom in" disabled={zoom >= 3} onClick={() => setZoom((z) => Math.min(3, z + 0.5))} className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white disabled:opacity-40"><ZoomIn /></button>
            <button ref={closeRef} aria-label="Close" onClick={onClose} className="grid h-11 w-11 place-items-center rounded-full bg-saffron text-ink"><X /></button>
          </div>
          <div className="flex-1 overflow-auto px-2 pb-6" onClick={(e) => e.stopPropagation()} style={{ touchAction: 'pan-x pan-y pinch-zoom' }}>
            <div className="mx-auto" style={{ width: `${zoom * 100}%`, maxWidth: zoom === 1 ? '1100px' : 'none' }}>
              <motion.div initial={{ scale: 0.96 }} animate={{ scale: 1 }} className="rounded bg-white p-1">
                {/* object-contain: the clipping is never cropped */}
                <img src={item.image} alt={item.alt} className="h-auto w-full object-contain" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
