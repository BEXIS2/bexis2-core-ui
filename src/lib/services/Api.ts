// Api.js
import axios from 'axios';
import { host, username, password, errorStore } from '../stores/apiStores';
import type { errorType } from '$models/Models';

console.log('setup axios');

// implement a method to execute all the request from here.
const apiRequest = (method, url, request) => {
	// Create a instance of axios to use the same base url.
	const axiosAPI = axios.create({
		baseURL: host
	});

	const headers = {
		authorization: 'Basic ' + btoa(username + ':' + password)
	};

	//using the axios instance to perform the request that received from each http method
	return axiosAPI({
		method,
		url,
		data: request,
		headers
	})
		.then((res) => {
			// console.log("res",res);
			
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
const get = (url, request = '') => apiRequest('get', url, request);

// function to execute the http delete request
const deleteRequest = (url, request) => apiRequest('delete', url, request);

// function to execute the http post request
const post = (url, request) => apiRequest('post', url, request);

// function to execute the http put request
const put = (url, request) => apiRequest('put', url, request);

// function to execute the http path request
const patch = (url, request) => apiRequest('patch', url, request);

// expose your method to other services or actions
export const Api = {
	get,
	delete: deleteRequest,
	post,
	put,
	patch
};
