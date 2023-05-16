<script lang="ts">
	import '$lib/css/themes/theme-bexis2.css';
	import { CodeBlock } from '@skeletonlabs/skeleton';

	import Table from '$lib/components/Table/Table.svelte';
	import TableFilter from '$lib/components/Table/TableFilter.svelte';
	import TableOptions from './TableOptions.svelte';
	import { userGroups, users } from './data';
	import { columnFilter } from '$lib/components/Table/filter';
</script>

<div class="grid gap-5 p-10 relative">
	<div class="grid grid-cols-2 gap-5 w-full items-start">
		<div class="grid gap-5 grow">
			<h1>Groups</h1>
			<Table data={userGroups} optionsComponent={TableOptions} />
		</div>

		<div class="grid gap-5">
			<div class="grid gap-1">
				<p class="text-lg">With a custom options component:</p>
				<CodeBlock
					language="html"
					code={`<\script lang="ts">\
					\n\timport {Table} from 'bexis2-core-ui';\
					\n\t// Your custom options component\
					\n\timport TableOptions from './TableOptions.svelte';\
					
					\n\tconst userGroups = [{\
					\n\t\tid: 1, name: 'Group 1', description: 'Testing 1'\
					\n\t}, ...];\
					\n</script>\

					\n<Table \n\tdata={userGroups} \n\toptionsComponent={TableOptions} \n/>;`}
				/>
			</div>

			<div class="grid gap-1">
				<p>TableOptions component:</p>
				<CodeBlock
					language="html"
					code={`<\script lang="ts">\
					\n\texport let row;\
					\n\t// row = {id: 1, name: 'Group 1', description: 'Testing 1'}\
					\n</script>\

					\n<button on:click={() => alert(JSON.stringify(row))}>\
					\n\tSee row info\
					\n</button>`}
				/>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-2 items-center gap-5">
		<div class="grid gap-5 grow">
			<h1>Users</h1>
			<Table data={users} />
		</div>
		<div class="grid gap-1 w-full grow">
			<p class="text-lg">With only required props:</p>
			<CodeBlock language="html" code={`<Table data={users} />`} />
		</div>
	</div>

	<div class="grid grid-cols-2 items-center gap-5 w-full">
		<div class="grid gap-5 grow">
			<h1>Users <span class="text-xl">IDs excluded</span></h1>
			<Table
				data={users}
				optionsComponent={TableOptions}
				filterComponent={TableFilter}
				columnFilterFn={columnFilter}
				excluded={['id']}
				pageSizes={[1, 3, 5]}
				defaultPageSize={5}
			/>
		</div>
		<div class="grid gap-1 w-full">
			<p class="text-lg">With all possible props:</p>
			<CodeBlock
				language="html"
				code={`<Table\
				\n\tdata={users}\
				\n\toptionsComponent={TableOptions}\
				\n\tfilterComponent={TableFilter}\
				\n\tcolumnFilterFn={columnFilter}\
				\n\texcluded={['id']}\
				\n\tpageSizes={[1, 3, 5]}\
				\n\tdefaultPageSize={5}\
			\n/>`}
			/>
		</div>
	</div>
</div>
