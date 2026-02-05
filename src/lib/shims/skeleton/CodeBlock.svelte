<script lang="ts">
	export let language: string | undefined;
	export let code: string | undefined;
</script>

<pre class={`code-block ${($$props as any).class ?? ''}`}>
	<code class={language ? `language-${language}` : ''}>
		{#if code}
			{code}
		{:else}
			<slot />
		{/if}
	</code>
</pre>
