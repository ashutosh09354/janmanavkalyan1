// Big Goonj-style section title with the short orange underline bar.
export default function SectionTitle({ children, id, light = false, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <h2 id={id} className={`section-title ${light ? '!text-white' : ''}`}>{children}</h2>
      <span className={`title-bar ${center ? 'mx-auto' : ''}`} aria-hidden="true" />
    </div>
  )
}
