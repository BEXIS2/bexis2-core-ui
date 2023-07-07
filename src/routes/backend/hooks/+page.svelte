<script lang="ts">
	import Page from '$lib/components/page/Page.svelte';
	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import hookCs from './hook.cs?raw';
	import hookXml from './hook.xml?raw';

	import { writable } from 'svelte/store';
	import Table from '$lib/components/Table/Table.svelte';
	import type { TableConfig } from '$lib/models/Models';
	import { Hookplaces } from './hooksplaces';

	type hookPlaces = {
		place: string;
		entity: string;
		mode: string;
		description: string;
	};

	const hookplacesStore = writable<hookPlaces[]>(Hookplaces);
	const hookplacesTableConfig: TableConfig<hookPlaces> = {
		id: 'hookplaces',
		data: hookplacesStore
	};

	let n: number = 2;
</script>

<Page>
	<h2>All about hooks in BEXIS2</h2>
	<p>this page describes how to use hooks in bexis 2.</p>

	<h3>Hook Places</h3>

	<Table config={hookplacesTableConfig} />

	<CodeContainer title="How To" csharp={hookCs} xml={hookXml} codeOnly={true} activetab={n}>
		<span slot="info"> How hooks look like. </span>
	</CodeContainer>
</Page>
