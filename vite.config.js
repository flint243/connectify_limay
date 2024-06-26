import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: 'src/pages'
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@layouts',
        replacement: path.resolve(__dirname, 'src/components/layouts/')
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages/')
      },
      {
        find: '@partials',
        replacement: path.resolve(__dirname, 'src/components/partials/')
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets/')
      },
    ]
  }
})
