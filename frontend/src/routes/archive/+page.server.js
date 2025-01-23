import { getArchive } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
	const archive = await getArchive();
	
	if (archive) {
		return {
			archive,
		};
	}
  throw error(404, 'Not found');
}