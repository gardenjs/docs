
import { defineConfig } from "vite"
import { join, resolve } from "node:path";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte"

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [svelte({preprocess: vitePreprocess()})],
    root: ".garden",
    assetsInclude: ['**/*.md'],
    publicDir: "../public",
    
    resolve: {
      alias: [
        {
          find: /\$app\/(.*)/,
          replacement: join(resolve(__dirname, "node_modules/@gardenjs/render-plugin-svelte/src/sveltekit_mocks/"), "$1"),
        },
        {
          find: '@assets',
          replacement: resolve(__dirname, 'src/assets'),
        },
      ],
    },

    base: "/",
    
    
    build: {
      rollupOptions: {
        input: {
          app: ".garden/index.html",
          frame: ".garden/frame.html",
        },
      },
    },
  };
});
  