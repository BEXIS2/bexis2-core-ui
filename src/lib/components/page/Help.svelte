<script lang=ts>
    import { HelpStore } from '$store/pagestore'
    import type { HelpItem, HelpStoreType } from "$models/Models";

    let Value:HelpStoreType;
    $:HelpStore.subscribe(value => {
            Value = value;
        });
    let helpItem:HelpItem;
    $:helpItem = getHelpItem(Value);

    function getHelpItem(value:HelpStoreType):HelpItem
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
<div class="card p-5 w-96" id={helpItem.id}>

    <div class="card-header"><h2 class="h2">{ helpItem.name }</h2></div>
 
    <p class="p-5">{@html helpItem.description }</p>

    <div class="card-footer">
     {#if helpItem.link}  
     <p><a href="{helpItem.link}">... read more</a></p>
     {/if}
    </div>
</div>
{/if}