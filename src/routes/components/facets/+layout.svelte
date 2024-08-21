<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<AppShell slotSidebarLeft="flex-none bg-surface-50-900-token lg:w-auto relative">
	<slot id="pageSlot" />
</AppShell>
