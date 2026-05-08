import { getPage } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ depends, locals }) {
	depends("paraglide:lang")
	const page = await getPage('what-is-europan', locals.paraglide.lang);
	
	if (page) {
		return {
			page,
		};
	}
  throw error(404, 'Not found');
}