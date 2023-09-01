<script lang="ts">
	import type {
		fileUploaderModel,
		fileInfoType,
		filesType,
		fileUploaderType
	} from '../../models/Models.js';

	import DropZone from 'svelte-file-dropzone/Dropzone.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';

	import Spinner from '../page/Spinner.svelte';
	import { createEventDispatcher } from 'svelte';
	import { faTrash } from '@fortawesome/free-solid-svg-icons';
	import { faSave } from '@fortawesome/free-regular-svg-icons';
	import { faFileUpload } from '@fortawesome/free-solid-svg-icons';

	import { Api } from '../../services/Api.js';

	export let id = 0;
	export let version = 1;

	import { onMount } from 'svelte';

	// export let description="";
	// export let status=0;

	//action to load fileupload model
	export let start = '';
	//action to save selected file
	export let submit = '';

	export let context = '';

	export let data: fileUploaderType | undefined;

	$: model = data;
	$: submitBt = 'submit';

	let maxSize = 0;

	const dispatch = createEventDispatcher();

	let fx: fileInfoType[];

	let files: filesType = { accepted: [], rejected: [] };
	$: files;

	onMount(async () => {
		//console.log('fileupload - OnMount', data);

		if (!data) {
			load();
		} else {
			model = data;
		}

		if (model) {
			submitBt += context;
			maxSize = model.maxSize * 1024 * 1024;
		}
	});

	// load modal from server
	async function load() {
		let url = start + '?id=' + id + '&version=' + version;

		// load menu froms server
		const res = await Api.get(url);
		model = await res.data();

		console.log('fileupload', model);
	}

	function handleFilesSelect(e: any) {
		//console.log('handleFilesSelect', e);
		console.log('files', files);

		const { acceptedFiles, fileRejections } = e.detail;

		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];

		//console.log('acceptedFiles', acceptedFiles);
		console.log('files.accepted', files.accepted);

		if (fileRejections.length > 0) {
			//alert("the dropped file is not supported");
			//console.log('the dropped file is not supported.');
			console.log(files.rejected);

			let messages = [''];

			for (let index = 0; index < fileRejections.length; index++) {
				const element = fileRejections[index];
				messages.push(getErrorMessage(element));
			}

			//console.log(messages);

			dispatch('error', { messages });
			//list up the errors somewhere
			files.rejected = [];
		}

		if (acceptedFiles.length > 0) {
			document.getElementById(submitBt)?.click();
		}
	}

	function getErrorMessage(rejected) {
		let message = '';
		message = rejected.file.path + ' : ';
		let errors = rejected.errors;
		for (let index = 0; index < errors.length; index++) {
			const error = errors[index];
			message += error.message;
		}

		return message;
	}

	async function handleSubmit() {
		//console.log('SUBMIT');

		dispatch('submit');

		let url = submit + '?id=' + id;

		// //console.log(model);
		// //console.log(url);
		//console.log('SUBMIT');

		if (files.accepted.length > 0) {
			//console.log(files);

			const formData = new FormData();
			formData.append('files', '123');
			// Looping over all files and add it to FormData object
			for (var i = 0; i < files.accepted.length; i++) {
				formData.append(files.accepted[i].name, files.accepted[i]);
			}

			const response = await Api.post(url, formData);

			if (response.status == 200) {
				dispatch('submited');

				let message = files.accepted.length + ' is/are uploaded';

				let fileList:string[] = []; 
				files.accepted.forEach(f => fileList.push(f.name))


				dispatch('success', { text: message , files: fileList});

				files.accepted = [];
			}
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	{#if model}
		<!--if model exist  -->
		<div>
			<DropZone
				on:drop={handleFilesSelect}
				accept={model.accept}
				multiple={model.multiple}
				{maxSize}
			>
				<b style="font-size:xx-large"><Fa icon={faFileUpload} /></b>
				<span
					><b>Drag 'n' drop some files here, or click to select files</b>
					<b>(max file size: {model.maxSize} mb)</b></span
				>
				<p>
					{#if model.accept}
						{#each model.accept as ext}
							{ext} ,
						{/each}
					{/if}
				</p>
			</DropZone>
		</div>

		<button id={submitBt} color="primary" style="display:none"><Fa icon={faSave} /></button>
	{:else}
		<!-- while data is not loaded show a loading information -->

		<Spinner />
	{/if}
</form>
