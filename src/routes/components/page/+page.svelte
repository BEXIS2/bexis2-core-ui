<script lang="ts">
 import Page from "$lib/components/page/Page.svelte";
 import type { Link } from "$lib/models/Models";
 
 import { setApiConfig } from '$lib/stores/apistore';

 import { onMount } from 'svelte';

let links:Link[] = [{label:"manual",url:"https://github.com/BEXIS2/Documents/blob/master/Manuals/DCM/Manual.md"}]


onMount(async () => {

 setApiConfig("dev.bexis2.uni-jena.de","david","123456");

})

</script>

<Page 
title="Create a Dataset" 
note="On this page you can create a dataset based on a template. please select on template and fill out the form." 
{links} >

<div slot="description">

 <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
 
</div>

<!-- your Page content -->
<div>My Content HERE</div>

</Page>


<!-- Slots Example, add colored containers with slot name centered -->
<!-- slots , basic slot - content, left, right, header, footer  -->