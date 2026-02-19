import { Api } from '$lib/services/Api';

export const getFooter = async () => {
	try {
		const response = await Api.get('/footer');
		return response.data;
	} catch (error) {
		console.error(error);
		// Fallback footer content for docs/demo mode when backend is unavailable
		return '<div class="px-5 py-3 text-center text-sm text-surface-500">BEXIS2 Core UI</div>';
	}
};

export const getHeader = async () => {
	try {
		const response = await Api.get('/header');
		return response.data;
	} catch (error) {
		console.error(error);
		// Fallback header content for docs/demo mode when backend is unavailable
		return '<div class="px-5 py-3 text-xl font-semibold">BEXIS2 Core UI Documentation</div>';
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
