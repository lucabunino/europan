// file initialized by the Paraglide-SvelteKit CLI - Feel free to edit it
import { createI18n } from "@inlang/paraglide-sveltekit"
import * as runtime from "$lib/paraglide/runtime.js"

export const i18n = createI18n(runtime, {
	pathnames: {
		"/about": {
			fr: "/a-propos",
			de: "/uber-uns",
		},
		"/about/partners": {
			fr: "/partenaires",
			de: "/partner",
		},
		"/about/support-us": {
			fr: "/soutenez-nous",
			de: "/unterstützen-sie-uns",
		},
		"/about/team": {
			fr: "/equipe",
			de: "/team",
		},
		"/about/what-is-europan": {
			fr: "/qu-est-ce-qu-europan",
			de: "/was-ist-europan",
		},
		"/archive": {
			fr: "/archive",
			de: "/archiv",
		},
    "/archive/[slug]" : {
      fr: "/archive/[slug]",
			de: "/archiv/[slug]",
		},
		"/contact": {
			fr: "/contact",
			de: "/kontakt",
		},
		"/competitions": {
			fr: "/concours",
			de: "/wettbewerbe",
		},
		"/competitions/jury": {
			fr: "/jury",
			de: "/jury",
		},
		"/competitions/process": {
			fr: "/deroulement",
			de: "/prozess",
		},
		"/competitions/results": {
			fr: "/resultats",
			de: "/ergebnisse",
		},
		"/competitions/sites": {
			fr: "/lieux",
			de: "/orte",
		},
		"/competitions/topic": {
			fr: "/sujet",
			de: "/thema",
		},
		"/news": {
			fr: "/news",
			de: "/nachrichten",
		},
    "/news/[slug]" : {
      fr: "/news/[slug]",
			de: "/nachrichten/[slug]",
		},
		"/newsletter": {
			fr: "/newsletter",
			de: "/newsletter",
		},
		"/credits": {
			fr: "/credits",
			de: "/impressum",
		},
		"/close": {
			fr: "/fermer",
			de: "/schliessen",
		},
	},

	// Matchers can be added if needed
	// matchers: { int }
});