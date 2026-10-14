import { Link } from 'react-router-dom'

const TICKER = [
  { label: 'Clean Communities for a Healthier Tomorrow' },
  { label: 'Contribute Now', to: '/donate' },
  { label: 'Food Distribution for Needy Families' },
  { label: 'Contribute Now', to: '/donate' },
  { label: 'Education Support for Brighter Futures' },
  { label: 'Contribute Now', to: '/donate' },
]

export default function Ticker() {
  // Repeating the complete message set keeps the marquee full on wide screens.
  const items = [...TICKER, ...TICKER, ...TICKER, ...TICKER]

  return (
    <div className="marquee-wrap h-10 overflow-hidden bg-[#24963d] text-white">
      <div className="container-x flex h-full items-center overflow-hidden">
        <div className="marquee-track flex w-max items-center whitespace-nowrap">
          {items.map((item, index) => (
            <span key={`${item.label}-${index}`} className="flex shrink-0 items-center text-[12px] font-medium sm:text-[15px]">
              {item.to ? <Link to={item.to} className="font-bold underline decoration-[#f3c35e] underline-offset-4 hover:text-[#f3c35e]">{item.label}</Link> : item.label}
              <span aria-hidden="true" className="mx-5 text-[#f3c35e] sm:mx-6">{'\u2022'}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
