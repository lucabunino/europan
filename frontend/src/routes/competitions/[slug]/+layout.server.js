import { getCompetition } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ params, depends, locals }) {
  depends("paraglide:lang")
  const competitions = await getCompetition(params.slug, locals.paraglide.lang);
  if (competitions?.[0]) {
    return {
      competition: competitions[0],
    };
  }
  throw error(404, 'Not found');
}
