<script lang="ts">
	import Page from '$lib/components/page/Page.svelte';
	import MultiSelect from '$lib/components/form/MultiSelect.svelte';
	import { CountrieNames } from '../routes/components/form/examples/exampleData';

	import { Switch } from '@skeletonlabs/skeleton-svelte';

	let target;
	$: target;
</script>

<Page title="BEXIS2 Core UI Documentation">
	<blockquote class="blockquote">
		this page is the documentation about the <b>@bexis2/bexis2-core-ui</b> libary.
	</blockquote>
</Page>
