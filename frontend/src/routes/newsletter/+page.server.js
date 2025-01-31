import { getContact } from '$lib/utils/sanity';

export async function load({ url }) {
	const contact = await getContact();
	
	if (contact) {
		return {
			contact,
		};
	}
  throw error(404, 'Not found');
}