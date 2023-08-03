<script lang="ts">
	import { CodeBlock, type PopupSettings, popup } from '@skeletonlabs/skeleton';
	import { columnTypeCode } from '../data/codeBlocks';

	const popupClickColumn: PopupSettings = {
		event: 'click',
		target: 'popupClickColumn',
		placement: 'right'
	};
</script>

<div class="grid gap-5">
	<div class="grid gap-2" id="column">
		<h3 class="font-semibold items-center w-max h3">Column</h3>
		<button class="btn variant-ghost-primary w-min" use:popup={popupClickColumn}>
			Show type details</button
		>
		<div data-popup="popupClickColumn">
			<CodeBlock language="ts" code={columnTypeCode} />
		</div>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">header:</div>
			<div class="font-bold">string</div>
		</div>

		<p class="text-xl pl-10">
			Custom header to be displayed for the column. If not provided, header will be the same as the
			accessor.
		</p>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">exclude:</div>
			<div class="font-bold">boolean</div>
		</div>

		<p class="text-xl pl-10">
			Whether to exclude the column from the table or not. By default, columns are not excluded. An
			excluded column will still be available in the data object to apply actions.
		</p>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">disableFiltering:</div>
			<div class="font-bold">boolean</div>
		</div>

		<p class="text-xl pl-10">
			Whether to disable filtering for the column or not. By default, filtering is enabled.
		</p>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">disableSorting:</div>
			<div class="font-bold">boolean</div>
		</div>

		<p class="text-xl pl-10">
			Whether to disable sorting for the column or not. By default, sorting is enabled.
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

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">instructions:</div>
			<div class="font-bold">ColumnInstructions</div>
		</div>

		<p class="text-xl pl-10">
			Configuration for the column's appearance, sorting and filtering functionalities.
		</p>
	</div>
</div>
