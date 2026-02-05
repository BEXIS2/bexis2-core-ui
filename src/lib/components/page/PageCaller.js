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

export const getAntiForgeryToken = async () => {
	try {
		const response = await Api.get('/tokens/getAntiForgeryToken');
		return response.data;
	} catch (error) {
		console.error(error);
		// In docs/demo mode there may be no backend; return a safe fallback
		return { csrfToken: '' };
	}
};
