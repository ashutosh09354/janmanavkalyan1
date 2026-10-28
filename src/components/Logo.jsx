import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ORG } from '../data/siteData'

export default function Logo({ light = false, showText = true }) {
  const [failed, setFailed] = useState(false)
  return (
    <Link to="/" aria-label={`${ORG.name} — home`} className={`flex items-center ${showText ? 'gap-2.5' : ''}`}>
      {failed ? (
        <span aria-hidden="true" className={`grid place-items-center rounded-full bg-royal font-bold text-white ring-2 ring-saffron ${showText ? 'h-11 w-11 text-sm' : 'h-14 w-14 text-base sm:h-16 sm:w-16'}`}>JM</span>
      ) : (
        <img src={ORG.logo} alt="" onError={() => setFailed(true)} className={`shrink-0 object-contain ${showText ? 'h-10 w-12 sm:h-11 sm:w-14' : 'h-14 w-auto sm:h-16'}`} />
      )}
      {showText && (
        <span className="leading-tight">
          <span className={`block text-[10px] font-extrabold tracking-tight sm:text-[12px] ${light ? 'text-white' : 'text-ink'}`}>JANMANAV KALYAN<br />FOUNDATION</span>
        </span>
      )}
    </Link>
  )
}
