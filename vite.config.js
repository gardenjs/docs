import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => ({
	plugins: [
		sveltekit(),
		...(mode === 'production'
			? [
					viteCompression({
						algorithm: 'gzip',
						ext: '.gz',
						threshold: 1024,
						deleteOriginFile: false,
					}),
					viteCompression({
						algorithm: 'brotliCompress',
						ext: '.br',
						threshold: 1024,
						deleteOriginFile: false,
					}),
				]
			: []),
	],
	build: {
		minify: mode === 'production' ? 'esbuild' : false,
		cssMinify: mode === 'production',
		rollupOptions: {
			output: {
				...(mode === 'development' && {
					format: 'es',
					compact: false,
				}),
			},
		},
	},
	resolve: {
		alias: {
			'@assets': resolve(__dirname, 'src/assets'),
		},
	},
}));
