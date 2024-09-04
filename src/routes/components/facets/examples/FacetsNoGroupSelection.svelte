<script lang="ts">
	import { writable } from 'svelte/store';

	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import Facets from '$lib/components/Facets/Facets.svelte';
	import { facetsNoGroupSelectionData, facetsNoGroupSelectionSvelte } from '../data/codeBlocks';
	import { groups } from '../data/data';

	const groupsStore = writable(groups);
</script>

<div id="facetsNoGroupSelection">
	<CodeContainer
		title="No group selection, closed by default and all options displayed in UI"
		svelte={facetsNoGroupSelectionSvelte}
		data={facetsNoGroupSelectionData}
	>
		<Facets groups={groupsStore} showAll on:change={(e) => console.log(e)} />
	</CodeContainer>
</div>
