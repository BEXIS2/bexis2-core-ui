<script>

import FileIcon from './FileIcon.svelte';

export let name="";
export let type = "";
// export let description;
export let size = "";

</script>

<div style="font-size:{size}">
 <FileIcon {type} /> {name}
</div>