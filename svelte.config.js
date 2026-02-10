import adapter from '@sveltejs/adapter-static';
import path from 'path';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

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
		 $state: './src/lib/states',
			$models: path.resolve('./src/lib/models'),
			$services: path.resolve('./src/lib/services')
		},
		prerender: {
			handleHttpError: ({ status, path, referrer, referenceType }) => {
				if (
					path.startsWith('/backend/') ||
					path.startsWith('/images/') ||
					path.startsWith('/search/')
				) {
					//do nothing as it links to backend
				} else {
					throw new Error(
						path +
							' Missing link.' +
							`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`
					);
				}
				console.warn(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
			}
		}
	}
};

export default config;
