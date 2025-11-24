export const prerender = true;
export const ssr = false;
export const trailingSlash = 'always';

import { setApiConfig } from '$lib/stores/apiStores';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	console.log('load and set apiconfig');

	if (import.meta.env.DEV) {
		console.log('dev');

		setApiConfig('http://localhost:44345', 'admin', '123456');

	} else if (import.meta.env.PROD) {
		console.log('PROD');
		setApiConfig('https://rc.bexis2.uni-jena.de/', 'admin', '123456');
	}

	return {};
}
