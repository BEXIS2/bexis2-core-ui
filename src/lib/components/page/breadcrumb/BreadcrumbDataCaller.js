import { Api } from '$lib/services/Api';

export const getApplicationName = async () => {
    try
    {
        const response = await Api.get(`/Home/GetApplicationName`);

        if(response.status == 200)
        {
            return response.data;
        }
        else
        {
            return "BEXIS2";
        }
    } catch (error) {
        return "BEXIS2"
    }
}