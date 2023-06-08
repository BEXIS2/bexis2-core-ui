import { setApiConfig } from '$lib/stores/apistore';

export function load() {

 console.log("load and set apiconfig")

 if(import.meta.env.DEV)
 { 
   console.log("dev")

   setApiConfig("https://localhost:44345","davidschoene","123456");
 }
 else if(import.meta.env.PROD)
 {
   console.log("PROD")
   setApiConfig("","","");
 }

 
}