<script lang="ts">
	import type { menuItemType } from '../../../models/Page';
	import { goTo } from '../../../services/BaseCaller';

	export let items: menuItemType[];
	export let id: string | undefined = undefined;

	let lastModule = '';
	let first = true;

	// store last module
	function isNewModule(module) {
		if (module === lastModule) {
			return false;
		} else {
			lastModule = module;
			if (first) {
				first = false;
				return false;
			}

			return true;
		}
	}

	function clickFn(item) {
		if (item.Title === 'Log Off') {
			logOffFn();
			return;
		} else {
			goTo(item.Url, item.Internal, item.Target);
		}
	}

	async function logOffFn() {
		// Prepare the body content for the POST request
		const token = (window as any).antiForgeryToken as string | undefined;
		const bodyContent = `__RequestVerificationToken=${token ?? ''}`;

		try {
			const response = await fetch('/Account/logoff', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: bodyContent
			});
			if (response.ok) {
				window.location.href = '/Account/Login';
			} else {
				console.error('Logout failed');
			}
		} catch (error) {
			console.error('Error during logout:', error);
		}
	}


</script>


<div class="sm:bg-white sm:border sm:border-surface-200 sm:rounded-md overflow-y-auto max-h-[500px] min-w-[12rem]">
	{#each items as item}
		{#if isNewModule(item.Module)}<hr class="my-1 border-surface-200" />{/if}

		<div
			class="listbox-item text-md sm:text-sm text-surface-800 px-3 py-1 hover:text-secondary-500 bg-transparent hover:bg-surface-200 cursor-pointer whitespace-nowrap"
		>
			<a href={item.Url} target="{item.Target}" on:click|preventDefault={() => clickFn(item)}>
				{item.Title}
			</a>
		</div>

	{/each}
</div>
