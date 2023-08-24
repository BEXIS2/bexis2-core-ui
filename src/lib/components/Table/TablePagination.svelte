<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import {
		faAnglesRight,
		faAngleRight,
		faAnglesLeft,
		faAngleLeft
	} from '@fortawesome/free-solid-svg-icons';

	export let pageConfig;
	export let pageSizes;
	export let id;

	const { pageIndex, pageCount, pageSize, hasNextPage, hasPreviousPage } = pageConfig;

	const goToFirstPage = () => ($pageIndex = 0);
	const goToLastPage = () => ($pageIndex = $pageCount - 1);
	const goToNextPage = () => ($pageIndex += 1);
	const goToPreviousPage = () => ($pageIndex -= 1);

	$: goToFirstPageDisabled = !$pageIndex;
	$: goToLastPageDisabled = $pageIndex == $pageCount - 1;
	$: goToNextPageDisabled = !$hasNextPage;
	$: goToPreviousPageDisabled = !$hasPreviousPage;
</script>

<div class="flex justify-center gap-1">
	<button
		class="btn btn-sm variant-filled-primary"
		on:click|preventDefault={goToFirstPage}
		disabled={goToFirstPageDisabled}
		id="{id}-first"
	>
		<Fa icon={faAnglesLeft} /></button
	>
	<button
		class="btn btn-sm variant-filled-primary"
		id="{id}-previous"
		on:click|preventDefault={goToPreviousPage}
		disabled={goToPreviousPageDisabled}><Fa icon={faAngleLeft} /></button
	>

	<select
		name="pageSize"
		id="{id}-pageSize"
		class="select variant-filled-primary w-min font-bold"
		bind:value={$pageSize}
	>
		{#each pageSizes as size}
			<option value={size}>{size}</option>
		{/each}
	</select>

	<button
		class="btn btn-sm variant-filled-primary"
		id="{id}-next"
		on:click|preventDefault={goToNextPage}
		disabled={goToNextPageDisabled}><Fa icon={faAngleRight} /></button
	>
	<button
		class="btn btn-sm variant-filled-primary"
		id="{id}-last"
		on:click|preventDefault={goToLastPage}
		disabled={goToLastPageDisabled}><Fa icon={faAnglesRight} /></button
	>
</div>
