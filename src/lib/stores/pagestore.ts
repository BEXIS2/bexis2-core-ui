import type { HelpItem, HelpStoreType } from "$models/Models";
import { writable } from 'svelte/store';

function createHelpStore()
{
    // set Store Type
    const { subscribe, set, update } = writable<HelpStoreType>();

    return {
        //pass Store default functions
		subscribe,
        set,
        update,
        //set the list of help items to show
		setHelpItemList: (helpItems:HelpItem[]) => {
            HelpStore.set({itemId:undefined, helpItems:helpItems})        
        },
        //set the ID of the help item and display it 
        setItemId: (itemId:string) => {
            let v:HelpStoreType;
            const h:HelpItem[] = [];
            HelpStore.subscribe(value => {
                value = (value === undefined) ? {itemId:undefined,helpItems:h}:value;
                value.helpItems = (value.helpItems === undefined) ? h:value.helpItems;
                v = {itemId:itemId, helpItems:value.helpItems};               
            });
            update(u => u = v)
        },
        //reset the ID of the help item and hide it 
        resetItemId: () =>{
            let v:HelpStoreType;
            const h:HelpItem[] = [];
            HelpStore.subscribe(value => {
                value = (value === undefined) ? {itemId:undefined,helpItems:h}:value;
                value.helpItems = (value.helpItems === undefined) ? h:value.helpItems;
                v = {itemId:undefined, helpItems:value.helpItems};               
            });
            update(u => u = v)
        },
        //set the ID of the help item and display it
        show: (itemId:string) =>{
            HelpStore.setItemId(itemId);
        },
        //set a help item and display it
        showHelpItem: (helpItem:HelpItem) =>{
            helpItem.id = (helpItem.id === undefined) ? "default":helpItem.id;
            HelpStore.set({itemId:helpItem.id, helpItems:[helpItem]})
        },
        //reset the ID of the help item and hide it 
        hide: () =>{
            HelpStore.resetItemId();
        },           
        //reset the ID of the help item and hide it 
        toggle: (itemId:string) =>{
            let v:HelpStoreType;
            const h:HelpItem[] = [];
            HelpStore.subscribe(value => {
                value = (value === undefined) ? {itemId:undefined,helpItems:h}:value;
                value.helpItems = (value.helpItems === undefined) ? h:value.helpItems;
                if(itemId != value.itemId)
                {
                    v = {itemId:itemId, helpItems:value.helpItems};
                }
                else
                {
                    v = {itemId:undefined, helpItems:value.helpItems};
                }              
            });
            update(u => u = v)
        },
        reset:() =>{
            const h:HelpItem[] = [];
            HelpStore.set({itemId:undefined, helpItems:h})
        },
        clear:() =>{
            HelpStore.reset();
        }       
	};
}

//crate and export the instance of the store 
export const HelpStore = createHelpStore();
