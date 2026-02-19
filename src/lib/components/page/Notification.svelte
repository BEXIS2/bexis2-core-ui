<script lang="ts">
	import { Toast, createToaster } from '@skeletonlabs/skeleton-svelte';
	import { notificationStore } from '$store/pageStores';
	import type { notificationStoreType } from '$models/Models';
	import { notificationType } from '$models/Enums';

	const toaster = createToaster({
		placement: 'top',
	});

	const defaultBtnStyle = "btn-icon btn-icon-sm shadow-md";

	/*let btnStyle: string = defaultBtnStyle;
	$: btnStyle =
		$notificationStore && $notificationStore.btnStyle
			? $notificationStore.btnStyle
			: defaultBtnStyle;*/

	$: $notificationStore, triggerToast();

	function triggerToast() {
		const current: notificationStoreType | undefined = $notificationStore;
		if (!current || !current.message) return;

		const timeout = 4000;
		let type: 'success' | 'warning' | 'error' | 'info';
		let classes = '';

		switch (current.notificationType) {
			case notificationType.success:
				type = 'success';
				classes =
					'bg-success-300 border-solid border-2 border-success-500 shadow-md text-surface-900';
				break;
			case notificationType.warning:
				type = 'warning';
				classes =
					'bg-warning-300 border-solid border-2 border-warning-500 shadow-md text-surface-900';
				break;
			case notificationType.error:
				type = 'error';
				classes =
					'bg-error-300 border-solid border-2 border-error-500 shadow-md text-surface-900';
				break;
			case notificationType.surface:
			default:
				type = 'info';
				classes =
					'bg-surface-300 border-solid border-2 border-surface-500 shadow-md text-surface-900';
				break;
		}

		toaster[type]({
			title: '',
			description: current.message,
			duration: timeout,
			classes
		});
	}
</script>

<Toast.Group {toaster}>
	{#snippet children(toast)}
		<Toast {toast} class={toast.classes}>
			<Toast.Message>
				{#if toast.title}
					<Toast.Title>{toast.title}</Toast.Title>
				{/if}
				<Toast.Description>
					{@html toast.description}
				</Toast.Description>
			</Toast.Message>
			<Toast.CloseTrigger  />
		</Toast>
	{/snippet}
</Toast.Group>
