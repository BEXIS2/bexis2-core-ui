<script lang="ts">
	import Page from '$lib/components/page/Page.svelte';
	import type { linkType } from '$lib/models/Models';
	import { pageContentLayoutType } from '$lib/models/Enums';

	import { helpStore } from '$store/pageStores';
	import type { helpItemType, helpStoreType } from '$models/Models';
	import TextInput from '$lib/components/form/TextInput.svelte';
	import ErrorMessage from '$lib/components/page/ErrorMessage.svelte';

	let links: linkType[] = [
		{
			label: 'manual',
			url: 'https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md'
		}
	];

	import { HelpExampleData } from './data/help';

	let helpItems: helpItemType[] = HelpExampleData.helpItems;
	helpStore.setHelpItemList(helpItems);

	let e: Error;
	function getError() {
		e = new Error('test');
	}

	getError();

	let title = "Create a Dataset"
 
function updateTitle()
{
		title += Date.now(); 
}

</script>

<Page
	title="{title}"
	note="On this page you can create a dataset based on a template. please select on template and fill out the form."
	{links}
	help={true}
	contentLayoutType={pageContentLayoutType.center}
>
	<svelte:fragment>
		<button class="btn variant-filled-error" on:click="{updateTitle}">change title </button>
		<div class="w-screen">
			<h2 class="h2">Content</h2>
			<TextInput id="name" label="name" help={true} />
			<p>Lorem ipsum dolor sit amet, con</p>

			{#if e}
				<ErrorMessage error={e} />
			{/if}
		</div>
	</svelte:fragment>
</Page>
