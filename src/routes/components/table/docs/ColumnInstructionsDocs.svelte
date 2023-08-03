<script lang="ts">
	import { CodeBlock, type PopupSettings, popup } from '@skeletonlabs/skeleton';
	import { columnInstructionsTypeCode } from '../data/codeBlocks';

	const popupClickColumnInstructions: PopupSettings = {
		event: 'click',
		target: 'popupClickColumnInstructions',
		placement: 'right'
	};
</script>

<div class="grid gap-5">
	<div class="grid gap-2" id="columnInstructions">
		<h3 class="font-semibold items-center w-max h3">ColumnInstructions</h3>
		<button class="btn variant-ghost-primary w-min" use:popup={popupClickColumnInstructions}>
			Show type details</button
		>
		<div data-popup="popupClickColumnInstructions">
			<CodeBlock language="ts" code={columnInstructionsTypeCode} />
		</div>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">toStringFn:</div>
			<div class="font-bold">(value: any) => string</div>
		</div>

		<p class="text-xl pl-10">Custom toString function to be applied on the column.</p>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">toSortableValueFn:</div>
			<div class="font-bold">(value: any) => string | number</div>
		</div>

		<p class="text-xl pl-10">
			Custom function to return either a string or a number value to have a sortable column.
		</p>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">toFilterableValueFn:</div>
			<div class="font-bold">(value: any) => string | number | Date</div>
		</div>

		<p class="text-xl pl-10">
			Custom function to return either a string, number or a Date value to have a filterable column.
			Filter options are based on the returned value.
		</p>
	</div>

	<div class="items-center mt-5">
		<div class="flex gap-2">
			<div class="italic">renderComponent:</div>
			<div class="font-bold">SvelteComponent</div>
		</div>

		<div class="ml-5">
			<p class="underline"><code class="!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500">renderComponent</code> overrides <code class="!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500">toStringFn</code>.</p>
			<p class="">Every <code class="!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500">renderComponent</code> will get 2 props:</p>
			<div class="items-center mt-2">
				<div class="flex gap-2">
					<div class="italic">row:</div>
					<div class="font-bold">Object</div>
				</div>
				<p class="text-xl pl-10">
					The current row in the table. In other words, a single object from the data store.
				</p>
			</div>
			<div class="items-center mt-2">
				<div class="flex gap-2">
					<div class="italic">value:</div>
					<div class="font-bold">any</div>
				</div>
				<p class="text-xl pl-10">The value of the current cell.</p>
			</div>
		</div>
	</div>
</div>
