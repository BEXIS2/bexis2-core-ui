<script lang="ts">

 import InputContainer from "./InputContainer.svelte";
 
 
 export let id:string = "";
 export let label:string = "";
 export let value:string = "";
 
 export let valid:boolean;
 export let invalid:boolean;
 export let required:boolean;
 export let feedback:string[];
 
 
 </script>
 
 <InputContainer {label} {feedback} {required}>
   <input
   {id}
   class="input variant-form-material" 
   type="number"
   class:input-success="{valid}" 
   class:input-error="{invalid}" 
   bind:value={value} 
   on:input
   />
 </InputContainer>
 