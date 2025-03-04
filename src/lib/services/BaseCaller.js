// Implementations for all the calls for the pokemon endpoints.
//import Api from "./Api";
import { host } from '$store/apiStores';

// go to a internal action
export const goTo = async (url, intern = true, target="_self") => {
	if (intern == true) {
		// go to inside bexis2
		if (window != null && host != null && url != null) {
			window.open(host + url, target)?.focus();
		}
	} // go to a external page
	else {
		window.open(url, '_blank')?.focus();
	}
};
