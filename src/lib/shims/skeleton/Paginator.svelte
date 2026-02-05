<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// Basic paginator settings, mirroring Skeleton's API shape
	// size: total items, limit: items per page, page: current page index (0-based)
	export let settings: {
		size: number;
		limit: number;
		page: number;
		amounts?: number[];
	} | undefined;
	export let select: any;
	export let active: any;
	export let controlVariant: any;
	export let buttonClasses: string | undefined;
	export let regionControl: any;
	export let maxNumerals: any;
	export let showNumerals: any;

	$: totalPages = settings && settings.limit
		? Math.max(1, Math.ceil(settings.size / settings.limit))
		: 1;
	$: currentPage = settings?.page ?? 0; // zero-based

	function goTo(page: number) {
		const clamped = Math.min(Math.max(page, 0), totalPages - 1);
		if (clamped !== currentPage) {
			dispatch('page', clamped);
		}
	}

	function prev() {
		goTo(currentPage - 1);
	}

	function next() {
		goTo(currentPage + 1);
	}
</script>

<div class="paginator flex gap-1 items-center">
	<button
		type="button"
		class={buttonClasses}
		disabled={currentPage <= 0}
		on:click={prev}
	>
		Prev
	</button>
	<span>
		{currentPage + 1} / {totalPages}
	</span>
	<button
		type="button"
		class={buttonClasses}
		disabled={currentPage >= totalPages - 1}
		on:click={next}
	>
		Next
	</button>
</div>
