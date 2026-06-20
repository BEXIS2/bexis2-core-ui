<script lang="ts">
	import { helpStore } from '$store/pageStores';
	import Fa from 'svelte-fa';
	import { faQuestion } from '@fortawesome/free-solid-svg-icons';

	export let id: string = '';
	export let label: string = '';
	export let required: boolean;
	export let feedback: string[];
	export let help: boolean = false;
	export let description : string = '';
	export let showDescription: boolean = false;

	function onMouseOver() {
		if (help) {
			helpStore.show(id);
		}
	}

	function onMouseOut() {}
</script>

<div
	id="{id}-container"
	role="region"
	on:mouseover={onMouseOver}
	on:focus={onMouseOver}
	on:mouseout={onMouseOut}
	on:blur={onMouseOut}
>
	<label class="label w-full flex" for="{id}">
		<span class="grow"
			>{label}
			{#if required} <span class="text-xs text-red-600">*</span> {/if}
		</span>
		{#if description}
				<button class="badge " on:click={()=>showDescription = !showDescription}><Fa icon={faQuestion} /></button>
		{/if}
	</label>


	{#if description && showDescription}
		<div	class="card text-sm text-gray-500 p-2 mb-2">{@html description}</div>
	{/if}
	<slot />
	<div class="min-h-5">
	<span class="text-xs text-error-600 ">
	{#if feedback}
			<ul>
				{#each feedback as message}
					<li>{message}</li>
				{/each}
			</ul>
			{/if}
		</span>
	</div>
</div>
