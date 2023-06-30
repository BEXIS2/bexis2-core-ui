<script lang="ts">
  import {onMount} from 'svelte'

  import type { linkType } from "$lib/models/Models";

  // ui components
  import Menu from './menu/Menu.svelte'
  import Help from "./Help.svelte";
  import Breadcrumb from './breadcrumb/Breadcrumb.svelte';

  //popup
  import { popup } from '@skeletonlabs/skeleton';
  import type { PopupSettings } from '@skeletonlabs/skeleton';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';
  import { breadcrumbStore } from '$store/pageStores';

  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

  import { AppShell } from '@skeletonlabs/skeleton';

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
    console.log("on mount page ")
    breadcrumbStore.clean();
    breadcrumbStore.addItem({label:title,link:window.location.pathname})
 
    // clean help when is not active
    //if(!help){ helpStore.clear() }
  });

  //popup
  const popupClick: PopupSettings = {
    event: 'click',
    target: 'popupClick',
    placement: 'top' 
  };
 
 </script>

 {#if true}
  <Menu/>
 {/if}

 <div class="grid grid-cols-2">
  <Breadcrumb {title}/>
  <Docs {links} {note}/>
 </div>


 <div class="px-5 grid gap-5 content-center" >

  <!-- <h3 class="h3">{title}</h3>
  {#if note}
    <blockquote class="blockquote">{note}</blockquote>
  {/if} -->

  <slot name="description" />


 <div class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
  {#if $$slots.left}
  <div class="w-fixed w-full max-w-min flex-shrink flex-grow-1 px-4">
    <slot name="left" />
  </div>
  {/if}
    
    <div class="w-full flex-initial items-center justify-center pt-1 px-3">
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
    {#if $$slots.right || help}
    <div class="w-fixed w-full max-w-min flex-shrink flex-grow-0 px-2" class:w-96:={help}>
      <!--if help is active show Help-->
      <!--if help is active and slot is set -->
      <!-- help is deactiveated -->
      <slot name="right"/>
      
    </div>
    {/if}
    
					
  </div>
  </div>
 
  {#if help}
  <button class="btn btn-sm variant-filled-warning fixed bottom-5 right-10" use:popup={popupClick}>?</button>
    
  <div class="card p-4 variant-filled-primary" data-popup="popupClick">
    <Help />
    <div class="arrow variant-filled-primary" />
  </div>
  {/if}


 {#if menu}
   <!-- footer -->
 {/if}
 