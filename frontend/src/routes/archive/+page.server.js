import { getArchive } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
	const archive = await getArchive();
	
	if (archive) {
		archive.forEach((competition) => {
			if (competition.sites) {
				const uniqueSites = [];
				competition.sites.forEach((entry) => {
					if (!uniqueSites.some(site => site.site.title === entry.site.title)) {
						uniqueSites.push(entry);
					}
				});
				competition.sites = uniqueSites;
			}
		});

		return {
			archive,
		};
	}

	throw error(404, 'Not found');
}