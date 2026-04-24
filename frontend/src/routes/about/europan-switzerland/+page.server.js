import { getPage } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ depends, locals }) {
	depends("paraglide:lang")
	const europanSwitzerland = await getPage('europan-switzerland', locals.paraglide.lang);
	
	if (europanSwitzerland) {
		return {
			europanSwitzerland,
		};
	}
  throw error(404, 'Not found');
}