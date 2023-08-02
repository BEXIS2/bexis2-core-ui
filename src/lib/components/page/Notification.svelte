<script lang="ts">
	import { Toast } from '@skeletonlabs/skeleton';
	import { notificationStore } from '$store/pageStores';

	let btnStyle: string;
	$: btnStyle =
		$notificationStore === undefined || $notificationStore.btnStyle === undefined
			? notificationStore.getBtnStyle()
			: $notificationStore.btnStyle;
</script>

<Toast position="t" buttonDismiss={btnStyle} />
