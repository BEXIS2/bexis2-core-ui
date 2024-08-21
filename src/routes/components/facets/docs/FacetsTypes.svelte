<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	import { facetGroupType, facetOptionType } from '../data/codeBlocks';

	const popupClickFacetGroup: PopupSettings = {
		event: 'click',
		target: 'popupClickFacetGroup',
		placement: 'right'
	};

	const popupClickFacetOption: PopupSettings = {
		event: 'click',
		target: 'popupClickFacetOption',
		placement: 'right'
	};
</script>

<div class="grid gap-20">
	<div class="grid gap-5">
		<div class="grid gap-2">
			<h3 class="font-semibold items-center w-max h3">FacetGroup</h3>
			<button class="btn variant-ghost-primary w-min" use:popup={popupClickFacetGroup}>
				Show type details</button
			>
			<div data-popup="popupClickFacetGroup">
				<CodeBlock language="ts" code={facetGroupType} />
			</div>
		</div>

		<div class="items-center">
			<div class="flex gap-2">
				<div class="italic">[key: <strong>string</strong>]:</div>
				<div class="font-bold">FacetOption [ ]</div>
			</div>

			<p class="text-xl pl-10">
				Each key of this object represents an array of possible options where the key will be used
				as the name of that group.
			</p>
		</div>
	</div>

	<div class="grid gap-5">
		<div class="grid gap-2">
			<h3 class="font-semibold items-center w-max h3">FacetOption</h3>
			<button class="btn variant-ghost-primary w-min" use:popup={popupClickFacetOption}>
				Show type details</button
			>
			<div data-popup="popupClickFacetOption">
				<CodeBlock language="ts" code={facetOptionType} />
			</div>
		</div>

		<div class="grid gap-2">
			<div class="italic div">Underlined attributes are <strong>required</strong>.</div>
		</div>

		<div class="items-center">
			<div class="flex gap-2">
				<div class="italic underline">value:</div>
				<div class="font-bold">string</div>
			</div>

			<p class="text-xl pl-10">Name of the filter.</p>
		</div>

		<div class="items-center">
			<div class="flex gap-2">
				<div class="italic">count:</div>
				<div class="font-bold">number</div>
			</div>

			<p class="text-xl pl-10">Number of items available for this specific filter.</p>
		</div>
	</div>
</div>
