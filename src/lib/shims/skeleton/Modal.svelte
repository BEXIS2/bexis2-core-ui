<script lang="ts">
	import { onDestroy } from 'svelte';
	import { getModalStore, type ModalSettings } from './stores';

	let settings: ModalSettings | null = null;

	const modalStore = getModalStore();
	const unsubscribe = modalStore.subscribe((value) => {
		settings = value;
	});

	onDestroy(unsubscribe);

	const close = () => {
		modalStore.close();
	};

	const handleConfirm = (result: boolean) => {
		if (settings && typeof settings.response === 'function') {
			try {
				settings.response(result);
			} catch (error) {
				console.error('Modal response handler error', error);
			}
		}
		close();
	};
</script>

{#if settings}
	<div class="fixed inset-0 flex items-center justify-center bg-black/40 z-50" on:click={close}>
		<div
			class="bg-white dark:bg-surface-700 rounded shadow-lg max-w-lg w-full p-4"
			on:click|stopPropagation
		>
			{#if settings.title}
				<h2 class="text-lg font-semibold mb-2">{settings.title}</h2>
			{/if}

			{#if settings.type === 'component' && settings.component}
				{#if settings.body}
					<p class="mb-2">{settings.body}</p>
				{/if}
				<svelte:component this={settings.component.ref} {...settings.component.props} />
			{:else}
				{#if settings.body}
					<p>{settings.body}</p>
				{/if}
				<slot />
			{/if}

			<div class="flex justify-end gap-2 mt-4">
				{#if settings.type === 'confirm'}
					<button
						type="button"
						class="btn variant-filled-secondary"
						on:click={() => handleConfirm(false)}
					>
						Cancel
					</button>
					<button
						type="button"
						class="btn variant-filled-primary"
						on:click={() => handleConfirm(true)}
					>
						OK
					</button>
				{:else}
					<button
						type="button"
						class="btn variant-filled-primary"
						on:click={close}
					>
						Close
					</button>
				{/if}
			</div>
		</div>
	</div>
{/if}
