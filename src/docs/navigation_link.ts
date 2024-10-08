// Navigation Links & Sitemap
import { base } from '$app/paths';

export const menuNavLinks: any = [
	// Docs ---
	{
		id: 'general',
		title: 'General',
		list: [{ href: base + '/', label: 'Home', keywords: '' }]
	},
	{
		id: 'code',
		title: 'Code Rules',
		list: [
			{ href: base + '/code/naming', label: 'Naming Convertions', keywords: '' },
			{ href: base + '/code/design', label: 'Color Convertions', keywords: '' }
		]
	},
	{
		id: 'theme',
		title: 'Theme',
		list: [
			{ href: base + '/components/theme', label: 'Theme/Layout', keywords: '' },
			{ href: base + '/components/page', label: 'Page', keywords: '' }
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
			{ href: base + '/components/table', label: 'Table', keywords: '' },
			{ href: base + '/components/codeEditor', label: 'Code Editor', keywords: '' },
			{ href: base + '/components/fileupload', label: 'File Upload', keywords: '' },
			{ href: base + '/components/facets', label: 'Facets', keywords: '' }
      // { href: base + '/components/toggle', label: 'Toggle', keywords: '' }
		]
	},
	{
		id: 'backend',
		title: 'Backend',
		list: [{ href: base + '/backend/hooks', label: 'Hooks', keywords: '' }]
	}

	// Tailwind ---
];
