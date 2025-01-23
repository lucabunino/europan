import { getLastCompetition } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
	const competition = await getLastCompetition();
	
	if (competition) {
		return {
			competition,
		};
	}
  throw error(404, 'Not found');
}