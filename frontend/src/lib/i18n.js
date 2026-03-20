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
			fr: "/a-propos/partenaires",
			de: "/uber-uns/partner",
		},
		"/about/support-us": {
			fr: "/a-propos/soutenez-nous",
			de: "/uber-uns/unterstützen-sie-uns",
		},
		"/about/team": {
			fr: "/a-propos/equipe",
			de: "/uber-uns/team",
		},
		"/about/what-is-europan": {
			fr: "/a-propos/qu-est-ce-qu-europan",
			de: "/uber-uns/was-ist-europan",
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
			de: "/wettbewerb",
		},
		"/competitions/jury": {
			fr: "/concours/jury",
			de: "/wettbewerbe/jury",
		},
		"/competitions/process": {
			fr: "/concours/deroulement",
			de: "/wettbewerbe/prozess",
		},
		"/competitions/results": {
			fr: "/concours/resultats",
			de: "/wettbewerbe/ergebnisse",
		},
		"/competitions/sites": {
			fr: "/concours/lieux",
			de: "/wettbewerbe/orte",
		},
		"/competitions/topic": {
			fr: "/concours/sujet",
			de: "/wettbewerbe/thema",
		},
		"/news": {
			fr: "/news",
			de: "/news",
		},
    "/news/[slug]" : {
      fr: "/news/[slug]",
			de: "/news/[slug]",
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
		"/data-protection": {
			fr: "/protection-donnees",
			de: "/datenschutz",
		},
	},

	// Matchers can be added if needed
	// matchers: { int }
});