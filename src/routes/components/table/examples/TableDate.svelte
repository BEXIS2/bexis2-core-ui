<script lang="ts">
	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import { usersBDHTML, usersBDStoreCode } from '../data/codeBlocks';
	import { usersBDStore } from '../data/data';
	import type { UserBD } from '../data/data';
	import type { TableConfig } from '$lib/models/Models';

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
</script>

<div id="usersBD">
	<CodeContainer title="Date" svelte={usersBDHTML} data={usersBDStoreCode}>
		<Table config={usersBDConfig} />
	</CodeContainer>
</div>
