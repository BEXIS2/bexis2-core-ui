<script lang="ts">
	export let value: any;
	export let row: any;
	export let dispatchFn: any;

	const changeHandler = (e: Event) => {
		const target = e.target as HTMLInputElement;
		dispatchFn({ type: 'MembershipChange', value: target.checked, row });
	};
</script>

<input type="checkbox" on:change={changeHandler} checked={value} />
