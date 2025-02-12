import { createClient } from '@sanity/client';
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2025-01-15', // date of setup
});



// Newses
export async function getNewses() {
	return await client.fetch(`
		*[_type == "news" && language == "fr" && !(_id in path('drafts.**'))] | order(date desc) {
			...,
		}
	`);
}

// Featured Newses
export async function getFeaturedNewses() {
	return await client.fetch(`
		*[_type == "featuredNews" && language == "fr" && !(_id in path('drafts.**'))] | order(date desc) {
			...,
			featuredNews[]->{
				...,
				attachments[] {
					"title": attachmentTitle,
					"url": attachmentFile.asset->url
				},
			}
		}
	`);
}

// News
export async function getNews(slug) {
	return await client.fetch(`
		*[_type == "news" && language == "fr" && slug.current == $slug] {
			...,
			attachments[] {
				"title": attachmentTitle,
				"url": attachmentFile.asset->url
			},
		}
	`, { slug });
}

// Team
export async function getTeam() {
	return await client.fetch(`
		*[_type == "team" && language == "fr" && !(_id in path('drafts.**'))] {
			title,
			team[]->{...}
		}
	`);
}

// Partners
export async function getPartners() {
	return await client.fetch(`
		*[_type == "partner" && language == "fr" && !(_id in path('drafts.**'))] {
			...,
			"logoUrl": logo.asset->url
		}
	`);
}

// Support Us
export async function getSupportUs() {
	return await client.fetch(`
		*[_type == "supportUs" && language == "fr" && !(_id in path('drafts.**'))] {
			...,
		}
	`);
}

// Contact
export async function getContact() {
	return await client.fetch(`
		*[_type == "contact" && language == "fr" && !(_id in path('drafts.**'))] {
			...,
		}
	`);
}

// What is Europan?
export async function getWhatIsEuropan() {
	return await client.fetch(`
		*[_type == "whatIsEuropan" && language == "fr" && !(_id in path('drafts.**'))] {
			...,
		}
	`);
}

// Topic
export async function getTopic() {
	return await client.fetch(`
    	*[_type == "competition" && language == "fr"] | order(edition desc)[0] {
				...,
			}
    }
	`);
}

// Jury
export async function getJury() {
	return await client.fetch(`
    *[_type == "competition" && language == "fr"] | order(edition desc)[0] {
			juryPresident {...},
			jury[]->{...}
    }
	`);
}

// Last competition
export async function getLastCompetition() {
	return await client.fetch(`
		*[_type == "competition" && language == "fr" && !(_id in path('drafts.**'))] | order(edition desc)[0] {
			...,
			juryPresident->{...,},
			jury[]->,
			featuredSites[]{
				"site": site->,
				"siteUrl": siteUrl
			} | order(site.title asc),
			"featuredProjects": *[_type == "project" && references(^._id)] {
				...,
				competition->{...},
				team[]->{...},
				site->{...}
			} | order(site.title asc, result)
		}
	`);
}

// Archive
export async function getArchive() {
	return await client.fetch(`
    *[_type == "competition" && language == "fr"] | order(edition desc)[1..-1] {
			title,
			subtitle,
			slug,
			"sites": *[_type == "project" && references(^._id)] {
				site->{
					_id,
					title,
				}
			} | order(title asc),
			edition
    }
	`);
}

// Competition
export async function getCompetition(slug) {
	return await client.fetch(`
    *[_type == "competition" && language == "fr" && slug.current == $slug] {
			...,
			juryPresident->{...,},
			jury[]->,
			featuredSites[]->{...} | order(title asc),
			"featuredProjects": *[_type == "project" && references(^._id)] {
				...,
				competition->{...},
				team[]->{...},
				site->{...}
			} | order(site.title asc, result)
    }
	`, { slug });
}

// Competition
export async function getSite(slug) {
  return await client.fetch(`
    *[_type == "site" && language == "fr" && slug.current == $slug && !(_id in path('drafts.**'))][0] {
			title,
      "referencingProjects": *[_type == "project" && references(^._id) && !(_id in path('drafts.**'))] {
        ...,
        competition->{title, edition, slug},
        team[]->{...},
        site->{title, slug}
      } | order(competition.edition desc)
    }
  `, { slug });
}

// SEO
export async function getSEO() {
	return await client.fetch(`
		*[_type == "seo" && !(_id in path('drafts.**'))] {
			SEOTitle,
			SEODescription,
			SEOImage
		}
	`);
}

// Cookies
export async function getCookies() {
	return await client.fetch(`
		*[_type == "policy" && kind =='cookies'] {
			...,
		}[0...1]
	`
)};

// Privacy
export async function getPrivacy() {
	return await client.fetch(`
		*[_type == "policy" && kind =='privacy'] {
			...,
		}[0...1]
	`
)};