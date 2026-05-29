<script lang="ts">
	import { FileUploader } from "$lib";
	import type { fileUploaderType} from "$lib";

 let config:fileUploaderType = {
		accept: [".json"],
		multiple:false,
		existingFiles: [],
		descriptionType:0,
		maxSize:1024
	}

	function	successHandler(e){
				console.log("🚀 ~ successHandler ~ e:", e)
		}

</script>
<div>
	<FileUploader id=2  data={config} submit='dcm/m/import' on:submited={successHandler}/>

</div>
