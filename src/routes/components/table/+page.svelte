<script lang="ts">
	import '$lib/css/themes/theme-bexis2.css';
	import { writable } from 'svelte/store';
	import { CodeBlock } from '@skeletonlabs/skeleton';

	import Table from '$lib/components/Table/Table.svelte';
	import TableOptions from './TableOptions.svelte';
	import TableFilter from '$lib/components/Table/TableFilter.svelte';
	import { userGroups, users } from './data';
	import { columnFilter } from '$lib/components/Table/filter';
	import {
		tableImportCode,
		groupTypeCode,
		groupStoreCode,
		usersTableConfigCode,
		usersNoIDTableConfigCode,
		groupsTableConfigCode
	} from './codeBlocks';
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
	const usersNoIDConfig: TableConfig<User> = {
		id: 'usersNoID',
		data: usersStore,
		optionsComponent: TableOptions,
		columns: {
			id: {
				// Your custom filter function
				colFilterFn: columnFilter,
				// Your custom filter component
				colFilterComponent: TableFilter
			},
			role: {
				// Exclude this column from the table
				exclude: true
			},
			group: {
				// Your custom header
				header: 'Group name'
			}
		},
		pageSizes: [1, 3, 5],
		defaultPageSize: 5
	};
</script>

<div class="grid gap-5 p-10">
	<h1 class="font-bold !text-6xl">Table</h1>
	<div class="grid gap-10 px-10">
		<div class="grid gap-2">
			<p class="text-xl">Importing the Table component:</p>
			<CodeBlock language="ts" code={tableImportCode} />
		</div>
		<div class="grid gap-20">
			<p class="text-xl">
				A table requires configuration object to connect data to the table and apply customizations
				correctly. Configuration object is of type <code class="!text-xl">TableConfig</code> and has
				the following structure:
			</p>
			<div class="grid gap-5">
				<div class="grid-gap-1">
					<h2 class="font-semibold">{`TableConfig <T>`}</h2>
					<h4 class="italic">Underlined attributes are <strong>required</strong>.</h4>
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
				<div class="grid-gap-1">
					<h2 class="font-semibold items-center">Columns</h2>
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
				<div class="grid-gap-1">
					<h2 class="font-semibold items-center">Column</h2>
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
	<div class="grid grid-cols-2 gap-5 w-full items-start">
		<div class="grid gap-5">
			<h1>Groups</h1>
			<Table config={groupConfig} />
		</div>

		<div class="grid gap-5">
			<div class="grid gap-10">
				<div class="grid gap-1 grow">
					<p class="text-lg">Your data object type:</p>
					<CodeBlock language="ts" code={groupTypeCode} />
				</div>
				<div class="grid gap-1 grow">
					<p class="text-lg">Your data and store:</p>
					<CodeBlock language="ts" code={groupStoreCode} />
				</div>
				<div class="grid gap-1 grow">
					<p class="text-lg">Creating the table:</p>
					<CodeBlock language="ts" code={groupsTableConfigCode} />
				</div>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-2 items-start gap-5">
		<div class="grid gap-5 grow">
			<h1>Users</h1>
			<Table config={usersConfig} />
		</div>
		<div class="grid gap-1 w-full grow">
			<p class="text-lg">With only required props:</p>
			<CodeBlock language="ts" code={usersTableConfigCode} />
		</div>
	</div>

	<div class="grid grid-cols-2 items-start gap-5 w-full">
		<div class="grid gap-5 grow">
			<h1>Users <span class="text-xl">Roles excluded</span></h1>
			<Table config={usersNoIDConfig} />
		</div>
		<div class="grid gap-1 w-full">
			<p class="text-lg">With all possible props:</p>
			<CodeBlock language="ts" code={usersNoIDTableConfigCode} />
		</div>
	</div>
</div>
