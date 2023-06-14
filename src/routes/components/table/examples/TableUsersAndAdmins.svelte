<script lang="ts">
	import Table from '$lib/components/Table/Table.svelte';
	import CustomCodeContainer from '../components/CustomCodeContainer.svelte';
	import IsAdmin from '../components/IsAdmin.svelte';
	import {
		usersAndAdminsHTML,
		usersAndAdminsStoreCode,
		usersAndAdminsIsAdminHTML
	} from '../data/codeBlocks';
	import { usersAndAdminsStore } from '../data/data';
	import type { UserOrAdmin } from '../data/data';
	import type { TableConfig } from '$lib/models/Models';

	const usersAndAdminsConfig: TableConfig<UserOrAdmin> = {
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
		{ name: 'Svelte', language: 'html', code: usersAndAdminsHTML },
		{ name: 'Data', language: 'typescript', code: usersAndAdminsStoreCode },
		{ name: 'IsAdmin.svelte', language: 'html', code: usersAndAdminsIsAdminHTML }
	];
</script>

<div id="boolean">
	<CustomCodeContainer title="Boolean" tabs={usersAndAdminsTabs}>
		<Table config={usersAndAdminsConfig} />
	</CustomCodeContainer>
</div>
