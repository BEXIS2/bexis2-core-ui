<script lang="ts">
	import { CodeBlock, type PopupSettings, popup } from '@skeletonlabs/skeleton';
	import { tableConfigTypeCode } from '../data/codeBlocks';

	const popupClickTableConfig: PopupSettings = {
		event: 'click',
		target: 'popupClickTableConfig',
		placement: 'right'
	};
</script>

<div class="grid gap-5">
	<div class="grid gap-2" id="tableConfig">
		<h3 class="font-semibold relative w-max">
			{`TableConfig <T>`}
		</h3>
		<button class="btn variant-ghost-primary w-min" use:popup={popupClickTableConfig}
			>Show type details</button
		>
		<div class="italic div">Underlined attributes are <strong>required</strong>.</div>
		<div class="variant-filled-secondary" data-popup="popupClickTableConfig">
			<CodeBlock language="ts" code={tableConfigTypeCode} />
		</div>
	</div>

	<div class="items-center">
		<div class="flex gap-2 underline">
			<div class="italic">id:</div>
			<div class="font-bold">string</div>
		</div>

		<p class="text-xl pl-10">
			Unique identifier for the table to generate unique IDs for the filters.
		</p>
	</div>

	<div class="items-center">
		<div class="flex gap-2 underline">
			<div class="italic">data:</div>
			<div class="font-bold">{`Writable <T[]>`}</div>
		</div>

		<p class="text-xl pl-10">
			A writable store of the type <code class="!text-xl">T[]</code>. Any changes in the store will
			be reflected in the table.
		</p>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">height:</div>
			<div class="font-bold">number</div>
		</div>

		<p class="text-xl pl-10">Custom height for the table in pixels.</p>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">optionsComponent:</div>
			<div class="font-bold">{`SvelteComponent`}</div>
		</div>

		<p class="text-xl pl-10">
			Custom Svelte component to apply actions on a specific row. Table will not have an options
			column if no <code class="!text-xl">optionsComponent</code> was provided.
		</p>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">pageSizes:</div>
			<div class="font-bold">{`number[]`}</div>
		</div>

		<p class="text-xl pl-10">
			An array of page sizes to be used for the table. By default, page sizes are 5, 10, 15, 20.
		</p>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">defaultPageSize:</div>
			<div class="font-bold">{`number`}</div>
		</div>

		<p class="text-xl pl-10">
			Default page size to be used for the table upon rendering. By default, default page size is
			10.
		</p>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">columns:</div>
			<div class="font-bold">{`Columns`}</div>
		</div>

		<p class="text-xl pl-10">
			An object with configuration for specific columns. <code class="!text-xl">Columns</code>
			object is described below.
		</p>
	</div>
</div>
