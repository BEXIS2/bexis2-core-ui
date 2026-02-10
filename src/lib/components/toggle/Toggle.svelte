<script lang="ts">
 import Fa from 'svelte-fa';

import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import type{ CssClasses } from '@skeletonlabs/skeleton-svelte';

// Props
	/** Customize the `title` attribute for the component.  */
	export let title = 'Toggle light or dark mode.';
	// Props (styles)
	/** Provide classes to set the light background color. */
	export let bgLight: CssClasses = 'bg-surface-50';
	/** Provide classes to set the dark background color. */
	export let bgDark: CssClasses = 'bg-surface-900';
	/** Provide classes to set the light SVG fill color. */
	export let fillLight: CssClasses = 'fill-surface-50';
	/** Provide classes to set the dark SVG fill color. */
	export let fillDark: CssClasses = 'fill-surface-900';
	/** Provide classes to set width styles. */
	export let width: CssClasses = 'w-12';
	/** Provide classes to set height styles. Should be half of width. */
	export let height: CssClasses = 'h-6';
	/** Provide classes to set ring styles. */
	export let ring: CssClasses = 'ring-[1px] ring-surface-500/30';
	/** Provide classes to set border radius styles. */
	export let rounded: CssClasses = 'rounded-base';

// Classes
const cTransition = `transition-all duration-200`;
const cTrack = 'cursor-pointer';
const cThumb = 'aspect-square scale-[0.8] flex justify-center items-center';
const cIcon = 'w-[70%] aspect-square';

// State
$: trackBg = mode === true ? bgLight : bgDark;
$: thumbBg = mode === true ? bgDark : bgLight;
$: thumbPosition = mode === true ? 'translate-x-full' : '';
$: iconFill = mode === true ? fillLight : fillDark;

$: classesTrack = `${cTrack} ${cTransition} ${width} ${height} ${ring} ${rounded} ${trackBg} ${$$props.class ?? ''}`;
$: classesThumb = `${cThumb} ${cTransition} ${height} ${rounded} ${thumbBg} ${thumbPosition}`;


let mode = true;
$:mode;

</script>

<div
	class="lightswitch-track {classesTrack}"
	on:click={()=>mode=!mode}
	on:click
	on:keydown={()=>mode=!mode}
	on:keydown
	on:keyup
	on:keypress
	role="switch"
	aria-label="Light Switch"
 aria-checked={mode}
	title="xyz"
	tabindex="0"
>
	<!-- Thumb -->
	<div class="lightswitch-thumb {classesThumb}">
		<!-- SVG -->
  {#if mode}
  <Fa icon={faPen} color="white" />
  {:else}
  <Fa icon={faTrash} />
  {/if}
	</div>
</div>