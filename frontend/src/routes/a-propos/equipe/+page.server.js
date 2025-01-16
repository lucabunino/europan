import { getTeam } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
	const team = await getTeam();
	
	if (team) {
		return {
			team,
		};
	}
  throw error(404, 'Not found');
}