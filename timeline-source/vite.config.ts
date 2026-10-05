import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: '/Degenesis-Lorebook/timeline/',
  plugins: [vue(), {
    name: 'lorebook-shell-styles-last',
    enforce: 'post',
    transformIndexHtml: {
      enforce: 'post',
      transform(html) {
        return html.replace('</head>', '<link rel="stylesheet" href="../styles.css?v=20261005-6"></head>')
      }
    }
  }],
  build: { outDir: '../timeline', emptyOutDir: true },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
