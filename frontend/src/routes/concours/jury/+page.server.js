import { getJury } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
	const jury = await getJury();
	
	if (jury) {
		return {
			jury,
		};
	}
  throw error(404, 'Not found');
}