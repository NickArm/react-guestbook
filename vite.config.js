import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'icons/android/android-launcher-icon-192-192.png',
        'icons/android/android-launcher-icon-512-512.png'
      ],
      manifest: {
        name: 'Welcomy Guide App',
        short_name: 'Welcomy',
        description: 'Digital Welcome Book for Guests',
        theme_color: '#55818e',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: 'icons/android/android-launcher-icon-48-48.png',
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: 'icons/android/android-launcher-icon-72-72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'icons/android/android-launcher-icon-96-96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: 'icons/android/android-launcher-icon-144-144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'icons/android/android-launcher-icon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'icons/android/android-launcher-icon-512-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
