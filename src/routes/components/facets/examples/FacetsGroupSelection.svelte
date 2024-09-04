<script lang="ts">
	import { writable } from 'svelte/store';

	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import Facets from '$lib/components/Facets/Facets.svelte';
	import { facetsNoGroupSelectionData, facetsGroupSelectionSvelte } from '../data/codeBlocks';
	import { groups } from '../data/data';

	const groupsStore = writable(groups);
</script>

<div id="facetsGroupSelection">
	<CodeContainer
		title="Group selection and open by default"
		svelte={facetsGroupSelectionSvelte}
		data={facetsNoGroupSelectionData}
	>
		<Facets groups={groupsStore} groupSelection open on:change={(e) => console.log(e)} />
	</CodeContainer>
</div>
