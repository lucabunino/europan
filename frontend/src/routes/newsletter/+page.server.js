import { getContact } from '$lib/utils/sanity';

export async function load({ depends, locals }) {
	depends("paraglide:lang")
	const contact = await getContact(locals.paraglide.lang);
	
	if (contact) {
		return {
			contact,
		};
	}
  throw error(404, 'Not found');
}