export const facetsNoGroupSelectionSvelte = `
<script lang="ts">
	import { Facets } from '@bexis2/bexis2-core-ui';

	import { groups } from './data';

	let selected = {
		Mediums: [],
		Genres: [],
		Authors: []
	};
</script>

<Facets {groups} bind:selected showAll />
`;

export const facetsGroupSelectionSvelte = `
<script lang="ts">
	import { Facets } from '@bexis2/bexis2-core-ui';

	import { groups } from './data';

	let selected = {
		Mediums: [],
		Genres: [],
		Authors: []
	};

	let selectedGroups = {
		Mediums: true,
		Genres: false,
		Authors: false
	};
</script>

<Facets {groups} bind:selected bind:selectedGroups groupSelection open />
`;

export const facetsNoGroupSelectionData = `
export const groups = {
	Mediums: [
		{ value: 'books', count: 1 },
		{ value: 'movies', count: 2 },
		{ value: 'music', count: 3 },
		{ value: 'podcasts', count: 4 },
		{ value: 'articles', count: 5 },
		{ value: 'blogs', count: 6 }
	],
	Genres: [
		{ value: 'fiction', count: 0 },
		{ value: 'non-fiction', count: 1 },
		{ value: 'comedy', count: 2 },
		{ value: 'drama', count: 3 },
		{ value: 'action', count: 4 },
		{ value: 'romance', count: 5 },
		...
	],
	Authors: [
		{ value: 'Stephen King', count: 10 },
		{ value: 'J.K. Rowling', count: 3 },
		{ value: 'Agatha Christie', count: 4 },
		{ value: 'Dan Brown', count: 7 }
	]
};
`;

export const facetGroupType = `
export type FacetGroup = {
	[key: string]: FacetOption[];
};
`;

export const facetOptionType = `
export type FacetOption = {
	value: string;
	count?: number;
};
`;
