<script lang="ts">
	import { writable } from 'svelte/store';

	import Table from '$lib/components/Table/Table.svelte';
	import Options from '../components/UsersOptions.svelte';
	import type { TableConfig } from '$lib/models/Models';
	import { onMount } from 'svelte';

	type User = {
		id: number;
		userName: string;
		email: string;
		creationDate: string;
		modificationDate: string;
	};

	let config: TableConfig<User>;
	let data: User[];

	const tableData = writable<User[]>();

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

	const getUsers = async () => {
		const response = await fetch('https://dev.bexis2.uni-jena.de/api/users/');
		return response.json();
	};

	onMount(async () => {
		data = await getUsers();
		console.log(data);

		tableData.set(data);
		config = {
			id: 'usersServer',
			data: tableData,
			columns: {
				creationDate: { instructions: dateInstructions },
				modificationDate: { instructions: dateInstructions }
			},
			optionsComponent: Options as any
		};
	});
</script>

<div class="flex w-max p-10 bg-surface-100 mt-10">
	{#if config}
		<Table {config} on:action={(data) => console.log(data)} />
	{/if}
</div>
