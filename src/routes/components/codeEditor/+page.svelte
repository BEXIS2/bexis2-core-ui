<script>
	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import CodeEditor from './CodeEditor.svelte';

	const valueHtml = `<html>
  <head>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>`;
	const valueJavascript = `console.log('Hello World!');`;
	const valueJson = `{
  "id": 1,
  "text": "Hello World!"
}`;

	const svelteHtml = `<CodeEditor 
  initialValue={valueHtml} 
  toggle={false} 
  bind:value={newValueHtml} 
/>`;
	const svelteJs = `<CodeEditor
  title="JavaScript"
  initialValue={valueJavascript}
  language="js"
  dark={false}
  styles={{
    '&': {
      borderRadius: '0.5rem',
      width: '100%',
      minHeight: '10rem',
      maxHeight: '20rem'
    },
    '.cm-scroller': {
      borderRadius: '0.5rem'
    }
  }}
  on:save={() => alert("SAVED")}
>
  <p>Custom styles + light mode + description</p>
</CodeEditor>`;
	const svelteJson = `<CodeEditor
  title="JSON"
  initialValue={valueJson}
  language="json"
  on:cancel={() => alert("CANCELLED")}
/>`;

	let newValueHtml = valueHtml;
</script>

<div class="container m-auto">
	<CodeContainer title="HTML (no title, no toggle, no description)" svelte={svelteHtml}
		><CodeEditor initialValue={valueHtml} toggle={false} bind:value={newValueHtml} /></CodeContainer
	>

	<div class="grid grid-cols-1 gap-5 w-full">
		<div class="grow">
			<CodeContainer title="JavaScript" svelte={svelteJs}>
				<CodeEditor
					title="JavaScript"
					initialValue={valueJavascript}
					language="js"
					dark={false}
					styles={{
						'&': {
							borderRadius: '0.5rem',
							width: '100%',
							minHeight: '10rem',
							maxHeight: '20rem'
						},
						'.cm-scroller': {
							borderRadius: '0.5rem'
						}
					}}
					on:save={() => alert('SAVED')}
				>
					<p>Custom styles + light mode + description</p>
				</CodeEditor>
			</CodeContainer>
		</div>
		<div class="grow">
			<CodeContainer title="JSON" svelte={svelteJson}>
				<CodeEditor
					title="JSON"
					initialValue={valueJson}
					language="json"
					on:cancel={() => alert('CANCELLED')}
				/>
			</CodeContainer>
		</div>
	</div>
</div>
