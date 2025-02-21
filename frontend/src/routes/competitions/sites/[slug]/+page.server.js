import { getSite } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const singleSite = await getSite(params.slug);
  if (singleSite) {
    // Step 1: Find the latest competition edition
    const latestEdition = Math.max(
      ...singleSite.referencingProjects.map(project => project.competition.edition)
    );

    // Step 2: Filter projects referencing the latest competition
    singleSite.referencingProjects = singleSite.referencingProjects.filter(project => 
      project.competition.edition === latestEdition
    );

    return {
      singleSite,
    };
  }
  throw error(404, 'Not found');
}
