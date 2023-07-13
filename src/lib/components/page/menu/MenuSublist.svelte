<script lang="ts">
import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
import type { menuItemType } from '$models/Page';
import { goTo } from '$services/BaseCaller';

export let id;
export let items:menuItemType[];

	let lastModule = '';
	let first = true;

	// store last module
	function isNewModule(module) {
		if (module === lastModule) {
			return false;
		} else {
			lastModule = module;
			if (first) {
				first = false;
				return false;
			}

			return true;
		}
	}
</script>

<div class="z-50 w-max" data-popup={id}>
 <ListBox class="bg-white border-solid border border-surface-500">
  {#each items as item}
   {#if isNewModule(item.Module) }<hr class="text-surface-800">{/if}
   <ListBoxItem class="bg-white text-sm text-surface-800 py-1 hover:bg-surface-100 hover:text-secondary-500" 
      bind:group={item.Title} 
      name="medium" 
      value={item.Title}
      on:click={()=> goTo(item.Url)}
      >
    {item.Title}
   </ListBoxItem>
   {/each}
 </ListBox>
</div> 