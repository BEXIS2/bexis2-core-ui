<script lang="ts">
 import { popup } from '@skeletonlabs/skeleton';

//uicomponents
import MenuSublist from './MenuSublist.svelte';

 //types
 import type { PopupSettings } from '@skeletonlabs/skeleton';
 import type { MenuItem } from "./menu";

 import { goTo } from '$services/BaseCaller';


 export let menubarItem:MenuItem;
 export let comboboxValue;

 let id = Math.floor(Math.random() * 100).toString();

 let popupCombobox: PopupSettings = {
event: 'click',
target: id,
placement: 'bottom',
// Close the popup when the item is clicked
closeQuery: '.listbox-item'
};

 </script>
{#if menubarItem.Items.length<1} 

<button use:popup={popupCombobox} on:click={()=> goTo(menubarItem.Url)}>
<span class="capitalize">{comboboxValue ?? menubarItem.Title}</span>
</button>

{:else}


<button class="flex items-center gap-x-1 " use:popup={popupCombobox}>
<span class="capitalize">{menubarItem.Title}</span>
<div class="before:content-['▾']"></div>
</button>

<MenuSublist {id} items={menubarItem.Items} />

{/if}
