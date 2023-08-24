<script lang="ts">
	import { helpStore } from '$store/pageStores';

	export let id: string = '';
	export let label: string = '';
	export let required: boolean;
	export let feedback: string[];
	export let help: boolean = false;

	function onMouseOver() {
		if (help) {
			helpStore.show(id);
		}
	}

	function onMouseOut() {}
</script>

<div id="{id}-container" on:mouseover={onMouseOver} on:mouseout={onMouseOut}>
	<label class="label">
		<span
			>{label}
			{#if required} <span class="text-sm text-red-600">*</span> {/if}
		</span>
		<slot />
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
</div>
