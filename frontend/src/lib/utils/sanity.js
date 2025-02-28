import { createClient } from '@sanity/client';
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: true, // `false` if you want to ensure fresh data
	apiVersion: '2025-01-15', // date of setup
});



// Newses
export async function getNewses(lang) {
	return await client.fetch(`
		*[_type == "news" && language == $lang && !(_id in path('drafts.**'))] | order(date desc) {
			...,
		}
	`, { lang });
}

// Featured Newses
export async function getFeaturedNewses(lang) {
	return await client.fetch(`
		*[_type == "featuredNews" && language == $lang && !(_id in path('drafts.**'))] | order(date desc) {
			...,
			featuredNews[]->{
				...,
				attachments[] {
					"title": attachmentTitle,
					"url": attachmentFile.asset->url
				},
			}
		}
	`, { lang });
}

// News
export async function getNews(slug, lang) {
	return await client.fetch(`
		*[_type == "news" && language == $lang && slug.current == $slug] {
			...,
			attachments[] {
				"title": attachmentTitle,
				"url": attachmentFile.asset->url
			},
			"_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
				title,
				slug,
				language
			}
		}
	`, { slug, lang });
}

// Team
export async function getTeam(lang) {
	return await client.fetch(`
		*[_type == "team" && language == $lang && !(_id in path('drafts.**'))] {
			title,
			team[]->{...}
		}
	`, { lang });
}

// Partners
export async function getPartners(lang) {
	return await client.fetch(`
		*[_type == "partner" && language == $lang && !(_id in path('drafts.**'))] | order(title asc) {
			...,
			"logoUrl": logo.asset->url
		}
	`, { lang });
}

// Support Us
export async function getSupportUs(lang) {
	return await client.fetch(`
		*[_type == "supportUs" && language == $lang && !(_id in path('drafts.**'))][0] {
			...,
		}
	`, { lang });
}

// Contact
export async function getContact(lang) {
	return await client.fetch(`
		*[_type == "contact" && language == $lang && !(_id in path('drafts.**'))][0] {
			...,
		}
	`, { lang });
}

// What is Europan?
export async function getWhatIsEuropan(lang) {
	return await client.fetch(`
		*[_type == "whatIsEuropan" && language == $lang && !(_id in path('drafts.**'))][0] {
			...,
		}
	`, { lang });
}

// Topic
export async function getTopic(lang) {
	return await client.fetch(`
			*[_type == "competition" && language == $lang] | order(edition desc)[0] {
				...,
			}
	`, { lang });
}


// Jury
export async function getJury(lang) {
	return await client.fetch(`
    *[_type == "competition" && language == $lang] | order(edition desc)[0] {
			juryPresident {...},
			jury[]->{...}
    }
	`, { lang });
}

// Last competition
export async function getLastCompetition(lang) {
	return await client.fetch(`
		*[_type == "competition" && language == $lang && !(_id in path('drafts.**'))] | order(edition desc)[0] {
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
	`, { lang });
}

// Archive
export async function getArchive(lang) {
	return await client.fetch(`
    *[_type == "competition" && language == $lang] | order(edition desc)[1..-1] {
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
	`, { lang });
}

// Competition
export async function getCompetition(slug, lang) {
	return await client.fetch(`
    *[_type == "competition" && language == $lang && slug.current == $slug] {
			...,
			juryPresident->{...,},
			jury[]->,
			featuredSites[]->{...} | order(title asc),
			"_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
				title,
				slug,
				language
			},
			"featuredProjects": *[_type == "project" && references(^._id)] {
				...,
				competition->{...},
				team[]->{...},
				site->{...}
			} | order(site.title asc, result),
    }
	`, { slug, lang });
}

// Competition
export async function getSite(slug, lang) {
  return await client.fetch(`
    *[_type == "site" && language == $lang && slug.current == $slug && !(_id in path('drafts.**'))][0] {
			title,
      "referencingProjects": *[_type == "project" && references(^._id) && !(_id in path('drafts.**'))] {
        ...,
        competition->{title, edition, slug},
        team[]->{...},
        site->{title, slug}
      } | order(competition.edition desc)
    }
  `, { slug, lang });
}

// SEO
export async function getSEO(lang) {
	return await client.fetch(`
			*[_type == "seo" && language == $lang && !(_id in path('drafts.**'))][0] {
					SEOTitle,
					SEODescription,
					SEOImage
			}
	`, { lang });
}

// Cookies
export async function getCookies(lang) {
	return await client.fetch(`
		*[_type == "policy" && kind =='cookies' && language == $lang][0] {
			...,
		}[0...1]
	`, { lang });
}

// Privacy
export async function getPrivacy(lang) {
	return await client.fetch(`
		*[_type == "policy" && kind =='privacy' && language == $lang][0] {
			...,
		}[0...1]
	`, { lang });
}

// Privacy
export async function getDataProtection(lang) {
	return await client.fetch(`
		*[_type == "policy" && kind =='dataProtection' && language == $lang][0] {
			...,
		}
	`, { lang });
}