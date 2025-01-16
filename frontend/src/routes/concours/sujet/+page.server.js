import { getTopic } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
	const topic = await getTopic();
	
	if (topic) {
		return {
			topic,
		};
	}
  throw error(404, 'Not found');
}