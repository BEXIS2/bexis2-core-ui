<script lang="ts">

	import CodeContainer from "$docs/components/CodeContainer.svelte";
	import Page from '$lib/components/page/Page.svelte';

 import PageExample from "./PageExample.svelte";
 import PageExampleRaw from "./PageExample.svelte?raw";

 import AlertExample from "./AlertExample.svelte";
 import AlertExampleRaw from "./AlertExample.svelte?raw";

	import SpinnerExample from "./SpinnerExample.svelte";
 import SpinnerExampleRaw from "./SpinnerExample.svelte?raw";
</script>

<div id="toc-target">
<Page title="Core" note="here are listed all basic components for a unified design of the pages.  ">
	<CodeContainer title="Page" svelte={PageExampleRaw}	>
		<div slot="info">by using these components a unified border is displayed on the page, furthermore, there are props for title, notes and links, as well as a slot for description</div>
	 <PageExample/>
	</CodeContainer>

	<CodeContainer title="Alert" svelte={AlertExampleRaw}	>
		<div slot="info">The alerts are used to pass on messages to the user.</div>
	 <AlertExample/>
	</CodeContainer>

	<CodeContainer title="Spinner" svelte={SpinnerExampleRaw}	>
		<div slot="info"><p>every time there is a change that a user has to wait for, a spinner should be used. this component can be customized by <b>color, size and position.</b></p></div>
 	<SpinnerExample/>
	</CodeContainer>
</Page>
</div>