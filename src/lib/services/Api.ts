// Api.js
import axios from 'axios';
import { host, username, password, errorStore, csrfToken } from '../stores/apiStores';
import type { errorType } from '$models/Models';

console.log('setup axios');

// implement a method to execute all the request from here.
const apiRequest = (method, url, request, customHeaders = {}, customConfig = {}) => {
	// Create a instance of axios to use the same base url.
	const axiosAPI = axios.create({
		baseURL: host
	});

	const requestVerificationToken = csrfToken;
	const headers = {
		authorization: 'Basic ' + btoa(username + ':' + password),
		'__RequestVerificationToken': requestVerificationToken,
		...customHeaders
	};


	//using the axios instance to perform the request that received from each http method
	return axiosAPI({
		method,
		url,
		data: request,
		headers,
		...customConfig
	})
		.then((res) => {
			//console.log("res-test",res);
			
			return Promise.resolve(res);

		})
		.catch((er) => {
		//console.log("🚀 ~ apiRequest ~ err:", er)
			const err = er.response;
			
			let error:errorType = {
							status: err.status,
							statusText: err.statusText,
							error: err.data.error,
							stackTrace: err.data.stackTrace,
			}

			errorStore.set(error);

			return Promise.reject(err);
		});
};

// function to execute the http get request
const get = (url, request = '', headers ={}, config ={}) => apiRequest('get', url, request, headers, config);

// function to execute the http delete request
const deleteRequest = (url, request, headers ={}, config ={}) => apiRequest('delete', url, request, headers, config);

// function to execute the http post request
const post = (url, request, headers ={}, config ={}) => apiRequest('post', url, request, headers, config);

// function to execute the http put request
const put = (url, request, headers ={}, config ={}) => apiRequest('put', url, request, headers, config);

// function to execute the http path request
const patch = (url, request, headers ={}, config ={}) => apiRequest('patch', url, request, headers, config);

// expose your method to other services or actions
export const Api = {
	get,
	delete: deleteRequest,
	post,
	put,
	patch
};
