import { getPartners } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ depends, locals }) {
	depends("paraglide:lang")
	const partners = await getPartners(locals.paraglide.lang);
	
	if (partners) {
		return {
			partners,
		};
	}
  throw error(404, 'Not found');
}