<script lang="ts">

 import { CodeBlock, Tab, TabGroup } from '@skeletonlabs/skeleton';


 export let svelte;
 export let csharp;
 export let model;
 export let json;
 export let xml;

 export let title;
 export let codeonly = false;

 let tabSet: number = 0;

 console.log(json)

</script>


 <div  class="py-3">
  {#if title}
    <h2>{title}</h2>
  {/if} <slot name="info" />
 </div>

 <div >
  <slot name="external" ></slot>
 </div>

 <div class="flex space-x-20">

 <slot/>


 <TabGroup>
  {#if svelte}
   <Tab bind:group={tabSet} name="svelte" value={0}>(Svelte)</Tab>
  {/if}
  {#if json}
   <Tab bind:group={tabSet} name="json" value={1}>(Json)</Tab>
  {/if}
  {#if csharp}
   <Tab bind:group={tabSet} name="csharp" value={2}>(csharp)</Tab>
  {/if}
  {#if model}
  <Tab bind:group={tabSet} name="model" value={3}>(model)</Tab>
  {/if}
  {#if xml}
   <Tab bind:group={tabSet} name="xml" value={4}>(xml)</Tab>
  {/if}

  <!-- Tab Panels --->
  <svelte:fragment slot="panel">
   {#if tabSet === 0} 
    <CodeBlock language="svelte" code={svelte}></CodeBlock>
   {:else if tabSet === 1} 
    <CodeBlock language="json" code={json}></CodeBlock>
   {:else if tabSet === 2} 
    <CodeBlock language="csharp" code={csharp}></CodeBlock>
   {:else if tabSet === 3} 
    <CodeBlock language="csharp" code={model}></CodeBlock>
   {:else if tabSet === 4} 
    <CodeBlock language="xml" code={model}></CodeBlock>
   {/if}
  </svelte:fragment>
 </TabGroup>

</div>