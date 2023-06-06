<script lang="ts">
 import { popup } from '@skeletonlabs/skeleton';
 import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

 import type { PopupSettings } from '@skeletonlabs/skeleton';
 import type { MenuItem } from "../../models/menu";
 import Fa from 'svelte-fa/src/fa.svelte'
 import { faCog } from '@fortawesome/free-solid-svg-icons'

 export let menuBar:MenuItem [];


 let lastModule = "";
 let first = true;

function isNewModule(module)
{
 if(module === lastModule ){
   return false;
 }
 else
 {
   lastModule = module;
   if(first)
   {
     first = false;
     return false;
   }
   
   return true;
 }
}

 let popupCombobox: PopupSettings = {
event: 'click',
target: 'popupCombobox',
placement: 'bottom',
// Close the popup when the item is clicked
closeQuery: '.listbox-item'
};

 </script>

{#if menuBar}
<button class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" use:popup={popupCombobox}>
<span class="capitalize"><Fa icon={faCog} /></span>

</button>
<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
<ListBox rounded="rounded-none bg-white">
{#each menuBar as menubarItem}
{#if isNewModule(menubarItem.Module) }<hr class="bg-gray-900">{/if}
<ListBoxItem class="bg-white text-gray-900 py-1" bind:group={menubarItem.Title} name="medium" value={menubarItem.Title}>{menubarItem.Title}</ListBoxItem>



{/each}
</ListBox>
</div>
{/if}

