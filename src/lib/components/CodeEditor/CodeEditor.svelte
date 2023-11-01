<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import CodeMirror from 'svelte-codemirror-editor';
	import Fa from 'svelte-fa/src/fa.svelte';
	import Linter from 'eslint4b-prebuilt';
	import { html } from '@codemirror/lang-html';
	import { javascript, esLint } from '@codemirror/lang-javascript';
	import { lintGutter, linter } from '@codemirror/lint';
	import { json, jsonParseLinter } from '@codemirror/lang-json';
	import { oneDark } from '@codemirror/theme-one-dark';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import { faMoon, faSave, faSun } from '@fortawesome/free-regular-svg-icons';
	import { faArrowRotateLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
	import type { ThemeSpec } from 'svelte-codemirror-editor';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import type { Extension } from '@codemirror/state';

	export let id: string;
	export let title = '';
	export let initialValue = '';
	export let value = initialValue;
	export let language = 'html';
	export let dark = true;
	export let toggle = true;
	export let actions = true;
	export let isValid = false;
	export let styles: ThemeSpec = {
		'&': {
			borderRadius: '0.5rem',
			width: '100%'
		},
		'.cm-scroller': {
			borderRadius: '0.5rem'
		}
	};

	const dispatch = createEventDispatcher();

	const modal: ModalSettings = {
		type: 'confirm',
		title: 'Reset',
		body: 'Unsaved changes will be lost. Are you sure you want to continue?',
		response: (r: boolean) => (r ? (value = initialValue) : null)
	};

	const extensions: Extension[] =
		language === 'js'
			? [linter(esLint(new Linter())), lintGutter()]
			: language === 'json'
			? [linter(jsonParseLinter()), lintGutter()]
			: [];

	const isValidJSON = (str: string) => {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	};

	const isValidJS = (str: string) => {
		try {
			new Function(str);
		} catch (e) {
			return false;
		}
		return true;
	};

	$: isValid =
		language === 'json' ? isValidJSON(value) : language === 'js' ? isValidJS(value) : true;
</script>

<div class="grid items-stretch justify-stretch gap-1">
	<label class="label" for="{id}-editor" id="{id}-title">
		<span>{title}</span>
	</label>
	<slot id="{id}-description" />
	<div class="grid gap-1 w-full h-full">
		<div class="rounded-lg shadow-lg w-full overflow-auto" id="{id}-editor">
			<CodeMirror
				bind:value
				lang={language === 'html'
					? html({ selfClosingTags: true })
					: language === 'js'
					? javascript()
					: json()}
				theme={dark ? oneDark : null}
				class="flex w-full"
				{styles}
				{extensions}
			/>
		</div>
	</div>

	<div class="flex justify-between gap-2 items-center mt-3" id="{id}-footer">
		<div class="flex gap-2">
			<button
				class="btn variant-filled-warning"
				id="{id}-reset"
				on:click|preventDefault={() => modalStore.trigger(modal)}
				><Fa icon={faArrowRotateLeft} /></button
			>{#if toggle}
				<button
					class="btn border"
					class:bg-slate-700={dark}
					class:bg-white={!dark}
					id="{id}-toggle"
					on:click|preventDefault={() => (dark = !dark)}
				>
					{#if dark}
						<Fa icon={faMoon} color="white" />
					{:else}
						<Fa icon={faSun} color="black" />
					{/if}
				</button>
			{/if}
		</div>

		{#if actions}
			<div class="flex gap-2">
				<button
					class="btn variant-filled-warning"
					id="{id}-cancel"
					on:click|preventDefault={() => dispatch('cancel')}><Fa icon={faXmark} /></button
				>
				<button
					class="btn variant-filled-primary"
					id="{id}-save"
					disabled={!isValid}
					on:click|preventDefault={() => dispatch('save')}><Fa icon={faSave} /></button
				>
			</div>
		{/if}
	</div>
</div>

<Modal />
