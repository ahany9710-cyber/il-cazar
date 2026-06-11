import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function asyncCss() {
  return {
    name: 'async-css',
    transformIndexHtml(html: string) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="(\.\/assets\/[^"]+\.css)">/,
        '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="$1"></noscript>',
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), asyncCss()],
  build: {
    target: 'es2020',
    cssMinify: true,
    modulePreload: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
