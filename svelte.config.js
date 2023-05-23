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
		alias: {
			$docs: path.resolve('./src/docs')
		}
	}
};

export default config;
