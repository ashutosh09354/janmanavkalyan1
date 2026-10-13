import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

/**
 * Responsive image with graceful fallback. If the NGO photo has not been
 * added yet, a branded placeholder is shown instead of a broken image.
 * fit="cover" for photographs, fit="contain" for newspaper clippings.
 */
export default function Photo({ src, alt, fit = 'cover', position = 'center', mobilePosition, className = '', eager = false, onError }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src) {
    return (
      <div role="img" aria-label={alt} className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-[#e9e8df] text-royal/50 ${className}`}>
        <ImageIcon className="h-8 w-8" aria-hidden="true" />
        <span className="px-3 text-center text-xs font-medium">Photo to be added</span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => {
        setFailed(true)
        onError?.()
      }}
      style={{ '--photo-position': position, '--photo-position-mobile': mobilePosition || position }}
      className={`h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} ${className}`}
    />
  )
}
