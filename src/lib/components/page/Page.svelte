<script lang="ts">

  import type { Link } from "$lib/models/Models";
 
  export let title = "";
  export let note = "";
  export let links:Link[]=[];
 
 </script>
 
 <div class="px-5 grid gap-5" >
  <h1>{title}</h1>
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
 