<script lang="ts">
	import CodeContainer from "$docs/components/CodeContainer.svelte";
 import Set from "./Set.svelte";
 import SetRaw from "./Set.svelte?raw";
 import UsedIcons from "./UsedIcons.svelte";
 import UsedIconsRaw from "./UsedIcons.svelte?raw";

	import Page from '$lib/components/page/Page.svelte';

</script>

<Page >
	<div id="toc-target">
<h2>Icon Overview</h2>
	<CodeContainer title="SetIcon" 
	svelte={SetRaw}
	external={[
		{label:"Free Solid Awesome Font Icons v5",url:"https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=solid&m=free"},
		{label:"https://www.npmjs.com/package/svelte-fa",url:"https://www.npmjs.com/package/svelte-fa"}
	]}
	>
		<span slot="info">
			This example shows how to set a Icon.
		</span>
	<Set/>
	</CodeContainer>

	<CodeContainer title="Used Icons" 
	svelte={UsedIconsRaw}
	external={[
		{label:"Free Solid Awesome Font Icons v5",url:"https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=solid&m=free"},
		{label:"https://www.npmjs.com/package/svelte-fa",url:"https://www.npmjs.com/package/svelte-fa"}
	]}
	>
		<span slot="info">
			This story shows alle used icons in bexis 2.
		</span>
	<UsedIcons/>
	</CodeContainer>

</div>
</Page>