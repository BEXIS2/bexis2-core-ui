<script lang="ts">

import Page from '$lib/components/page/Page.svelte'
import CodeContainer from '$docs/components/CodeContainer.svelte';
import hookCs from './hook.cs?raw'
import hookXml from './hook.xml?raw'

let n:number = 2;

</script>

<Page>
<h2>Hooks</h2>

<CodeContainer title="How To" 
csharp="{hookCs}"
xml="{hookXml}"
codeOnly={true}
activetab={n}
>
<span slot="info">
 How hooks look like.
</span>

</CodeContainer>
</Page>