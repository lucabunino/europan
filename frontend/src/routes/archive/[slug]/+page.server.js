import { getCompetition } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const singleCompetition = await getCompetition(params.slug);
  if (singleCompetition) {
    return {
      singleCompetition,
    };
  }
  throw error(404, 'Not found');
}