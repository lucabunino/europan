import { getJury } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
	const competition = await getJury();
	
	if (competition) {
		return {
			competition,
		};
	}
  throw error(404, 'Not found');
}