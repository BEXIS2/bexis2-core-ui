import type { HelpItem, HelpStoreType } from "$models/Models";
import type { Menu, BreadcrumbItem } from "$models/Page";
import { Breadcrumb} from "$models/Page";

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

// store for menu
export const menuStore = writable<Menu>();


function createBreadcrumbStore()
{
    // set Store Type
    const { subscribe, set, update } = writable<Breadcrumb>();

    set(new Breadcrumb())

    return {
        //pass Store default functions
		subscribe,
        set,
        update,

        //set the ID of the help item and display it 
        addItem: (item:BreadcrumbItem) => {
            let b:Breadcrumb;
            breadcrumbStore.subscribe(value => {

                value = (value === undefined) ? new Breadcrumb():value;
                // value.items = (value.items === undefined) ? b:value.items
                if(!value.items.find(i=>i.label === item.label)){
                    value.items = [...value.items,item]
                }

                b = value;
            });

            update(s=>s = b);

        },

        clean: () => {
            let b:Breadcrumb;
            breadcrumbStore.subscribe(value => {
                value = new Breadcrumb();
                b = value;
            });

            update(s=>s = b);
        },
	};
}

// store for breadcrumb navigation
export const breadcrumbStore = createBreadcrumbStore();
