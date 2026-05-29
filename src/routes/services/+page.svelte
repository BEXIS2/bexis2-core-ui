<script lang="ts">
	import NumberInput from '$lib/components/form/NumberInput.svelte';
	import TextInput from '$lib/components/form/TextInput.svelte';


 import {Api}	from '$lib/services/Api';

 let id:number = 1;

	let data: any = null;
	$data;

 async function getMetadataAsJson() {

					const header = { 'Accept': 'application/json' }
					const config = { responseType: 'blob' }

					const res = await Api.get(	`/api/metadata/${id}?simplifiedJson=2`, '', header,config);
					console.log("🚀 ~ getMetadataAsJson ~ res:", res)

					const blob = new Blob([res.data], { type: 'application/json' });
					const url = window.URL.createObjectURL(blob);

					const a = document.createElement('a');
					a.href = url;
					a.download = 'metadata.json';
					document.body.appendChild(a);
					a.click();

					a.remove();
					window.URL.revokeObjectURL(url);
	}

async function getMetadataAsXml() {

					const header = { 'Accept': 'application/xml' }
					const config = { responseType: 'blob' }

					const res = await Api.get(	`/api/metadata/${id}`, '', header,config);
					console.log("🚀 ~ getMetadataAsXml ~ res:", res)

					const blob = new Blob([res.data], { type: 'application/xml' });
					const url = window.URL.createObjectURL(blob);

					const a = document.createElement('a');
					a.href = url;
					a.download = 'metadata.xml';
					document.body.appendChild(a);
					a.click();

					a.remove();
					window.URL.revokeObjectURL(url);
	}


</script>



<div class="p-5 flex flex-col	gap-5">

<h1 class="h1">services</h1>
	<div class="flex gap-2">
		<NumberInput id="id" label="Dataset ID:" bind:value={id} min={1} />

	<button class="btn variant-ghost-primary" on:click={() => getMetadataAsJson()}>Get Metadata as JSON</button>
	<button class="btn variant-ghost-primary" on:click={() => getMetadataAsXml()}>Get Metadata as XML</button>
	</div>

<hr>
{#if data}
	<p>{JSON.stringify(data)}</p>

{/if}

</div>
