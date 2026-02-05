<script lang="ts">
	export let padding: string | undefined = undefined;
	export let open: boolean | undefined = undefined;
</script>

<div class={`accordion-item ${padding ?? ''}`}>
	<slot name="summary" />
	<div class="accordion-content">
		<slot name="content" />
	</div>
</div>
