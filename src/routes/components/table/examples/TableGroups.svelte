<script lang="ts">
	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import { groupHTML, groupStoreCode } from '../data/codeBlocks';
	import { groupsStore } from '../data/data';
	import type { Group } from '../data/data';
	import type { TableConfig } from '$lib/models/Models';

	const groupConfig: TableConfig<Group> = {
		id: 'userGroups',
		data: groupsStore,
		height: 300,
		toggle: true,
		columns: {
			id: {
				header: 'ID'
			}
		}
	};
</script>

<div id="groups">
	<CodeContainer title="Table component" svelte={groupHTML} data={groupStoreCode}>
		<Table config={groupConfig} />
	</CodeContainer>
</div>
