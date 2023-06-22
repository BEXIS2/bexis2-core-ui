<script lang="ts">
 import { popup } from '@skeletonlabs/skeleton';
 import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

 import type { PopupSettings } from '@skeletonlabs/skeleton';
 import type { MenuItem } from "./menu";

 export let menubarItem:MenuItem;
 export let comboboxValue;

 let radomNumber = Math.floor(Math.random() * 100).toString();

 let popupCombobox: PopupSettings = {
event: 'click',
target: radomNumber,
placement: 'bottom',
// Close the popup when the item is clicked
closeQuery: '.listbox-item'
};

 </script>
{#if menubarItem.Items.length<1} 

<button class="flex items-center gap-x-1 text-xl font-semibold leading-6 text-gray-500" use:popup={popupCombobox}>
<span class="capitalize">{comboboxValue ?? menubarItem.Title}</span>

</button>

{:else}
<button class="flex items-center gap-x-1 text-xl font-semibold leading-6 text-gray-00" use:popup={popupCombobox}>
<span class="capitalize">{menubarItem.Title}</span>
<div class="before:content-['▾']"></div>
</button>
<div class="card w-48 shadow-xl py-2" data-popup={radomNumber}>

<ListBox rounded="rounded-none">
{#each menubarItem.Items as item}

<ListBoxItem class="bg-white text-gray-900 py-1 text-sm"  bind:group={item.Title} name="medium" value={item.Title}><a class="bg-white text-gray-900 py-1 text-sm"  href={item.Url}>{item.Title}</a></ListBoxItem>
{/each}
</ListBox>
</div>

{/if}
