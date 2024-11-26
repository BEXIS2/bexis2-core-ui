<script lang="ts">
	import Table from '$lib/components/Table/Table.svelte';
	import type { TableConfig } from '$lib/models/Models';
	import { writable } from 'svelte/store';

	type ShippingInfo = {
		id: number;
		address: string;
	};

	const data = writable<ShippingInfo[]>([
		{
			id: 1,
			address: 'New York, New York, 5th Avenue, 10001, 123456'
		},
		{
			id: 2,
			address: 'Los Angeles, California, Hollywood Boulevard, 90028, 654321'
		},
		{
			id: 3,
			address: 'Chicago, Illinois, Michigan Avenue, 60601, 987654'
		},
		{
			id: 4,
			address: '"Houston", Texas, NASA Parkway, 77058, 456789'
		},
		{
			id: 5,
			address: '"Philadelphia, Pennsylvania, Market Street, 19103, 321654"'
		}
	]);

	const addressesConfig: TableConfig<ShippingInfo> = {
		id: 'shippingAddresses',
		data,
		resizable: 'both',
		toggle: true,
		exportable: true,
		fitToScreen: false
	};
</script>

<div id="test">
	<Table config={addressesConfig} />
</div>
