<script lang="ts">
	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import Facets from '$lib/components/Facets/Facets.svelte';
	import { facetsNoGroupSelectionData, facetsNoGroupSelectionSvelte } from '../data/codeBlocks';
	import { groups } from '../data/data';

	let selected = {
		Mediums: [],
		Genres: [],
		Authors: []
	};
</script>

<div id="facetsNoGroupSelection">
	<CodeContainer title="No group selection, closed by default and all options displayed in UI" svelte={facetsNoGroupSelectionSvelte} data={facetsNoGroupSelectionData}>
		<Facets {groups} bind:selected showAll />
	</CodeContainer>
</div>
