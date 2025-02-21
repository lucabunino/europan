import { getLastCompetition } from '$lib/utils/sanity';
import { getSEO } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ url, depends, locals }) {
	depends("paraglide:lang")
	let competition = await getLastCompetition(locals.paraglide.lang);	
	let seo = await getSEO(locals.paraglide.lang);
	let pathname = url.pathname
	
	if (competition && seo && pathname) {
		return {
			competition,
			seo,
			pathname
		};
	}
  throw error(404, 'Not found');
}