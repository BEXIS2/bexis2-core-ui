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
  <h1 class="h1">{title}</h1>
  {#if note}
    <blockquote class="blockquote">{note}</blockquote>
  {/if}

  <slot name="description" />
 
  {#if links.length>0}
  <div class="py-5">
    {#each	links as link}
     <a class="chip variant-ringed" href={link.url}>{link.label}</a>
    {/each}
  </div>
  {/if}
  <slot/>
 </div>

 {#if menu}
   <!-- footer -->
 {/if}
 