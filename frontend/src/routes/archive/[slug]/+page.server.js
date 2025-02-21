import { getCompetition } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ params, depends, locals }) {
  depends("paraglide:lang")
  const singleCompetition = await getCompetition(params.slug, locals.paraglide.lang);
  if (singleCompetition) {
    return {
      singleCompetition,
    };
  }
  throw error(404, 'Not found');
}