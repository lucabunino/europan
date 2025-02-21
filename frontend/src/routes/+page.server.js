import { getFeaturedNewses } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ depends, locals }) {
	depends("paraglide:lang")
	const featuredNewses = await getFeaturedNewses(locals.paraglide.lang);
	
	if (featuredNewses) {
		return {
			featuredNewses,
		};
	}
  throw error(404, 'Not found');
}