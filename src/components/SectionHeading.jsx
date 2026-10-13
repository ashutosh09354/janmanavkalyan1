import Reveal from './Reveal'

export default function SectionHeading({ title, subtitle, align = 'left', light = false, id, as = 'h2' }) {
  const center = align === 'center'
  const Heading = as
  return (
    <Reveal className={`mb-8 sm:mb-10 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      <Heading id={id} className={`text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${light ? '!text-white' : ''}`}>{title}</Heading>
      <span aria-hidden="true" className={`mt-3 flex gap-1 ${center ? 'justify-center' : ''}`}>
        <i className="h-1 w-10 rounded-full bg-leaf" />
        <i className="h-1 w-4 rounded-full bg-saffron" />
      </span>
      {subtitle && <p className={`mt-3 text-sm sm:text-base ${light ? 'text-white/85' : 'text-ink/70'}`}>{subtitle}</p>}
    </Reveal>
  )
}
