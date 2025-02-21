import { getLastCompetition } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ url, depends, locals }) {
	depends("paraglide:lang")
	let competition = await getLastCompetition(locals.paraglide.lang);	
	
	if (competition) {
		return {
			competition,
		};
	}
  throw error(404, 'Not found');
}