<script lang="ts">
	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import { usersMissingIDsHTML, usersMissingIDsStoreCode } from '../data/codeBlocks';
	import { usersMissingIDsStore, missingValues } from '../data/data';
	import type { UserMissingID } from '../data/data';
	import type { TableConfig } from '$lib/models/Models';

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

<div id="combination">
	<CodeContainer
		title="Missing values"
		svelte={usersMissingIDsHTML}
		data={usersMissingIDsStoreCode}
	>
		<Table config={usersMissingIDsConfig} />
	</CodeContainer>
</div>
