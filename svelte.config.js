import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".svx", ".md"],
	preprocess: [vitePreprocess(), mdsvex({extensions: ["*.svx", ".md"]})],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		appDir: 'app',
		adapter: adapter(),
		paths: {
			base: dev ? '' : process.env.BASE_PATH,
		},
	},
};

export default config;