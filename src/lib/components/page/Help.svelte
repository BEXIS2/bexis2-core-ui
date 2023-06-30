<script lang=ts>
    import { helpStore } from '$store/pageStores'
    import type { helpItemType, helpStoreType } from "$models/Models";

    let Value:helpStoreType;
    $:helpStore.subscribe(value => {
            Value = value;
        });
    let helpItem:helpItemType;
    $:helpItem = getHelpItem(Value);

    function getHelpItem(value:helpStoreType):helpItemType
    {
        if(value != undefined && value.helpItems != undefined && value.itemId != undefined)
        {
            return (value.itemId == "") ? {id:undefined,name:'',description:''}:value.helpItems.find(h => h.id === value.itemId)!;
        }
        return {id:undefined,name:'',description:''};
    }
    window.origin

</script>
{#if helpItem && helpItem.id}
<div class="p-5 w-96 space-y-4" id={helpItem.id}>
    <h3 class="h3">{ helpItem.name }</h3> 
    <p>{@html helpItem.description }</p>
     {#if helpItem.link}  
     <p><a href="{helpItem.link}">... read more</a></p>
     {/if}
</div>
{:else}
<div class="p-5 w-96 space-y-4">
    <h3 class="h3">Help</h3>
    <div class="space-y-4">
    <div class="grid grid-cols-3 gap-8">
        <div class="placeholder animate-pulse" />
        <div class="placeholder animate-pulse" />
        <div class="placeholder animate-pulse" />
    </div>
    <div class="placeholder w-28 animate-pulse" />
    </div>
</div>
{/if}