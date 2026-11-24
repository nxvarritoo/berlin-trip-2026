import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({ base: './', plugins: [react(), VitePWA({
  registerType: 'autoUpdate', includeAssets: ['icons/icon.svg'],
  manifest: { name:'BERLIN TRIP 2026', short_name:'Berlin 2026', description:'Guía interactiva del viaje a Berlín', theme_color:'#071426', background_color:'#071426', display:'standalone', start_url:'./', scope:'./', icons:[{ src:'icons/icon.svg', sizes:'any', type:'image/svg+xml', purpose:'any maskable' }] },
  workbox: { navigateFallback:'index.html', globPatterns:['**/*.{js,css,html,svg,png,woff2}'], runtimeCaching:[{ urlPattern:/^https:\/\/.*\.tile\.openstreetmap\.org\//, handler:'CacheFirst', options:{ cacheName:'osm-tiles', expiration:{ maxEntries:150, maxAgeSeconds:2592000 } } }] }
})] })
