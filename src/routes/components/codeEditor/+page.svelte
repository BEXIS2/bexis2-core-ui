<script>
	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import CodeEditor from '$lib/components/CodeEditor/CodeEditor.svelte';

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
  id="htmlExample"
  initialValue={valueHtml} 
  toggle={false} 
  bind:value={newValueHtml} 
/>`;
	const svelteJs = `<CodeEditor
  id="jsExample"
  title="JavaScript"
  actions={false}
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
  <p>Custom styles + light mode + description + no action buttons</p>
</CodeEditor>`;
	const svelteJson = `<CodeEditor
  id="jsonExample"
  title="JSON"
  initialValue={valueJson}
  language="json"
  on:cancel={() => alert("CANCELLED")}
/>`;

	let newValueHtml = valueHtml;
</script>

<div class="container m-auto py-5">
	<h1 class="h1 font-semibold text-6xl">CodeEditor</h1>

	<div class="card p-5 bg-tertiary-50 mt-3">
		<div class="flex items-center h3 gap-5">
			<p class="font-semibold text-primary-500">Codemirror 6:</p>
			<a class="underline text-secondary-500" href="https://codemirror.net/"
				>https://codemirror.net/</a
			>
		</div>

		<div class="flex items-center h3 gap-5">
			<p class="font-semibold text-primary-500">svelte-codemirror-editor:</p>
			<a
				class="underline text-secondary-500"
				href="https://github.com/touchifyapp/svelte-codemirror-editor"
				>https://github.com/touchifyapp/svelte-codemirror-editor</a
			>
		</div>
	</div>

	<CodeContainer title="HTML (no title, no toggle, no description)" svelte={svelteHtml}
		><CodeEditor
			id="htmlExample"
			initialValue={valueHtml}
			toggle={false}
			bind:value={newValueHtml}
		/></CodeContainer
	>

	<div class="grid grid-cols-1 gap-5 w-full">
		<div class="grow">
			<CodeContainer title="JavaScript" svelte={svelteJs}>
				<CodeEditor
					id="jsExample"
					title="JavaScript"
					actions={false}
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
					<p>Custom styles + light mode + description + no action buttons</p>
				</CodeEditor>
			</CodeContainer>
		</div>
		<div class="grow">
			<CodeContainer title="JSON" svelte={svelteJson}>
				<CodeEditor
					id="jsonExample"
					title="JSON"
					initialValue={valueJson}
					language="json"
					on:cancel={() => alert('CANCELLED')}
				/>
			</CodeContainer>
		</div>
	</div>
</div>
