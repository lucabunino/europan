import { getNewses } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ depends, locals }) {
	depends("paraglide:lang")
	const newses = await getNewses(locals.paraglide.lang);
	
	if (newses) {
		return {
			newses,
		};
	}
  throw error(404, 'Not found');
}