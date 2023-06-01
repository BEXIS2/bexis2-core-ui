<script>
 import Spinner from "$lib/components/spinner/Spinner.svelte";
 import { Position } from "$lib/models/Enums";

</script>

<div class="grid grid-cols-1 space-y-10 divide-y-2" > 
<div>
 <h4 class="h4">default</h4>
 <Spinner />
</div>

<div>
 <h4 class="h4">change color</h4>
 <Spinner textCss="text-primary-500"/>
</div>

<div>
 <h4 class="h4">change position</h4>
 <Spinner textCss="text-secondary-500" position={Position.center} />
</div>

<div>
 <h4 class="h4">change size</h4>
 <Spinner textCss="text-error-500" position={Position.start} size={16} />
</div>

<div>
 <h4 class="h4">add text</h4>
 <Spinner textCss="text-surface-500" label="validation is running, please waiting until dead"/>
</div>

</div>