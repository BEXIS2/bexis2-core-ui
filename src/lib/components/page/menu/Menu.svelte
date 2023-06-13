<script lang="ts">
// 
 import Fa from 'svelte-fa/src/fa.svelte'
 import { faCog } from '@fortawesome/free-solid-svg-icons'

 import { onMount } from 'svelte';
 
 import { getMenuItems}  from './MenuDataCaller';

 import type { Menu } from "./menu";

 import MenuBar from './MenuBar.svelte';
 import SettingsBar from './SettingsBar.svelte';

 let menu:Menu;

 onMount(async () => {
  
  menu = await getMenuItems();

})




</script>

{#if menu}

<div class="flex flex-row md:flex px-3 py-2">
 <div class="basis-2/3">
 {#if menu.Logo}
   <img src='data:{menu.Logo.Mime};charset=utf-8;base64, {menu.Logo.Data}' alt='{menu.Logo.Name}' style='height:40px;' />
 {/if}
 </div>

 <div class="flex-auto w-64 flex items-center md:space-x-3 justify-end">

 <MenuBar menuBar={menu.AccountBar} />
 <MenuBar menuBar={menu.LaunchBar} />
 <SettingsBar menuBar={menu.Settings} />
 </div>

</div>
<div class="flex items-center md:space-x-5 px-3 text-lg">
 <MenuBar menuBar={menu.MenuBar} />
 <MenuBar menuBar={menu.Extended} />
</div>
{/if}