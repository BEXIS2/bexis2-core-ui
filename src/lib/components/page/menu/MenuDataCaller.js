import { Api } from '$lib/services/Api';

export const getMenuItems = async () => {
	try {
		const response = await Api.get('/menu');
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
