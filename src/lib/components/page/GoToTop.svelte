<script>

 import Fa from 'svelte-fa';
 import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

 export let showAtPixel = 1000;

 let scrollHeight = 0;

 const gotoTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
 };

 $: showGotoTop = scrollHeight > showAtPixel;
</script>

{#if showGotoTop}
 <button
 id="gotToTop"
 title="Go to top"
 class="chip variant-filled-warning fixed bottom-5 right-20 shadow-md"
 on:click={gotoTop}
 ><Fa icon={faAngleUp}/></button >
{/if}

<svelte:window bind:scrollY={scrollHeight} />
