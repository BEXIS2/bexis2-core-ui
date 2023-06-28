<script lang="ts">
	import { HelpStore } from '$store/pagestore'

	export let id: string = '';
	export let label: string = '';
	export let required: boolean;
	export let feedback: string[];
	export let help:boolean=false;

function onMouseOver()
{
	
	if(help)
	{
			HelpStore.show(id);
	}

}


function onMouseOut()
{	
		if(help)
		{
				HelpStore.hide();
		}
}

</script>
<div {id} on:mouseover={onMouseOver} on:mouseout={onMouseOut}>
<label class="label">
	<span
		>{label}
		{#if required} <span class="text-sm text-red-600">*</span> {/if}
	</span>
	<slot />
	{#if feedback}
		<span class="text-sm text-error-600">
			<ul>
				{#each feedback as message}
					<li>{message}</li>
				{/each}
			</ul>
		</span>
	{/if}
</label>
</div>
