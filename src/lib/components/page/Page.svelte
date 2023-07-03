<script lang="ts">
  import {onMount} from 'svelte'

  import type { linkType } from "$lib/models/Models";

  // ui components
  import { AppShell, AppBar } from '@skeletonlabs/skeleton';
  import Menu from './menu/Menu.svelte'
  import Footer from './Footer.svelte'
  import Header from './Header.svelte'
  import Help from "./Help.svelte";
  import Breadcrumb from './breadcrumb/Breadcrumb.svelte';

  //popup
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';
  import { breadcrumbStore } from '$store/pageStores';

  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });


  // stores
  import { helpStore } from '$store/pageStores';
	import Docs from './Docs.svelte';
 
  export let title = "";
  export let note = "";
  export let links:linkType[]=[];

  // active or hide menu
  export let menu:boolean = true;
  export let footer:boolean = true;
  export let help:boolean = false;

  onMount(async () => {
    console.log("page")
    breadcrumbStore.clean();
    breadcrumbStore.addItem({label:title,link:window.location.pathname})
  });

 </script>

<AppShell>

  <!--header-->
  <svelte:fragment slot="header">
    <AppBar padding="0" spacing="space-y-0" background="white">
      <svelte:fragment slot="headline">
        <Header/>
        {#if true}
        <Menu/>
        {/if}

        <div class="grid grid-cols-2">
          <Breadcrumb {title}/>
          <Docs {links} {note}/>
        </div>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>


  <svelte:fragment slot="footer">
   <Footer/>
  </svelte:fragment>



<div class="px-5 grid gap-5 content-center" >


  <slot name="description" />


 <div class="flex flex-initial space-x-3">
  
  {#if $$slots.left}
  <div class="flex-shrink-0 w-96 w-min-96  border-y border-solid border-surface-500">
    <slot name="left" />
  </div>
  {/if}

  <div class="space-y-5 py-3 border-y border-solid border-surface-500">
     <slot/>
  </div>


  {#if $$slots.right}
  <div class="flex-shrink-0 w-96  border-y border-solid border-surface-500">
    <slot name="right"/> 
  </div> 
  {/if}
    						
  </div>




  <Help active={help}/>





</AppShell>