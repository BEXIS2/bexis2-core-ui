<script>
	import Page from '$lib/components/page/Page.svelte';
</script>

<Page title="Code Convertions">
	<h2 class="h2">Naming Convertions in Frontend</h2>

	<div class="table-container pt-5">
		<table class="table table-compact bg-tertiary-200">
			<thead>
				<tr class="bg-primary-300">
					<th> Type </th>
					<th> Affiliations </th>
					<th> Rule </th>
					<th> Example </th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Svelte Components</td>
					<td>File</td>
					<td>Pascal</td>
					<td>MyComponent.svelte</td>
				</tr>
				<tr>
					<td>Folder</td>
					<td>Folder</td>
					<td>camel</td>
					<td>lib/components/myComponents/...</td>
				</tr>
				<tr>
					<td>Model</td>
					<td>File</td>
					<td>Pascal</td>
					<td>lib/models/EditModel.ts</td>
				</tr>
				<tr>
					<td>Stores</td>
					<td>File</td>
					<td>camel +Store[s]</td>
					<td>lib/stores/pageStore.ts</td>
				</tr>
				<tr>
					<td>Services</td>
					<td>File</td>
					<td>Pascal</td>
					<td>lib/services/Api.ts</td>
				</tr>
				<tr>
					<td>Stores</td>
					<td>Entity</td>
					<td>camel + Store</td>
					<td>menuStore</td>
				</tr>
				<tr>
					<td>Model</td>
					<td>Entity</td>
					<td>Pascal + Model</td>
					<td>EditModel</td>
				</tr>
				<tr>
					<td>Type</td>
					<td>Entity</td>
					<td>camel + Type</td>
					<td>fileInfoType</td>
				</tr>
				<tr>
					<td>Enum</td>
					<td>Entity</td>
					<td>camel</td>
					<td>position</td>
				</tr>
				<tr>
					<td>Function</td>
					<td>Function</td>
					<td>camel</td>
					<td>goTo()</td>
				</tr>
			</tbody>
		</table>
	</div>
</Page>
