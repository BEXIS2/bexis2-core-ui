<script>
	import Fa from 'svelte-fa';
	import { faFileAudio } from '@fortawesome/free-regular-svg-icons';
	import { faFileVideo } from '@fortawesome/free-regular-svg-icons';
	import { faFileWord } from '@fortawesome/free-regular-svg-icons';
	import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
	import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
	import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
	import { faFileImage } from '@fortawesome/free-regular-svg-icons';
	import { faFileArchive } from '@fortawesome/free-regular-svg-icons';

	export let type = '';
</script>

{#if type.includes('excel') || type.includes('spreadsheetml')}
	<Fa icon={faFileExcel} />
{/if}

{#if type.includes('text')}
	<Fa icon={faFileAlt} />
{/if}

{#if type.includes('image')}
	<Fa icon={faFileImage} />
{/if}

{#if type.includes('audio')}
	<Fa icon={faFileAudio} />
{/if}

{#if type.includes('video')}
	<Fa icon={faFileVideo} />
{/if}

{#if type.includes('word')}
	<Fa icon={faFileWord} />
{/if}

{#if type.includes('pdf')}
	<Fa icon={faFilePdf} />
{/if}

{#if type.includes('zip')}
	<Fa icon={faFileArchive} />
{/if}
