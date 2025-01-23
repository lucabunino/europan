import { getFeaturedNewses } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
	const featuredNewses = await getFeaturedNewses();
	
	if (featuredNewses) {
		return {
			featuredNewses,
		};
	}
  throw error(404, 'Not found');
}