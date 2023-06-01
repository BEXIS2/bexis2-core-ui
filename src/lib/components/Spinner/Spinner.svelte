<script lang="ts">
 import { Position } from "$lib/models/Enums";

	export let textCss = "text-secundary-500"
	export let label = "";
	export let position:Position = Position.start
	export let size:number=8;
</script>

<div class="flex justify-{position} items-{position} h-full w-full gap-5 pt-2">
<div
	class="inline-block h-{size} w-{size} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] {textCss}"
	role="status"
>
	<span
		class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
		>Loading...</span
	>
</div>
<span>{label}</span>
</div>

