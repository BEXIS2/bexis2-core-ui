import { Api } from '$lib/services/Api';

export const getFooter = async () => {
	try {
		const response = await Api.get('/footer');
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getHeader = async () => {
	try {
		const response = await Api.get('/header');
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
