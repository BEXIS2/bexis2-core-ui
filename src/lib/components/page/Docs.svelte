<script lang="ts">
	import Fa from 'svelte-fa';
	import { faQuestion, faBook } from '@fortawesome/free-solid-svg-icons';
	import { goTo } from '$services/BaseCaller';

	// links
	import type { linkType } from '$lib/models/Models';
	export let links: linkType[] = [];

	// popup for note
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let note: string;

	//popup
	const noteSettings: PopupSettings = {
		event: 'click',
		target: 'noteTarget',
		placement: 'bottom'
	};
</script>

<div class="text-right p-2">
	{#if note}
		<span class="chip variant-soft hover:variant-filled" use:popup={noteSettings}>
			<span><Fa icon={faQuestion} /></span>
		</span>

		<div
			class="card p-4 variant-filled-primary w-60 z-50 text-left shadow-md"
			data-popup="noteTarget"
		>
			{note}
		</div>
	{/if}

	{#each links as link}
		<span role="button" tabindex="0" title="link" class="chip variant-soft hover:variant-filled" on:click={() => goTo(link.url, false)} on:keypress={() => goTo(link.url, false)}>
			<span>
				{#if link.label.toLowerCase()=='manual'}
					<Fa icon={faBook} />
				{:else}
					{link.label}
				{/if}
			</span>
		</span>
	{/each}
</div>
