import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  output: 'static',
  site: 'https://braedenbeaulieu.ca',
  vite: {
    plugins: [tailwindcss()]
  }
})
