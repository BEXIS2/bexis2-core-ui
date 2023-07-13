<script lang="ts">
	import { helpStore } from '$store/pageStores';
	import type { helpItemType, helpStoreType } from '$models/Models';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faQuestion } from '@fortawesome/free-solid-svg-icons';

	//popup
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	//import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	//import { storePopup } from '@skeletonlabs/skeleton';
	import delay from 'delay';

	export let active: boolean = false;

	let hs: helpStoreType;
	$: helpStore.subscribe((value) => {
		hs = value;
	});
	let helpItem: helpItemType = { id: undefined, name: '', description: '' };
	$: helpItem =
		active === true
			? hs.itemId == ''
				? { id: undefined, name: '', description: '' }
				: hs.helpItems.find((h) => h.id === hs.itemId)!
			: { id: undefined, name: '', description: '' };

	const helpClick: PopupSettings = {
		event: 'click',
		target: 'helpTarget',
		placement: 'top',
		state: (s) => {
			if (s != true) {
				resetItemId();
			}
		}
	};

	async function resetItemId() {
		await delay(100);
		helpStore.resetItemId();
	}
</script>

{#if active}
	<button
		id="helpButton"
		class="chip variant-filled-warning fixed bottom-5 right-10 shadow-md"
		use:popup={helpClick}><Fa icon={faQuestion} /></button
	>

	<div
		class="card bg-primary-300 border-solid border-2 border-primary-500 shadow-md"
		data-popup="helpTarget"
	>
		{#if helpItem && helpItem.id}
			<div class="p-5 w-96 space-y-4" id={'helpPopup.' + helpItem.id}>
				<h3 class="h3">{helpItem.name}</h3>
				<p>{@html helpItem.description}</p>
				{#if helpItem.link}
					<p><a class="anchor" href={helpItem.link}>... read more</a></p>
				{/if}
			</div>
		{:else}
			<div class="p-5 w-96 space-y-4" id="helpPopup">
				<h3 class="h3">Help</h3>
				<p>Hover over the Element, you like to know more about.</p>
			</div>
		{/if}
		<div class="arrow variant-filled-primary" />
	</div>
{/if}
