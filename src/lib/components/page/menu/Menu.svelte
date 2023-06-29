<script lang="ts">

 import { onMount } from 'svelte';
 import { get } from 'svelte/store';
 import { getMenuItems}  from './MenuDataCaller';
 import { menuStore } from '$store/pagestore';

 import type { Menu } from "$models/Page";

 import MenuBar from './MenuBar.svelte';
 import SettingsBar from './SettingsBar.svelte';

 let menu:Menu;

 
 onMount(async () => {
  
  menu = get(menuStore);
  if(menu === undefined)
  {
    menu = await getMenuItems();
    menuStore.set(menu);
    //console.log("menu loaded",menu);
  }
})




</script>

{#if menu}

<div class="flex flex-row md:flex px-3 py-2 bg-tertiary-50 text-surface-800 z-50 shadow-md">

 <div class="basis-8">
 {#if menu.Logo}
   <img src='data:{menu.Logo.Mime};charset=utf-8;base64, {menu.Logo.Data}' alt='{menu.Logo.Name}' style='height:40px;' />
 {/if}
 </div>


  <div class="flex items-center md:space-x-5 px-3 text-lg justify-start">
    <MenuBar menuBar={menu.MenuBar} />
    <MenuBar menuBar={menu.Extended} />
  </div>
  <div class="flex-auto w-64 flex items-left md:space-x-3 justify-end">
    <MenuBar menuBar={menu.AccountBar} />
    <MenuBar menuBar={menu.LaunchBar} />
    <SettingsBar menuBar={menu.Settings} />
  </div>

</div>

{/if}