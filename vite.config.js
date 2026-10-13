import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const galleryModuleId = 'virtual:instagram-gallery-images'
const resolvedGalleryModuleId = `\0${galleryModuleId}`
const imageFile = /\.(avif|gif|jpe?g|png|svg|webp)$/i

function instagramGalleryImages() {
  const folder = path.resolve(process.cwd(), 'public/images/instsgram')
  const listImages = () => {
    if (!fs.existsSync(folder)) return []
    return fs.readdirSync(folder, { withFileTypes: true })
      .filter((entry) => entry.isFile() && imageFile.test(entry.name))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((entry) => `/images/instsgram/${encodeURIComponent(entry.name)}`)
  }

  return {
    name: 'instagram-gallery-images',
    resolveId(id) {
      return id === galleryModuleId ? resolvedGalleryModuleId : null
    },
    load(id) {
      if (id !== resolvedGalleryModuleId) return null
      return `export default ${JSON.stringify(listImages())}`
    },
    configureServer(server) {
      server.watcher.add(folder)
      server.watcher.on('all', (_event, file) => {
        if (path.dirname(file) !== folder) return
        const module = server.moduleGraph.getModuleById(resolvedGalleryModuleId)
        if (module) server.moduleGraph.invalidateModule(module)
        server.ws.send({ type: 'full-reload' })
      })
    },
  }
}

export default defineConfig({ plugins: [react(), instagramGalleryImages()] })
