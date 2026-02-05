/** @type {import('tailwindcss').Config} */

// @ts-check
const path = require('path');

// 1. Import the Skeleton plugin
const { skeleton } = require('@skeletonlabs/tw-plugin');

// add theme
const { bexis2theme } = require('./src/lib/themes/theme-bexis2');

module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		skeleton({
			themes: {
				custom: [bexis2theme]
			}
		})
	]
};
