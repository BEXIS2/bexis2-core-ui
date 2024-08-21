<script lang="ts">
	import { writable } from 'svelte/store';

	import Table from '$lib/components/Table/Table.svelte';
	import Options from '../components/GroupsOptions.svelte';
	import type { TableConfig } from '$lib/models/Models';
	import { onMount } from 'svelte';

	type Group = {
		id: number;
		name: string;
		description: string;
		creationDate: string;
		modificationDate: string;
	};

	let config: TableConfig<Group>;
	let data: Group[];

	const tableData = writable<Group[]>();

	const dateInstructions = {
		toStringFn: (value: string) => {
			return value ? new Date(value).toLocaleString() : '';
		},
		toFilterableValueFn: (value: string) => {
			return new Date(value);
		},
		toSortableValueFn: (value: string) => {
			return value ? +new Date(value) : 0;
		}
	};

	const getGroups = async () => {
		const response = await fetch('https://dev.bexis2.uni-jena.de/api/groups/');
		return response.json();
	};

	onMount(async () => {
		data = await getGroups();
		console.log(data);

		tableData.set(data);
		config = {
			id: 'groupsServer',
			data: tableData,
			columns: {
				creationDate: { instructions: dateInstructions },
				modificationDate: { instructions: dateInstructions }
			},
			optionsComponent: Options as any,
		};
	});

	const handleAction = (data: any) => {
		if (data.detail.type === 'delete') {
			fetch('/delete', {
				method: 'DELETE',
				body: JSON.stringify(data.detail.id)
			})
		}
	};
</script>

<div class="flex w-max p-10 bg-surface-100 mt-10">
	{#if config}
		<Table {config} on:action={handleAction} />
	{/if}
</div>
