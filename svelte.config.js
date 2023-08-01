import adapter from '@sveltejs/adapter-static';
import path from 'path';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			ssr: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/bexis2-core-ui' : ''
		},
		alias: {
			$docs: path.resolve('./src/docs'),
			$store: './src/lib/stores',
			$models: path.resolve('./src/lib/models'),
			$services: path.resolve('./src/lib/services')
		}
	}
};

export default config;
