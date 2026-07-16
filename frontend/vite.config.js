import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// French is unprefixed (base locale); German always gets a "/de" prefix
// in front of its translated path. Declare each route once here - the
// "/de" prefix below is applied automatically, never by hand.
const routes = [
	{ pattern: '/', fr: '/', de: '/' },
	{ pattern: '/about', fr: '/a-propos', de: '/uber-uns' },
	{ pattern: '/about/partners', fr: '/a-propos/partenaires', de: '/uber-uns/partner' },
	{ pattern: '/about/support-us', fr: '/a-propos/soutenez-nous', de: '/uber-uns/unterstützen-sie-uns' },
	{ pattern: '/about/team', fr: '/a-propos/comite', de: '/uber-uns/vorstand' },
	{ pattern: '/about/europan-switzerland', fr: '/a-propos/europan-suisse', de: '/uber-uns/europan-schweiz' },
	{ pattern: '/archive', fr: '/archive', de: '/archiv' },
	{ pattern: '/archive/:slug', fr: '/archive/:slug', de: '/archiv/:slug' },
	{ pattern: '/contact', fr: '/contact', de: '/kontakt' },
	{ pattern: '/competitions', fr: '/concours', de: '/wettbewerb' },
	{ pattern: '/competitions/what-is-europan', fr: '/concours/qu-est-ce-qu-europan', de: '/wettbewerb/was-ist-europan' },
	{ pattern: '/competitions/promoter', fr: '/concours/organisateur', de: '/wettbewerb/auslober-in' },
	{ pattern: '/competitions/:slug', fr: '/concours/:slug', de: '/wettbewerb/:slug' },
	{ pattern: '/competitions/:slug/jury', fr: '/concours/:slug/jury', de: '/wettbewerb/:slug/jury' },
	{ pattern: '/competitions/:slug/process', fr: '/concours/:slug/deroulement', de: '/wettbewerb/:slug/prozess' },
	{ pattern: '/competitions/:slug/results', fr: '/concours/:slug/resultats', de: '/wettbewerb/:slug/ergebnisse' },
	{ pattern: '/competitions/:slug/sites', fr: '/concours/:slug/lieux', de: '/wettbewerb/:slug/orte' },
	{ pattern: '/competitions/:slug/sites/:siteSlug', fr: '/concours/:slug/lieux/:siteSlug', de: '/wettbewerb/:slug/orte/:siteSlug' },
	{ pattern: '/competitions/:slug/topic', fr: '/concours/:slug/sujet', de: '/wettbewerb/:slug/thema' },
	{ pattern: '/news', fr: '/news', de: '/news' },
	{ pattern: '/news/:slug', fr: '/news/:slug', de: '/news/:slug' },
	{ pattern: '/newsletter', fr: '/newsletter', de: '/newsletter' },
	{ pattern: '/data-protection', fr: '/protection-donnees', de: '/datenschutz' },
];

const urlPatterns = routes.map(({ pattern, fr, de }) => ({
	pattern,
	localized: [
		['fr', fr],
		['de', de === '/' ? '/de' : `/de${de}`],
	],
}));

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'baseLocale'],
			urlPatterns,
		}),
		sveltekit()
	]
});
