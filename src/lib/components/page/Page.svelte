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
  import { popup } from '@skeletonlabs/skeleton';
  import type { PopupSettings } from '@skeletonlabs/skeleton';
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

 <div class="px-5 grid gap-5 content-center" >


  <slot name="description" />


 <div class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
  {#if $$slots.left}
  <div class="w-fixed w-full max-w-min flex-shrink flex-grow-1 px-4">
    <slot name="left" />
  </div>
  {/if}
    
  <div class="w-full flex-initial items-center justify-center pt-1 px-3 max-w-screen-lg">
    <slot name="middle" />
    {#if links.length>0}
    <div class="py-5">
      {#each	links as link}
        <a class="chip variant-ringed" href={link.url}>{link.label}</a>
      {/each}
    </div>
    {/if}
    <slot/>
  </div>


  {#if $$slots.right}
  <div class="w-fixed w-full max-w-min flex-shrink flex-grow-0 px-2">
    <slot name="right"/> 
  </div>
  {/if}
    
					

  <Help active={help} />

<svelte:fragment slot="footer">
 {#if footer}
   <!-- footer -->
   <Footer/>
 {/if}
 </svelte:fragment>

</AppShell>