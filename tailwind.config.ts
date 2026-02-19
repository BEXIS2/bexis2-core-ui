import type { Config } from 'tailwindcss';
//import { skeleton } from '@skeletonlabs/tw-plugin';
import { bexis2theme } from './src/lib/themes/theme-bexis2';
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
    
  plugins: [
    forms,
    typography,
  ],
};

export default config;
