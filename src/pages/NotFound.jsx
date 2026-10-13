import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section-y text-center">
      <div className="container-x">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-2 text-4xl font-extrabold">Page not found</h1>
        <p className="mt-3 text-ink/70">The page you are looking for doesn’t exist or has moved.</p>
        <Link to="/" className="btn btn-brand mt-8 !rounded-full !px-8">Back to Home</Link>
      </div>
    </section>
  )
}
