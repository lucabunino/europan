import { getWhatIsEuropan } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ depends, locals }) {
	depends("paraglide:lang")
	const whatIsEuropan = await getWhatIsEuropan(locals.paraglide.lang);
	
	if (whatIsEuropan) {
		return {
			whatIsEuropan,
		};
	}
  throw error(404, 'Not found');
}