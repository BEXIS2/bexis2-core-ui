<script lang="ts">
	import Page from '$lib/components/page/Page.svelte';
	import type { errorType, linkType } from '$lib/models/Models';
	import { pageContentLayoutType } from '$lib/models/Enums';

	import { helpStore } from '$store/pageStores';
	import { errorStore } from '$store/apiStores';
	import type { helpItemType, helpStoreType } from '$models/Models';

	let links: linkType[] = [
		{
			label: 'manual',
			url: 'https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md'
		}
	];

	import { HelpExampleData } from './data/help';
	import { onMount } from 'svelte';
	import { Api } from '$lib';
	

	let helpItems: helpItemType[] = HelpExampleData.helpItems;
	helpStore.setHelpItemList(helpItems);

	let e: Error;
	function getError() {
		e = new Error('test');
	}

	getError();

	let title = 'Create a Dataset';

	function updateTitle() {
		title += Date.now();
	}

	async function getQuery() {
		await Api.post('/ddm/PublicSearch/Query', {
						searchType: 'new'
					});
	}

	onMount(async()=>{
		var res = await Api.get("test/errortest");
	})
</script>

<Page
	{title}
	note="On this page you can create a dataset based on a template. please select on template and fill out the form."
	{links}
	help={true}
	contentLayoutType={pageContentLayoutType.center}
	footer={true}
>
	<svelte:fragment slot="left">
		<button class="btn preset-filled-error-500" on:click={updateTitle}>change title </button>
		<button class="btn preset-filled-error-500" on:click={getQuery}>get query </button>
		<div class="w-screen">

		</div>
	</svelte:fragment>
	<div>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
		ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
		dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
		sit amet. 
	</div>
</Page>
