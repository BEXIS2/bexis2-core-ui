<script lang="ts">
	import { FileUploader } from "$lib";
	import type { fileUploaderType} from "$lib";

 let config:fileUploaderType = {
		accept: [".csv"],
		multiple:true,
		existingFiles: [],
		descriptionType:0,
		maxSize:1024
	}


</script>
<div>
	<FileUploader data={config}/>

</div>
