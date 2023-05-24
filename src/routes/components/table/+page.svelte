<script lang="ts">
	import '$lib/css/themes/theme-bexis2.css';
	import { writable } from 'svelte/store';
	import { CodeBlock, Tab, TabGroup, type PopupSettings, popup } from '@skeletonlabs/skeleton';

	import Table from '$lib/components/Table/Table.svelte';
	import TableOptions from './TableOptions.svelte';
	import TableFilter from '$lib/components/Table/TableFilter.svelte';
	import { columnFilter } from '$lib/components/Table/filter';
	import { userGroups, users } from './data';
	import * as cb from './codeBlocks';
	import type { TableConfig } from '$lib/models/Models';

	type Group = { id: number; name: string; description: string };
	const groupsStore = writable<Group[]>(userGroups);
	const groupConfig: TableConfig<Group> = {
		id: 'userGroups',
		data: groupsStore,
		columns: {
			id: {
				header: 'ID'
			}
		}
	};

	type User = { id: number; name: string; group: string; role: string };
	const usersStore = writable<User[]>(users);
	const usersConfig: TableConfig<User> = {
		id: 'users',
		data: usersStore
	};
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

	const popupHoverTableConfig: PopupSettings = {
		event: 'hover',
		target: 'popupHoverTableConfig',
		placement: 'right'
	};

	const popupHoverColumns: PopupSettings = {
		event: 'hover',
		target: 'popupHoverColumns',
		placement: 'right'
	};

	const popupHoverColumn: PopupSettings = {
		event: 'hover',
		target: 'popupHoverColumn',
		placement: 'right'
	};

	let groupCodeBlocks: number = 0;
	let usersCodeBlocks: number = 0;
	let usersNoRolesCodeBlocks: number = 0;
</script>

<div class="grid gap-5 p-10">
	<h1 class="font-bold !text-6xl">Table</h1>
	<div class="grid gap-10 px-10">
		<div class="grid gap-2">
			<p class="text-xl">Importing the Table component:</p>
			<CodeBlock language="ts" code={cb.tableImportCode} />
		</div>
		<div class="grid gap-20">
			<p class="text-xl">
				A table requires configuration object to connect data to the table and apply customizations
				correctly. Configuration object is of type <code class="!text-xl">TableConfig</code> and has
				the following structure:
			</p>
			<div class="grid gap-5">
				<div class="grid-gap-1" id="tableConfig">
					<h2 class="font-semibold relative w-max" use:popup={popupHoverTableConfig}>
						{`TableConfig <T>`}
					</h2>
					<h4 class="italic">Underlined attributes are <strong>required</strong>.</h4>
					<div class="variant-filled-secondary" data-popup="popupHoverTableConfig">
						<CodeBlock language="ts" code={cb.tableConfigTypeCode} />
					</div>
				</div>

				<div class="items-center">
					<div class="flex gap-2 underline">
						<h3 class="italic">id:</h3>
						<h3 class="font-bold">string</h3>
					</div>

					<p class="text-xl pl-10">
						Unique identifier for the table to generate unique IDs for the filters.
					</p>
				</div>

				<div class="items-center">
					<div class="flex gap-2 underline">
						<h3 class="italic">data:</h3>
						<h3 class="font-bold">{`Writable <T[]>`}</h3>
					</div>

					<p class="text-xl pl-10">
						A writable store of the type <code class="!text-xl">T[]</code>. Any changes in the store
						will be reflected in the table.
					</p>
				</div>

				<div class="items-center">
					<div class="flex gap-2">
						<h3 class="italic">optionsComponent:</h3>
						<h3 class="font-bold">{`SvelteComponent`}</h3>
					</div>

					<p class="text-xl pl-10">
						Custom Svelte component to apply actions on a specific row. Table will not have an
						options column if no <code class="!text-xl">optionsComponent</code> was provided.
					</p>
				</div>

				<div class="items-center">
					<div class="flex gap-2">
						<h3 class="italic">pageSizes:</h3>
						<h3 class="font-bold">{`number[]`}</h3>
					</div>

					<p class="text-xl pl-10">
						An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15,
						20.
					</p>
				</div>

				<div class="items-center">
					<div class="flex gap-2">
						<h3 class="italic">defaultPageSize:</h3>
						<h3 class="font-bold">{`number`}</h3>
					</div>

					<p class="text-xl pl-10">
						Default page size to be used for the table upon rendering. By default, default page size
						is 10.
					</p>
				</div>

				<div class="items-center">
					<div class="flex gap-2">
						<h3 class="italic">columns:</h3>
						<h3 class="font-bold">{`Columns`}</h3>
					</div>

					<p class="text-xl pl-10">
						An object with configuration for specific columns. <code class="!text-xl">Columns</code>
						object is described below.
					</p>
				</div>
			</div>

			<div class="grid gap-5">
				<div class="grid-gap-1" id="columns">
					<h2 class="font-semibold items-center w-max" use:popup={popupHoverColumns}>Columns</h2>
					<div data-popup="popupHoverColumns">
						<CodeBlock language="ts" code={cb.columnsTypeCode} />
					</div>
				</div>

				<div class="items-center">
					<div class="flex gap-2">
						<h3 class="italic">[key: <strong>string</strong>]:</h3>
						<h3 class="font-bold">Column</h3>
					</div>

					<p class="text-xl pl-10">
						Each key of this object is an accessor in the data object. If a certain key is not
						present, defaults will be applied for that accessor/column. If a key is present,
						defaults will be replaced with provided data.
					</p>
				</div>
			</div>

			<div class="grid gap-5">
				<div class="grid-gap-1" id="column">
					<h2 class="font-semibold items-center w-max" use:popup={popupHoverColumn}>Column</h2>
					<div data-popup="popupHoverColumn">
						<CodeBlock language="ts" code={cb.columnTypeCode} />
					</div>
				</div>

				<div class="items-center">
					<div class="flex gap-2">
						<h3 class="italic">header:</h3>
						<h3 class="font-bold">string</h3>
					</div>

					<p class="text-xl pl-10">
						Custom header to be displayed for the column. If not provided, header will be the same
						as the accessor.
					</p>
				</div>

				<div class="items-center">
					<div class="flex gap-2">
						<h3 class="italic">exclude:</h3>
						<h3 class="font-bold">boolean</h3>
					</div>

					<p class="text-xl pl-10">
						Whether to exclude the column from the table or not. By default, columns are not
						excluded. An excluded column will still be available in the data object to apply
						actions.
					</p>
				</div>

				<div class="items-center">
					<div class="flex gap-2">
						<h3 class="italic">colFitlerFn:</h3>
						<h3 class="font-bold">
							<a
								href="https://svelte-headless-table.bryanmylee.com/docs/plugins/add-column-filters#fn-filtervalue-value-boolean"
								>ColumnFilterFn</a
							>
						</h3>
					</div>

					<p class="text-xl pl-10">
						Filtering function to be applied on the column. By default, basic number/string filter
						is applied.
					</p>
				</div>

				<div class="items-center">
					<div class="flex gap-2">
						<h3 class="italic">colFilterComponent:</h3>
						<h3 class="font-bold">SvelteComponent</h3>
					</div>

					<p class="text-xl pl-10">
						Custom Svelte component to be used for filtering the column. By default, basic
						TableFilter component is rendered for the filters.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="grid gap-20 p-10 relative">
	<div class="grid grid-cols-2 gap-5 w-full items-start" id="groups">
		<div class="grid gap-5">
			<h1>Groups</h1>
			<Table config={groupConfig} />
		</div>

		<div class="grid gap-5">
			<div class="grid gap-10">
				<TabGroup>
					<Tab bind:group={groupCodeBlocks} name="group-tab1" value={0}>Usage</Tab>
					<Tab bind:group={groupCodeBlocks} name="group-tab2" value={1}>Config</Tab>
					<Tab bind:group={groupCodeBlocks} name="group-tab3" value={2}>Data</Tab>
					<Tab bind:group={groupCodeBlocks} name="group-tab4" value={3}>Type</Tab>
					<svelte:fragment slot="panel">
						{#if groupCodeBlocks === 0}
							<div class="grid gap-1 grow">
								<CodeBlock language="html" code={cb.groupHTML} />
							</div>
						{:else if groupCodeBlocks === 1}
							<div class="grid gap-1 grow">
								<CodeBlock language="ts" code={cb.groupsTableConfigCode} />
							</div>
						{:else if groupCodeBlocks === 2}
							<div class="grid gap-1 grow">
								<CodeBlock language="ts" code={cb.groupStoreCode} />
							</div>
						{:else if groupCodeBlocks === 3}
							<div class="grid gap-1 grow">
								<CodeBlock language="ts" code={cb.groupTypeCode} />
							</div>
						{/if}
					</svelte:fragment>
				</TabGroup>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-2 items-start gap-5" id="users">
		<div class="grid gap-5 grow">
			<h1>Users</h1>
			<Table config={usersConfig} />
		</div>
		<div class="grid gap-1 w-full grow">
			<p class="text-lg">With only required props:</p>
			<TabGroup>
				<Tab bind:group={usersCodeBlocks} name="users-tab1" value={0}>Usage</Tab>
				<Tab bind:group={usersCodeBlocks} name="users-tab2" value={1}>Config</Tab>
				<Tab bind:group={usersCodeBlocks} name="users-tab3" value={2}>Data</Tab>
				<Tab bind:group={usersCodeBlocks} name="users-tab4" value={3}>Type</Tab>
				<svelte:fragment slot="panel">
					{#if usersCodeBlocks === 0}
						<div class="grid gap-1 grow">
							<CodeBlock language="html" code={cb.usersHTML} />
						</div>
					{:else if usersCodeBlocks === 1}
						<div class="grid gap-1 grow">
							<CodeBlock language="ts" code={cb.usersTableConfigCode} />
						</div>
					{:else if usersCodeBlocks === 2}
						<div class="grid gap-1 grow">
							<CodeBlock language="ts" code={cb.usersStoreCode} />
						</div>
					{:else if usersCodeBlocks === 3}
						<div class="grid gap-1 grow">
							<CodeBlock language="ts" code={cb.userTypeCode} />
						</div>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>

	<div class="grid grid-cols-2 items-start gap-5 w-full" id="usersNoRoles">
		<div class="grid gap-5 grow">
			<h1>Users <span class="text-xl">Roles excluded</span></h1>
			<Table config={usersNoRolesConfig} />
		</div>
		<div class="grid gap-1 w-full">
			<p class="text-lg">With all possible props:</p>
			<TabGroup>
				<Tab bind:group={usersNoRolesCodeBlocks} name="users-noRoles-tab1" value={0}>Usage</Tab>
				<Tab bind:group={usersNoRolesCodeBlocks} name="users-noRoles-tab2" value={1}>Config</Tab>
				<Tab bind:group={usersNoRolesCodeBlocks} name="users-noRoles-tab3" value={2}>Data</Tab>
				<Tab bind:group={usersNoRolesCodeBlocks} name="users-noRoles-tab4" value={3}>Type</Tab>
				<Tab bind:group={usersNoRolesCodeBlocks} name="users-noRoles-tab5" value={4}
					>Options Component</Tab
				>
				<svelte:fragment slot="panel">
					{#if usersNoRolesCodeBlocks === 0}
						<div class="grid gap-1 grow">
							<CodeBlock language="html" code={cb.usersNoRolesHTML} />
						</div>
					{:else if usersNoRolesCodeBlocks === 1}
						<div class="grid gap-1 grow">
							<CodeBlock language="ts" code={cb.usersNoRolesTableConfigCode} />
						</div>
					{:else if usersNoRolesCodeBlocks === 2}
						<div class="grid gap-1 grow">
							<CodeBlock language="ts" code={cb.usersStoreCode} />
						</div>
					{:else if usersNoRolesCodeBlocks === 3}
						<div class="grid gap-1 grow">
							<CodeBlock language="ts" code={cb.userTypeCode} />
						</div>
					{:else if usersNoRolesCodeBlocks === 4}
						<div class="grid gap-1 grow">
							<CodeBlock language="html" code={cb.tableOptionsHTML} />
						</div>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>
