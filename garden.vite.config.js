import { defineConfig } from 'vite'
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    root: ".garden",
    plugins: [ svelte({preprocess: vitePreprocess() })],
    test: {
      globals: true
    },
    build: {
      rollupOptions: {
        input: {
          app: ".garden/index.html",
          frame: ".garden/gardenframe/index.html",
        }
      }
    }
  }
})
