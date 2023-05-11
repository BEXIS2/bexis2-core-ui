<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	import Filter from './Filter.svelte';

	export let column;
	export let type;

	let isOpen = false;
	let firstFilter = 'isequal';
	let firstInput = '';
	let secondFilter = 'isequal';
	let secondInput = '';

	const dispatch = createEventDispatcher();

	const filter = () => {
		dispatch('submit', {
			column: column,
			type: type,
			firstFilter: {
				option: firstFilter,
				value: firstInput
			},
			secondFilter: {
				option: secondFilter,
				value: secondInput
			}
		});

		isOpen = false;
	};

	const popupFeatured: PopupSettings = {
		event: 'click',
		target: `filter-${column}`,
		placement: 'bottom'
	};
</script>

<form class="" on:submit|preventDefault={filter}>
	<button class="btn variant-filled-primary w-min p-2" type="button" use:popup={popupFeatured}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="12"
			height="12"
			fill="currentColor"
			class="bi bi-funnel-fill"
			viewBox="0 0 16 16"
		>
			<path
				d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"
			/>
		</svg>
	</button>
	<div data-popup={`filter-${column}`}>
		<div class="card p-3 absolute grid gap-2 shadow-lg z-10 w-min">
			<label for="" class="label normal-case text-sm">Show rows with value that</label>
			<Filter bind:filterOption={firstFilter} bind:filterValue={firstInput} {type} />
			<label for="" class="label normal-case">And</label>
			<Filter bind:filterOption={secondFilter} bind:filterValue={secondInput} {type} />
			<button class="btn variant-filled-primary btn-sm" type="submit">Submit</button>
		</div>
	</div>
</form>
