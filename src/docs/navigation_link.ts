// Navigation Links & Sitemap
import { base } from '$app/paths';

export const menuNavLinks: any = [
	// Docs ---
	{
		id: 'general',
		title: 'General',
		list: [
			{ href: base + '/', label: 'Home', keywords: '' }
		]
	},
	{
		id: 'theme',
		title: 'Theme',
		list: [
			{ href: base + '/components/theme', label: 'Theme/Layout', keywords: '' }
			//	{ href: '/compare', label: 'Fields', keywords: '' }
		]
	},
	{
		id: 'components',
		title: 'Components',
		list: [
			{ href: base + '/components/core', label: 'Core', keywords: '' },
			{ href: base + '/components/icon', label: 'Icons', keywords: '' },
			{ href: base + '/components/form', label: 'Form', keywords: '' },
			{ href: base + '/components/table', label: 'Table', keywords: '' }
		]
	},
	{
		id: 'backend',
		title: 'Backend',
		list: [
			{ href: base + '/backend/hooks', label: 'Hooks', keywords: '' }
		]
	}

	// Tailwind ---
];
