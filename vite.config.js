import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: true
      },
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'icons/android/androidlaunchericon-48-48.png',
        'icons/android/androidlaunchericon-72-72.png',
        'icons/android/androidlaunchericon-96-96.png',
        'icons/android/androidlaunchericon-144-144.png',
        'icons/android/androidlaunchericon-192-192.png',
        'icons/android/androidlaunchericon-512-512.png'
      ],
      manifest: {
        name: 'Welcomy Guide App',
        short_name: 'Welcomy',
        version: '0.8.1',
        description: 'Digital Welcome Book for Guests',
        theme_color: '#55818e',
        background_color: '#ffffff',
        orientation: "portrait",
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: 'icons/android/android-launchericon-48-48.png',
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: 'icons/android/android-launchericon-72-72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'icons/android/android-launchericon-96-96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: 'icons/android/android-launchericon-144-144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'icons/android/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any, maskable'
          },
          {
            src: 'icons/android/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any, maskable'
          }
        ]
      }
    })
  ]
})
