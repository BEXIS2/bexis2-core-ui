<script lang=ts>
import { helpStore } from '$store/pageStores.js'
import type { helpItemType, helpStoreType } from "$models/Models";

import Help from "$lib/components/page/Help.svelte";
import TextInput from '$lib/components/form/TextInput.svelte';
import TextArea from '$lib/components/form/TextArea.svelte'; 

//Import the list of help items from a file 
import { HelpExampleData } from './data/help.js'
	import Page from '$lib/components/page/Page.svelte';
let helpItems:helpItemType[] = HelpExampleData.helpItems;

//Set list of help items and clear selection
helpStore.setHelpItemList(helpItems);

let help=true;

</script>
<Page help={true}>
<h3 class="h3">Basic Useage</h3>

    <div class="p-5">     
        <p class="p-5" id="name" on:mouseover={() => {helpStore.show('name')}} on:mouseout={() => {helpStore.hide()}}>Name</p>

        <p class="p-5" id="description" on:mouseover={() => {helpStore.show('description')}} on:mouseout={() => {helpStore.hide()}}>Description</p>
    </div>

<h3 class="h3">Use with Inputs</h3>
<p>Some inputs have the mouseover and mouseout functions for the help bulid in you just have to anable them.</p>

    <div class="p-5">     
        <TextInput  id="name" label="Name of something important" {help}/>

        <TextArea  id="description" label="Description to understand what happen in the world" {help}/>
    </div>

<h3 class="h3">Toggle</h3>
<p>If you need the help to show on a click event, you can toggle it</p>

    <div class="p-5">
        <button  type="button" class="btn variant-filled-warning" on:click={() => {helpStore.toggle('name')}}>name</button>

        <button  type="button" class="btn variant-filled-warning" on:click={() => {helpStore.toggle('description')}}>description</button>
    </div>
    
<h3 class="h3">Output</h3>
<p>this is just for demo the output is part of the page component</p>

    <Help/>
</Page>