<script lang="ts">
	import { ListBox, ListBoxItem, TreeViewItem } from '@skeletonlabs/skeleton';
	import type { menuItemType } from '../../../models/Page';
	import { goTo } from '../../../services/BaseCaller';

	export let items: menuItemType[];

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

	function clickFn(item)
	{
		if(item.Title =="Log Off")
		{
					logOffFn();
			return;
		}
		else{
				goTo(item.Url, item.Internal, item.Target);	
		}
	}

	
	async function logOffFn() {

		 console.log('logoff');
				// Prepare the body content for the POST request
			

			let bodyContent = '__RequestVerificationToken='+ window.antiForgeryToken;

				try {
									const response = await fetch('/Account/logoff', {
													method: 'POST',
													credentials: 'include', // Include cookies for authentication
													headers: {
																	'Content-Type': 'application/x-www-form-urlencoded'
													},
													body:bodyContent
									});
									if (response.ok) {
													// Redirect to login page after logout
													window.location.href = '/Account/Login'; 
									} else {
													console.error('Logout failed');
									}
					} catch (error) {
									console.error('Error during logout:', error);
					}
			}


</script>

<ListBox class="sm:bg-white sm:border overflow-y-auto max-h-[500px]">
	{#each items as item}
		{#if isNewModule(item.Module)}<hr class="text-surface-800" />{/if}

		<ListBoxItem
			class="text-md sm:text-sm text-surface-800 py-1 hover:text-secondary-500 bg-transparent hover:bg-surface-200"
			bind:group={item.Title}
			name="medium"
			value={item.Title}
	
		>
			<a href={item.Url} target="{item.Target}">{item.Title}</a>
		</ListBoxItem>

	{/each}
</ListBox>
