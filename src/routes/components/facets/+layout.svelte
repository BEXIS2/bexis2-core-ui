<script lang="ts">
		import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<AppShell slotSidebarLeft="flex-none bg-surface-50-950 lg:w-auto relative">
	<slot id="pageSlot" />
</AppShell>
