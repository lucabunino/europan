import { getSite } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ params, depends, locals }) {
  depends("paraglide:lang")
  const singleSite = await getSite(params.siteSlug, params.slug, locals.paraglide.lang);
  if (singleSite) {
    return {
      singleSite,
    };
  }
  throw error(404, 'Not found');
}
