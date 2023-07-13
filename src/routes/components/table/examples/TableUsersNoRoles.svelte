<script lang="ts">
	import Table from '$lib/components/Table/Table.svelte';
	import TableFilter from '$lib/components/Table/TableFilter.svelte';
	import CustomCodeContainer from '../components/CustomCodeContainer.svelte';
	import TableOptions from '../components/TableOptions.svelte';
	import { columnFilter } from '$lib/components/Table/filter';
	import { usersStore } from '../data/data';
	import { usersNoRolesHTML, usersStoreCode, tableOptionsHTML } from '../data/codeBlocks';
	import type { User } from '../data/data';
	import type { TableConfig } from '$lib/models/Models';

	const usersNoRolesTabs = [
		{ name: 'Svelte', language: 'html', code: usersNoRolesHTML },
		{ name: 'Data', language: 'typescript', code: usersStoreCode },
		{ name: 'TableOptions.svelte', language: 'html', code: tableOptionsHTML }
	];

	const usersNoRolesConfig: TableConfig<User> = {
		id: 'usersNoRoles',
		data: usersStore,
		optionsComponent: TableOptions,
		columns: {
			id: {
				colFilterFn: columnFilter,
				colFilterComponent: TableFilter
			},
			role: {
				exclude: true
			},
			group: {
				header: 'Group name'
			}
		},
		pageSizes: [1, 3, 5],
		defaultPageSize: 5
	};

	const oddOrEvenFn = (obj: any) => {
		alert(obj.detail.type);
	};
</script>

<div class="grid gap-5" id="usersNoRoles">
	<CustomCodeContainer title="Odd or even" tabs={usersNoRolesTabs}>
		<Table config={usersNoRolesConfig} on:action={oddOrEvenFn} />
	</CustomCodeContainer>
</div>
