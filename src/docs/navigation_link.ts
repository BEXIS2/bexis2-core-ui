// Navigation Links & Sitemap
import { base } from '$app/paths';

export const menuNavLinks: any = [
	// Docs ---
	{
		id: 'general',
		title: 'General',
		list: [{ href: base + '/', label: 'Home', keywords: '' },
		{ href: base + '/test', label: 'Test', keywords: '' }]
	},
	{
		id: 'theme',
		title: 'Theme',
		list: [
			{ href: base + '/theme', label: 'Theme/Layout', keywords: '' }
			//	{ href: '/compare', label: 'Fields', keywords: '' }
		]
	},
	{
		id: 'components',
		title: 'Components',
		list: [{ href: base + '/components', label: 'Example Components', keywords: '' }]
	}

	// Tailwind ---
];
