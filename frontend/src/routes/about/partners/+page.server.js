import { getPartners } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
	const partners = await getPartners();
	
	if (partners) {
		return {
			partners,
		};
	}
  throw error(404, 'Not found');
}