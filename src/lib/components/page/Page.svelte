<script lang="ts">
  import {onMount} from 'svelte'

  import type { linkType } from "$lib/models/Models";

  // ui components
  import { AppShell, AppBar } from '@skeletonlabs/skeleton';
  import Menu from './menu/Menu.svelte'
  import Footer from './Footer.svelte'
  import Header from './Header.svelte'
  import HelpPopUp from "./HelpPopUp.svelte";
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

  <slot name="description" />

 <div class="flex flex-initial space-x-5">
  
  {#if $$slots.left}
  <div class="p-5 flex-shrink-0 w-96 w-min-96  border-y border-solid border-surface-500">
    <slot name="left" />
  </div>
  {/if}

  <div class="p-5 space-y-5 border-y border-solid border-surface-500 w-screen">
     <slot/>
  </div>


  {#if $$slots.right}
  <div class=" p-5 flex-shrink-0 w-96  border-y border-solid border-surface-500">
    <slot name="right"/> 
  </div> 
  {/if}
    						
  </div>

  <HelpPopUp active={help}/>

</AppShell>