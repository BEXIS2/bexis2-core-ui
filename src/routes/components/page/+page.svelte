<script lang="ts">
	import Page from '$lib/components/page/Page.svelte';
	import type { Link } from '$lib/models/Models';

	import { HelpStore } from '$store/pagestore';
	import type { HelpItem, HelpStoreType } from '$models/Models';
	import TextInput from '$lib/components/form/TextInput.svelte';

	let links: Link[] = [
		{
			label: 'manual',
			url: 'https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md'
		}
	];

	import { HelpExampleData } from './data/help';
	let helpItems: HelpItem[] = HelpExampleData.helpItems;
	HelpStore.setHelpItemList(helpItems);
</script>

<Page
	title="Create a Dataset"
	note="On this page you can create a dataset based on a template. please select on template and fill out the form."
	{links}
    help={true}
>
	<div slot="description">
		<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
	</div>

	<div slot="middle">
        <TextInput id="name" label="name" help={true}/>
	</div>

</Page>

<!-- Slots Example, add colored containers with slot name centered -->
<!-- slots , basic slot - content, left, right, header, footer  -->
