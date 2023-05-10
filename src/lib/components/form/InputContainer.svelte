<script lang="ts">

 export let label:string = "";
 export let required:boolean;
 export let feedback:[];
 
 
 </script>
 
 <label class="label">
  <span>{label} 
   {#if required} <span class="text-sm text-red-600">*</span> {/if}
  </span>
   <slot/>
   {#if feedback}
    <span class="text-sm text-error-600">
      <ul>
        {#each feedback as message}
          <li>{message}</li>
        {/each}
      </ul>
    </span>
   {/if}
 </label>
 
 
 