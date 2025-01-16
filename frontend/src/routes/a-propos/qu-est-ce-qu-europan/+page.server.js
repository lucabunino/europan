import { getWhatIsEuropan } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
	const whatIsEuropan = await getWhatIsEuropan();
	
	if (whatIsEuropan) {
		return {
			whatIsEuropan,
		};
	}
  throw error(404, 'Not found');
}