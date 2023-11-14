<script lang="ts">
	import { onMount } from 'svelte';
	import { Toast, getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { notificationStore } from '$store/pageStores';
	import type { notificationStoreType } from '$models/Models';
	import { notificationType } from '$models/Enums';

	const toastStore = getToastStore();

	let btnStyle: string;
	$: btnStyle =
		$notificationStore === undefined || $notificationStore.btnStyle === undefined
			? notificationStore.getBtnStyle()
			: $notificationStore.btnStyle;

	$: $notificationStore, triggerToast();

	onMount(() => {
		toastStore.clear();
	});

	function triggerToast() {
		toastStore.clear();

		const timeout = 30000;
		let classes = '';

		if ($notificationStore.message != undefined && $notificationStore.message != '') {
			switch ($notificationStore.notificationType) {
				case notificationType.success:
					classes =
						'bg-success-300 border-solid border-2 border-success-500 shadow-md text-surface-900';
					break;
				case notificationType.warning:
					classes =
						'bg-warning-300 border-solid border-2 border-warning-500 shadow-md text-surface-900';
					break;
				case notificationType.error:
					classes =
						'bg-error-300 border-solid border-2 border-error-500 shadow-md text-surface-900';
					break;
				case notificationType.surface:
					classes =
						'bg-surface-300 border-solid border-2 border-surface-500 shadow-md text-surface-900';
					break;
			}

			const notificationToast: ToastSettings = {
				classes: classes,
				message: $notificationStore.message,
				timeout: timeout,
				callback: () => {
					toastStore.clear();
				}
			};

			toastStore.trigger(notificationToast);
		}
	}
</script>

<Toast position="t" buttonDismiss={btnStyle} />
