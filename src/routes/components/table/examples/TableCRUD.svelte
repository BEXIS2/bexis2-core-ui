<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';

	import TableCrud from '../components/TableCRUDOptions.svelte';
	import AddUser from '../components/AddUser.svelte';
	import ShowUsers from '../components/ShowUsers.svelte';
	import EditGroup from '../components/EditGroup.svelte';
	import * as cb from '../data/codeBlocks';
	import { usersStore, groupsStore } from '../data/data';
	import type { TableConfig } from '$lib/models/Models';
	import type { Group } from '../data/data';
	import CustomCodeContainer from '../components/CustomCodeContainer.svelte';
	import Table from '$lib/components/Table/Table.svelte';

	export const tableCRUDConfig: TableConfig<Group> = {
		id: 'userGroupCRUD',
		toggle: true,
		data: groupsStore,
		optionsComponent: TableCrud
	};

	export const tableCRUDActions = (action: CustomEvent<{ row: Group; type: string }>) => {
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

	export const tableCRUDtabs = [
		{ name: 'Svelte', language: 'html', code: cb.tableCRUDHTML },
		{ name: 'tableCRUDActions', language: 'typescript', code: cb.tableCRUDActionsCode },
		{ name: 'optionsComponent', language: 'html', code: cb.tableCRUDOptionsHTML },
		{ name: 'data', language: 'typescript', code: cb.usersStoreCode + '\n' + cb.groupStoreCode },
		{ name: 'AddUser.svelte', language: 'html', code: cb.tableCRUDAddUserHTML },
		{ name: 'ShowUsers.svelte', language: 'html', code: cb.tableCRUDShowUsersHTML },
		{ name: 'EditGroup.svelte', language: 'html', code: cb.tableCRUDEditGroupHTML }
	];
</script>

<div class="grid gap-5" id="CRUD">
	<CustomCodeContainer title="CRUD" tabs={tableCRUDtabs}>
		<Table config={tableCRUDConfig} on:action={tableCRUDActions} />
	</CustomCodeContainer>
</div>
