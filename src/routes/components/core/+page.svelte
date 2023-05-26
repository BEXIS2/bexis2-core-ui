<script lang="ts">

	import CodeContainer from "$docs/components/CodeContainer.svelte";
	import Page from '$lib/components/page/Page.svelte';

 import PageExample from "./PageExample.svelte";
 import PageExampleRaw from "./PageExample.svelte?raw";

</script>

<Page title="Core" note="here are listed all basic components for a unified design of the pages.  ">
	<CodeContainer title="Page" svelte={PageExampleRaw}	>
		<div slot="info">by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description</div>
	 <PageExample/>
	</CodeContainer>
</Page>
