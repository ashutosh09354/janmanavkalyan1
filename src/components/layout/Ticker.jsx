import { Link } from 'react-router-dom'

const TICKER = [
  'Blood donation camps',
  'Food distribution',
  'Education support',
  'Community welfare',
  'Your contribution helps communities in need',
]

export default function Ticker() {
  const items = [...TICKER, ...TICKER]
  return (
    <div className="marquee-wrap bg-brand text-white">
      <div className="container-x flex h-10 items-center gap-4">
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div className="marquee-track flex w-max items-center whitespace-nowrap">
            {items.map((text, i) => (
              <span key={i} className="flex items-center text-[13px] font-medium">
                {text}
                <span aria-hidden="true" className="mx-5 text-white/60">|</span>
              </span>
            ))}
          </div>
        </div>
        <Link to="/donate" className="shrink-0 text-[13px] font-bold underline underline-offset-4 hover:text-saffron">
          Contribute Now
        </Link>
      </div>
    </div>
  )
}
