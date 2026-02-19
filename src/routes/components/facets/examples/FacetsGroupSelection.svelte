<script lang="ts">
	import { writable } from 'svelte/store';

	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import Facets from '$lib/components/Facets/Facets.svelte';
	import { facetsNoGroupSelectionData, facetsGroupSelectionSvelte } from '../data/codeBlocks';
	import { groups } from '../data/data';
	 let selected = {
    mediums: [],
    genres: [],
    authors: []
  };

  let selectedGroups = {
    mediums: true,
    genres: false,
    authors: false
  };
	const groupsStore = writable(groups);
</script>

<div id="facetsGroupSelection">
	<CodeContainer
		title="Group selection and open by default"
		svelte={facetsGroupSelectionSvelte}
		data={facetsNoGroupSelectionData}
	>
		<Facets
			groups={groupsStore}
			groupSelection={true}
			bind:selected={selected}
			bind:selectedGroups={selectedGroups}
			open
			on:facetSelect={(e) => console.log(e)}
			on:showMoreSelect={(e) => console.log(e)}
			on:showMoreOpenChange={(e) => console.log(e)}
		/>
	</CodeContainer>
</div>
