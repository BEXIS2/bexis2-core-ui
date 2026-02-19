<script lang="ts">
	import { breadcrumbStore } from '$store/pageStores';
	import type { breadcrumbItemType } from '$models/Page';
	import { browser } from '$app/environment';


	export let title;
	$: update(title);

	export let applicationName: string = '';

	function update(t) {
		if (browser) {
			breadcrumbStore.updateItem({ label: t, link: window.location.pathname });
		}
	}

	let list: breadcrumbItemType[] = [];
	$: {
		const value = $breadcrumbStore;
		list = value?.items ?? [];
	}


</script>



<div class="px-5 py-2">

	<ol class="flex flex-wrap items-center gap-1 text-sm text-surface-700">
		<!--default home-->
		<li class="flex items-center whitespace-nowrap">
			<a class="hover:text-primary-600" href={'/'}>{applicationName}</a>
		</li>
		<li class="px-1 text-surface-500" aria-hidden="true">›</li>

		{#each list as crumb, i}
			<!-- If crumb index is less than the breadcrumb length minus 1 -->
			{#if i < list.length - 1}
				<li class="flex items-center whitespace-nowrap">
					<a class="hover:text-primary-600" href={crumb.link}>{crumb.label}</a>
				</li>
				<li class="px-1 text-surface-500" aria-hidden="true">›</li>
			{:else}
				<li class="flex items-center whitespace-nowrap">{crumb.label}</li>
			{/if}
		{/each}
	</ol>

</div>


