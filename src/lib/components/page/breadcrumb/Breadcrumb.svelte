<script lang="ts">

 import type { Link } from "$lib/models/Models";
 import { breadcrumbStore } from '$store/pagestore';
 import type{ BreadcrumbItem, Breadcrumb } from '$models/Page';


 export let title;


 let list:BreadcrumbItem[] = [];
 $:list;

	$:breadcrumbStore.subscribe(value => {
		
			list = value?.items;
	
	});



</script>


<div class="px-5 py-2">
	<ol class="breadcrumb -p50">

	<!--default home-->
	<li class="crumb"><a class="anchor" href={"/"}>Home</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>

	{#each list as crumb, i}
		<!-- If crumb index is less than the breadcrumb length minus 1 -->
		{#if i < list.length - 1}
			<li class="crumb"><a class="anchor" href={crumb.link}>{crumb.label}</a></li>
			<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		{:else}
			<li class="crumb">{crumb.label}</li>
		{/if}
	{/each}
</ol>
</div>


