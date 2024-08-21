<script lang="ts">
	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import Facets from '$lib/components/Facets/Facets.svelte';
	import { facetsNoGroupSelectionData, facetsGroupSelectionSvelte } from '../data/codeBlocks';
	import { groups } from '../data/data';

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

<div id="facetsGroupSelection">
	<CodeContainer
		title="Group selection and open by default"
		svelte={facetsGroupSelectionSvelte}
		data={facetsNoGroupSelectionData}
	>
		<Facets {groups} bind:selected bind:selectedGroups groupSelection open />
	</CodeContainer>
</div>
