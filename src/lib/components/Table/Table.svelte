<script lang="ts">
	import Table from '$lib/components/Table/TableContent.svelte';
	import type { TableConfig } from '$models/Models';

	export let config: TableConfig<any>;
	let remountKey = 0;
	let didInitialColumnsRemount = false;

	const normalizeColumns = (cols: unknown) => {
		if (!cols || typeof cols !== 'object') return '';
		const c = cols as Record<string, unknown>;
		const keys = Object.keys(c).sort();
		return JSON.stringify(keys.map((k) => [k, c[k]]));
	};

	const onFetch = (event) => {
		const payload = event.detail;
		const nextColumns = payload?.columns ?? payload;
		const nextCount = Number(payload?.count ?? 0);
		const before = normalizeColumns((config as any)?.columns);
		const after = normalizeColumns(nextColumns);
		config = {
			...config,
			columns: nextColumns,
			...(nextCount > 0 ? { __initialServerCount: nextCount } : {})
		};
		if (!didInitialColumnsRemount && before === '' && after !== '') {
			remountKey += 1;
			didInitialColumnsRemount = true;
		}
	};

	if (typeof BigInt !== 'undefined' && !BigInt.prototype.toJSON) {
		BigInt.prototype.toJSON = function () {
			return this.toString();
		};
	}
</script>

{#key remountKey}
	<Table
		{config}
		on:fetch={onFetch}
		on:action
	/>
{/key}
