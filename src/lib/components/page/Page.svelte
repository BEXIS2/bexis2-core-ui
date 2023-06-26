<script lang="ts">

  import type { Link } from "$lib/models/Models";

  import Menu from './menu/Menu.svelte'
 
  export let title = "";
  export let note = "";
  export let links:Link[]=[];

  // active or hide menu
  export let menu:boolean = true;
  export let footer:boolean = true;
 
 </script>
 
 {#if menu}
  <Menu/>
 {/if}

 <div class="px-5 grid gap-5 content-center" >

  <h3 class="h3">{title}</h3>
  {#if note}
    <blockquote class="blockquote">{note}</blockquote>
  {/if}

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
    {#if $$slots.right}
    <div class="w-fixed w-full max-w-min flex-shrink flex-grow-0 px-2">
      <slot name="right" />
    </div>
    {/if}
    
  </div>
  </div>
 



 {#if menu}
   <!-- footer -->
 {/if}
 