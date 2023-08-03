<script lang="ts">
	import { CodeBlock, type PopupSettings, popup } from '@skeletonlabs/skeleton';
	import { columnsTypeCode } from '../data/codeBlocks';

	const popupClickColumns: PopupSettings = {
		event: 'click',
		target: 'popupClickColumns',
		placement: 'right'
	};
</script>

<div class="grid gap-5">
	<div class="grid gap-2" id="columns">
		<h3 class="font-semibold items-center w-max h3">Columns</h3>
		<button class="btn variant-ghost-primary w-min" use:popup={popupClickColumns}>
			Show type details</button
		>
		<div data-popup="popupClickColumns">
			<CodeBlock language="ts" code={columnsTypeCode} />
		</div>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">[key: <strong>string</strong>]:</div>
			<div class="font-bold">Column</div>
		</div>

		<p class="text-xl pl-10">
			Each key of this object is an accessor in the data object. If a certain key is not present,
			defaults will be applied for that accessor/column. If a key is present, defaults will be
			replaced with provided data.
		</p>
	</div>
</div>
