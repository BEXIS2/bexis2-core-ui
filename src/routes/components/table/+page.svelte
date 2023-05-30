<script lang="ts">
	import '$lib/css/themes/theme-bexis2.css';
	import { writable } from 'svelte/store';
	import { CodeBlock, type PopupSettings, popup } from '@skeletonlabs/skeleton';

	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import TableOptions from './TableOptions.svelte';
	import TableFilter from '$lib/components/Table/TableFilter.svelte';
	import { columnFilter } from '$lib/components/Table/filter';
	import { userGroups, users, usersBD, usersMissingIDs } from './data';
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

	type UserBD = { id: number; name: string; dateOfBirth: Date };
	const usersBDStore = writable<UserBD[]>(usersBD);
	const usersBDConfig: TableConfig<UserBD> = {
		id: 'usersBD',
		data: usersBDStore,
		columns: {
			dateOfBirth: {
				header: 'Date of birth',
				instructions: {
					toStringFn: (date: Date) =>
						date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
					toSortableValueFn: (date: Date) => date.getTime(),
					toFilterableValueFn: (date: Date) => date
				}
			}
		}
	};

	const missingValues: { [key: number]: string } = {
		32655: 'NA',
		32654: 'NM',
		32653: 'ND'
	};

	type UserMissingID = { id: number | undefined; name: string; group: string; role: string };
	const usersMissingIDsStore = writable<UserMissingID[]>(usersMissingIDs);
	const usersMissingIDsConfig: TableConfig<UserMissingID> = {
		id: 'usersMissingIDs',
		data: usersMissingIDsStore,
		columns: {
			id: {
				header: 'ID',
				instructions: {
					toStringFn: (key: number) => (key in missingValues ? missingValues[key] : key.toString())
				}
			}
		}
	};

	const popupClickTableConfig: PopupSettings = {
		event: 'click',
		target: 'popupClickTableConfig',
		placement: 'right'
	};

	const popupClickColumns: PopupSettings = {
		event: 'click',
		target: 'popupClickColumns',
		placement: 'right'
	};

	const popupClickColumn: PopupSettings = {
		event: 'click',
		target: 'popupClickColumn',
		placement: 'right'
	};
</script>

<div class="grid gap-20 p-10" id="toc-target">
	<div class="grid gap-5">
		<h1 class="font-bold !text-6xl">Table</h1>
		<h2>Types</h2>
		<div class="grid gap-2" id="tableConfig">
			<h3 class="font-semibold relative w-max">
				{`TableConfig <T>`}
			</h3>
			<button class="btn variant-ghost-primary w-min" use:popup={popupClickTableConfig}
				>Show type details</button
			>
			<div class="italic div">Underlined attributes are <strong>required</strong>.</div>
			<div class="variant-filled-secondary" data-popup="popupClickTableConfig">
				<CodeBlock language="ts" code={cb.tableConfigTypeCode} />
			</div>
		</div>

		<div class="items-center">
			<div class="flex gap-2 underline">
				<div class="italic">id:</div>
				<div class="font-bold">string</div>
			</div>

			<p class="text-xl pl-10">
				Unique identifier for the table to generate unique IDs for the filters.
			</p>
		</div>

		<div class="items-center">
			<div class="flex gap-2 underline">
				<div class="italic">data:</div>
				<div class="font-bold">{`Writable <T[]>`}</div>
			</div>

			<p class="text-xl pl-10">
				A writable store of the type <code class="!text-xl">T[]</code>. Any changes in the store
				will be reflected in the table.
			</p>
		</div>

		<div class="items-center">
			<div class="flex gap-2">
				<div class="italic">optionsComponent:</div>
				<div class="font-bold">{`SvelteComponent`}</div>
			</div>

			<p class="text-xl pl-10">
				Custom Svelte component to apply actions on a specific row. Table will not have an options
				column if no <code class="!text-xl">optionsComponent</code> was provided.
			</p>
		</div>

		<div class="items-center">
			<div class="flex gap-2">
				<div class="italic">pageSizes:</div>
				<div class="font-bold">{`number[]`}</div>
			</div>

			<p class="text-xl pl-10">
				An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20.
			</p>
		</div>

		<div class="items-center">
			<div class="flex gap-2">
				<div class="italic">defaultPageSize:</div>
				<div class="font-bold">{`number`}</div>
			</div>

			<p class="text-xl pl-10">
				Default page size to be used for the table upon rendering. By default, default page size is
				10.
			</p>
		</div>

		<div class="items-center">
			<div class="flex gap-2">
				<div class="italic">columns:</div>
				<div class="font-bold">{`Columns`}</div>
			</div>

			<p class="text-xl pl-10">
				An object with configuration for specific columns. <code class="!text-xl">Columns</code>
				object is described below.
			</p>
		</div>
	</div>

	<div class="grid gap-5">
		<div class="grid gap-2" id="columns">
			<h3 class="font-semibold items-center w-max">Columns</h3>
			<button class="btn variant-ghost-primary w-min" use:popup={popupClickColumns}>
				Show type details</button
			>
			<div data-popup="popupClickColumns">
				<CodeBlock language="ts" code={cb.columnsTypeCode} />
			</div>
		</div>

		<div class="items-center">
			<div class="flex gap-2">
				<div class="italic">[key: <strong>string</strong>]:</div>
				<div class="font-bold">Column</div>
			</div>

			<p class="text-xl pl-10">
				Each key of this object is an accessor in the data object. If a certain key is not present,
				defaults will be applied for that accessor/column. If a key is present, defaults will be
				replaced with provided data.
			</p>
		</div>
	</div>

	<div class="grid gap-5">
		<div class="grid gap-2" id="column">
			<h3 class="font-semibold items-center w-max">Column</h3>
			<button class="btn variant-ghost-primary w-min" use:popup={popupClickColumn}>
				Show type details</button
			>
			<div data-popup="popupClickColumn">
				<CodeBlock language="ts" code={cb.columnTypeCode} />
			</div>
		</div>

		<div class="items-center">
			<div class="flex gap-2">
				<div class="italic">header:</div>
				<div class="font-bold">string</div>
			</div>

			<p class="text-xl pl-10">
				Custom header to be displayed for the column. If not provided, header will be the same as
				the accessor.
			</p>
		</div>

		<div class="items-center">
			<div class="flex gap-2">
				<div class="italic">exclude:</div>
				<div class="font-bold">boolean</div>
			</div>

			<p class="text-xl pl-10">
				Whether to exclude the column from the table or not. By default, columns are not excluded.
				An excluded column will still be available in the data object to apply actions.
			</p>
		</div>

		<div class="items-center">
			<div class="flex gap-2">
				<div class="italic">colFitlerFn:</div>
				<div class="font-bold">
					<a
						href="https://svelte-headless-table.bryanmylee.com/docs/plugins/add-column-filters#fn-filtervalue-value-boolean"
						>ColumnFilterFn</a
					>
				</div>
			</div>

			<p class="text-xl pl-10">
				Filtering function to be applied on the column. By default, basic number/string filter is
				applied.
			</p>
		</div>

		<div class="items-center">
			<div class="flex gap-2">
				<div class="italic">colFilterComponent:</div>
				<div class="font-bold">SvelteComponent</div>
			</div>

			<p class="text-xl pl-10">
				Custom Svelte component to be used for filtering the column. By default, basic TableFilter
				component is rendered for the filters.
			</p>
		</div>
	</div>

	<div class="grid gap-1">
		<h2>Examples</h2>
		<div class="grid gap-20">
			<div class="grid gap-5" id="simpleTable">
				<CodeContainer
					title="Simple table without Table component"
					svelte={cb.simpleTableHTML}
					data={cb.usersStoreCode}
				>
					<div class="pb-2">
						Used classes are important to include for the table to have a uniform look.
					</div>

					<div class="table-container">
						<table class="table table-compact bg-tertiary-200">
							<thead>
								<tr class="bg-primary-300">
									<th class="!p-2">Group</th>
									<th class="!p-2">Description</th>
								</tr>
							</thead>
							<tbody>
								{#each $usersStore as user}
									<tr>
										<td>{user.name}</td>
										<td>
											<div>{user.group}</div>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</CodeContainer>
			</div>

			<div class="grid gap-5" id="groups">
				<CodeContainer title="Table component" svelte={cb.groupHTML} data={cb.groupStoreCode}>
					<Table config={groupConfig} />
				</CodeContainer>
			</div>

			<div class="grid gap-5" id="users">
				<CodeContainer title="Minimal configuration" svelte={cb.usersHTML} data={cb.usersStoreCode}>
					<Table config={usersConfig} />
				</CodeContainer>
			</div>

			<div class="grid gap-5" id="usersNoRoles">
				<CodeContainer
					title="Full configuration"
					svelte={cb.usersNoRolesHTML}
					data={cb.usersStoreCode}
				>
					<Table config={usersNoRolesConfig} on:action={(obj) => alert(obj.detail.type)} />
				</CodeContainer>
			</div>
		</div>
		<div class="grid gap-1">
			<h2>Complex data types</h2>
			<div class="grid gap-20">
				<div class="grid gap-5" id="usersBD">
					<CodeContainer title="Date" svelte={cb.usersBDHTML} data={cb.usersBDStoreCode}>
						<Table config={usersBDConfig} />
					</CodeContainer>
				</div>
			</div>

			<div class="grid gap-20">
				<div class="grid gap-5" id="combination">
					<CodeContainer
						title="Missing values"
						svelte={cb.usersMissingIDsHTML}
						data={cb.usersMissingIDsStoreCode}
					>
						<Table config={usersMissingIDsConfig} />
					</CodeContainer>
				</div>
			</div>
		</div>
	</div>
</div>
