<script lang="ts">
	import { writable } from 'svelte/store';
	import { CodeBlock, Modal, modalStore } from '@skeletonlabs/skeleton';

	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import TableFilter from '$lib/components/Table/TableFilter.svelte';
	import TableOptions from '../components/TableOptions.svelte';
	import TableCrud from '../components/TableCRUD.svelte';
	import AddUser from '../components/AddUser.svelte';
	import ShowUsers from '../components/ShowUsers.svelte';
	import EditGroup from '../components/EditGroup.svelte';
	import CustomCodeContainer from '../components/CustomCodeContainer.svelte';
	import * as data from '../data/data';
	import * as cb from '../data/codeBlocks';
	import { columnFilter } from '$lib/components/Table/filter';
	import type { TableConfig } from '$lib/models/Models';
	import UrlCell from '../components/URLCell.svelte';
	import IsAdmin from '../components/IsAdmin.svelte';

	type Group = { id: number; name: string; description: string };
	const groupsStore = writable<Group[]>(data.userGroups);
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

	const usersStore = writable<User[]>(data.users);

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
	const usersNoRolesTabs = [
		{ name: 'Svelte', language: 'html', code: cb.usersNoRolesHTML },
		{ name: 'Data', language: 'typescript', code: cb.usersStoreCode },
		{ name: 'TableOptions.svelte', language: 'html', code: cb.tableOptionsHTML }
	];

	type UserBD = { id: number; name: string; dateOfBirth: Date };
	const usersBDStore = writable<UserBD[]>(data.usersBD);
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
	const usersMissingIDsStore = writable<UserMissingID[]>(data.usersMissingIDs);
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

	type Website = { label: string; URL: URL };
	const websitesStore = writable<Website[]>(data.websites);
	const websitesConfig: TableConfig<Website> = {
		id: 'websites',
		data: websitesStore,
		columns: {
			URL: {
				header: 'URL',
				instructions: {
					renderComponent: UrlCell,
					toFilterableValueFn: (url: URL) => url.toString()
				},
				disableSorting: true
			}
		}
	};
	const websitesTabs = [
		{ name: 'Svelte', language: 'html', code: cb.websitesHTML },
		{ name: 'Data', language: 'typescript', code: cb.websitesStoreCode },
		{ name: 'URLCell.svelte', language: 'html', code: cb.websitesUrlCellHTML }
	];

	const usersAndAdminsStore = writable<data.UserOrAdmin[]>(data.usersAndAdmins);
	const usersAndAdminsConfig: TableConfig<data.UserOrAdmin> = {
		id: 'usersAndAdmins',
		data: usersAndAdminsStore,
		columns: {
			isAdmin: {
				header: 'Admin',
				instructions: {
					renderComponent: IsAdmin
				},
				disableFiltering: true
			}
		}
	};

	const usersAndAdminsTabs = [
		{ name: 'Svelte', language: 'html', code: cb.usersAndAdminsHTML },
		{ name: 'Data', language: 'typescript', code: cb.usersAndAdminsStoreCode },
		{ name: 'IsAdmin.svelte', language: 'html', code: cb.usersAndAdminsIsAdminHTML }
	];

	const tableCRUDConfig: TableConfig<Group> = {
		id: 'userGroupCRUD',
		data: groupsStore,
		optionsComponent: TableCrud
	};

	const tableCRUDActions = (action: CustomEvent<{ row: Group; type: string }>) => {
		const { type, row } = action.detail;
		switch (type) {
			case 'CREATE':
				modalStore.trigger({
					type: 'component',
					title: `Add user to Group ${row.id}`,
					component: {
						ref: AddUser,
						props: { users: $usersStore.filter((user) => user.group !== row.name), group: row.name }
					}
				});
				break;
			case 'READ':
				modalStore.trigger({
					type: 'component',
					title: `Users in Group ${row.id}`,
					component: {
						ref: ShowUsers,
						props: { users: $usersStore.filter((user) => user.group === row.name), group: row.name }
					}
				});
				break;
			case 'UPDATE':
				modalStore.trigger({
					type: 'component',
					title: `Edit Group ${row.id}`,
					component: {
						ref: EditGroup,
						props: { group: row }
					}
				});
				break;
			case 'DELETE':
				modalStore.trigger({
					type: 'confirm',
					title: 'Group deletion',
					body: `Are you sure you want to delete <strong>${row.name}</strong>?`,
					response: (r: boolean) => console.log('response:', r)
				});
				break;

			default:
				break;
		}
	};

	const tableCRUDtabs = [
		{ name: 'Svelte', language: 'html', code: cb.tableCRUDHTML },
		{ name: 'tableCRUDActions', language: 'typescript', code: cb.tableCRUDActionsCode },
		{ name: 'optionsComponent', language: 'html', code: cb.tableCRUDOptionsHTML },
		{ name: 'data', language: 'typescript', code: cb.usersStoreCode + '\n' + cb.groupStoreCode },
		{ name: 'AddUser.svelte', language: 'html', code: cb.tableCRUDAddUserHTML },
		{ name: 'ShowUsers.svelte', language: 'html', code: cb.tableCRUDShowUsersHTML },
		{ name: 'EditGroup.svelte', language: 'html', code: cb.tableCRUDEditGroupHTML }
	];
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

		<div id="actionDispatchersExamples" class="mb-20">
			<h2>Dispatching Actions</h2>
			<div class="grid gap-5" id="usersNoRoles">
				<CustomCodeContainer title="Odd or even" tabs={usersNoRolesTabs}>
					<Table config={usersNoRolesConfig} />
				</CustomCodeContainer>
			</div>

			<div class="grid gap-5" id="CRUD">
				<CustomCodeContainer title="CRUD" tabs={tableCRUDtabs}>
					<Table config={tableCRUDConfig} on:action={tableCRUDActions} />
				</CustomCodeContainer>
			</div>
		</div>
	</div>
	<div id="complexTypes">
		<h2>Complex data types</h2>
		<div class="grid gap-5" id="usersBD">
			<CodeContainer title="Date" svelte={cb.usersBDHTML} data={cb.usersBDStoreCode}>
				<Table config={usersBDConfig} />
			</CodeContainer>
		</div>

		<div id="combination">
			<CodeContainer
				title="Missing values"
				svelte={cb.usersMissingIDsHTML}
				data={cb.usersMissingIDsStoreCode}
			>
				<Table config={usersMissingIDsConfig} />
			</CodeContainer>
		</div>

		<div id="URLs">
			<CustomCodeContainer title="URLs" tabs={websitesTabs}>
				<Table config={websitesConfig} />
			</CustomCodeContainer>
		</div>

		<div id="boolean">
			<CustomCodeContainer title="Boolean" tabs={usersAndAdminsTabs}>
				<Table config={usersAndAdminsConfig} />
			</CustomCodeContainer>
		</div>
	</div>
</div>

<Modal />
