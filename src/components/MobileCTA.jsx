import { Link } from 'react-router-dom'
import { Heart, Users } from 'lucide-react'

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 bg-royal p-2.5 shadow-[0_-8px_24px_rgba(0,0,0,0.18)] lg:hidden" style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}>
      <Link to="/donate" className="btn btn-saffron"><Heart className="h-4 w-4" aria-hidden="true" /> Donate</Link>
      <Link to="/contact#volunteer-form" className="btn border border-white/60 text-white"><Users className="h-4 w-4" aria-hidden="true" /> Volunteer</Link>
    </div>
  )
}
