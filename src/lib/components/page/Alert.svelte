<script lang="ts">
	import Fa from 'svelte-fa';

	import { faXmark } from '@fortawesome/free-solid-svg-icons';

	import { fade } from 'svelte/transition';

	export let title: string = '';
	export let message: string = '';
	export let cssClass: string = '';
	export let deleteBtn: boolean = true;

	$: show = true;
</script>

{#if show}
	<aside class="alert {cssClass}" transition:fade|local={{ duration: 100 }}>
		<!-- Icon -->
		<!-- <div>(icon)</div> -->
		<!-- Message -->
		<div class="alert-message">
			{#if title}
				<h3 class="h3">{title}</h3>
			{/if}
			<p>
				{message}
				<slot />
			</p>
		</div>
		<!-- Actions -->
		<div class="alert-actions">
			<slot name="actions" />

			{#if deleteBtn}
				<button class="btn hover:text-primary-100" on:click={() => (show = false)}>
					<Fa icon={faXmark} />
				</button>
			{/if}
		</div>
	</aside>
{/if}
