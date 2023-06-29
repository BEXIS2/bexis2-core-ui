
<script lang="ts">

 import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
 import { storePopup } from '@skeletonlabs/skeleton';
 storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
 
 import type { MenuItem } from "./menu";
 import Item from "./MenuItem.svelte";
 
 export let menuBar:MenuItem [];
 
 let comboboxValue: string;
 
 let radomNumber = Math.floor(Math.random() * 100);
 
 
 console.log(menuBar);
 
 </script>
 
 
 {#if menuBar}
 {#each menuBar as menubarItem}
 
 <Item {menubarItem}{comboboxValue}/>
 
 {/each}
 {/if}
 
 
 