<script lang="ts">
	import { CodeBlock, type PopupSettings, popup } from '@skeletonlabs/skeleton';
	import { columnInstructionsTypeCode } from './codeBlocks';

	const popupClickColumnInstructions: PopupSettings = {
		event: 'click',
		target: 'popupClickColumnInstructions',
		placement: 'right'
	};
</script>

<div class="grid gap-5">
	<div class="grid gap-2" id="columnInstructions">
		<h3 class="font-semibold items-center w-max">ColumnInstructions</h3>
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
</div>
