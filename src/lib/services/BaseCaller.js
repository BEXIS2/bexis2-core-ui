// Implementations for all the calls for the pokemon endpoints.
//import Api from "./Api";
import { host } from "$store/apiStores";

// go to a internal action
export const goTo = async (url) => {
  if(window!=null && host != null && url!=null){
    window.open(host+url,"_self")?.focus()
  }
};


