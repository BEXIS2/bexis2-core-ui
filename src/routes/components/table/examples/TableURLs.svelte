<script lang="ts">
	import CustomCodeContainer from '../components/CustomCodeContainer.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import UrlCell from '../components/URLCell.svelte';
	import { websitesStore } from '../data/data';
	import { websitesHTML, websitesStoreCode, websitesUrlCellHTML } from '../data/codeBlocks';
	import type { Website } from '../data/data';
	import type { TableConfig } from '$lib/models/Models';

	const websitesConfig: TableConfig<Website> = {
		id: 'websites',
		data: websitesStore,
		toggle: true,
		fitToScreen: false,
		columns: {
			URL: {
				header: 'URL',
				instructions: {
					renderComponent: UrlCell,
					toFilterableValueFn: (url: URL) => url.toString()
				},
				disableSorting: true
			}
		}
	};
	const websitesTabs = [
		{ name: 'Svelte', language: 'html', code: websitesHTML },
		{ name: 'Data', language: 'typescript', code: websitesStoreCode },
		{ name: 'URLCell.svelte', language: 'html', code: websitesUrlCellHTML }
	];
</script>

<div id="URLs">
	<CustomCodeContainer title="URLs" tabs={websitesTabs}>
		<Table config={websitesConfig} />
	</CustomCodeContainer>
</div>
