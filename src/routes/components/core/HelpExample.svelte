<script lang=ts>
import { HelpStore } from '$store/pagestore'
import type { HelpItem, HelpStoreType } from "$models/Models";

import Page from "$lib/components/page/Page.svelte";
import TextInput from '$lib/components/form/TextInput.svelte';
import TextArea from '$lib/components/form/TextArea.svelte'; 

import {HelpExampleData } from './data/help.js'
let helpItems:HelpItem[] = HelpExampleData.helpItems;
HelpStore.setHelpItemList(helpItems);

let helpItem:HelpItem = {name:'ShowHelpItem', description:'Lorem ipsum dolor sit ame'}

let help=true;

</script>

<Page title="Help Example" menu={false} {help}>
    <div class="p-5">
     
        <TextArea  id="description" label="Description to understand what happen in the world" {help}/>
 
        <TextInput  id="name" label="Name of something important" {help}/>

        
    </div>
    <div>
        <div>
            <button  type="button" class="btn variant-filled-warning" on:click={() => {HelpStore.toggle('name')}}>help</button>
        </div>

    </div>


</Page>