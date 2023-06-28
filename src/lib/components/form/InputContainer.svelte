<script lang="ts">
	import { HelpStore } from '$store/pagestore'

	export let id: string = '';
	export let label: string = '';
	export let required: boolean;
	export let feedback: string[];
	export let help:boolean=false;

	let active:boolean = false;

function onMouseOver()
{
	
	console.log("onmouseover",id)
	if(help && !active)
	{
			HelpStore.show(id);
	}
 
	setTimeout(setactivate, 10000);
}

function setactivate(){ active = true;}

function onMouseOut()
{	
	
		if(help)
		{
				HelpStore.hide();
		}
		active = false;
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
