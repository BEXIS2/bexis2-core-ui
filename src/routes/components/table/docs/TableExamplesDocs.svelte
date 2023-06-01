<script lang="ts">
	import { writable } from 'svelte/store';

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
</script>

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
