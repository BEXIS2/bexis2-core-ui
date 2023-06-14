<script lang="ts">
	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import { usersHTML, usersStoreCode } from '../data/codeBlocks';
	import { usersStore } from '../data/data';
	import type { User } from '../data/data';
	import type { TableConfig } from '$lib/models/Models';

	const usersConfig: TableConfig<User> = {
		id: 'users',
		data: usersStore
	};
</script>

<div class="grid gap-5" id="users">
	<CodeContainer title="Minimal configuration" svelte={usersHTML} data={usersStoreCode}>
		<Table config={usersConfig} />
	</CodeContainer>
</div>
