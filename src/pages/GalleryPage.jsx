import PageBanner from '../components/PageBanner'
import Gallery from '../components/Gallery'

export default function GalleryPage() {
  return (
    <>
      <PageBanner title="Photo Gallery" subtitle="Photographs from Janmanav Kalyan Foundation activities." />
      <section className="section-y overflow-x-clip">
        <div className="container-x"><Gallery showFilters={false} /></div>
      </section>
    </>
  )
}
