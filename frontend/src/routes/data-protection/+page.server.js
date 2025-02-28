import { getDataProtection } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ depends, locals }) {
  depends("paraglide:lang")
	const dataProtection = await getDataProtection(locals.paraglide.lang);
	
	if (dataProtection) {
		return {
			dataProtection,
		};
	}
  throw error(404, 'Not found');
}