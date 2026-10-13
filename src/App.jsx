import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'
import ScrollManager from './components/ScrollManager'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CausesPage from './pages/CausesPage'
import WorkPage from './pages/WorkPage'
import CampaignsPage from './pages/CampaignsPage'
import StoryPage from './pages/StoryPage'
import MediaPage from './pages/MediaPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import DonatePage from './pages/DonatePage'
import LegalCenter from './pages/LegalCenter'
import NotFound from './pages/NotFound'

export default function App() {
  const { pathname, hash } = useLocation()
  return (
    <>
      <ScrollManager pathname={pathname} hash={hash} />
      <Navbar />
      <main id="main" tabIndex={-1} className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/causes" element={<CausesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/stories/:slug" element={<StoryPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/legal-center" element={<LegalCenter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
