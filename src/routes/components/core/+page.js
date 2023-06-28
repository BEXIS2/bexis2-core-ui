import {setApiConfig} from '$lib/stores/apistore'

/** @type {import('./$types').PageLoad} */
export function load() {

 console.log("load and set apiconfig")

 if(import.meta.env.DEV)
 { 
   console.log("dev")

   setApiConfig("https://dev.bexis2.uni-jena.de/","admin","123456");
 }
 else if(import.meta.env.PROD)
 {
   console.log("PROD")
   setApiConfig("https://dev.bexis2.uni-jena.de/","admin","123456");
 }

 return {};
}

