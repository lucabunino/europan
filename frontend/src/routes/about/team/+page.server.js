import { getTeam } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ depends, locals }) {
	depends("paraglide:lang")
	const team = await getTeam(locals.paraglide.lang);
	
	if (team) {
		return {
			team,
		};
	}
  throw error(404, 'Not found');
}