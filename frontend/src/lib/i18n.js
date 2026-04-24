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
			fr: "/uber-uns/partenaires",
			de: "/uber-uns/partner",
		},
		"/about/support-us": {
			fr: "/uber-uns/soutenez-nous",
			de: "/uber-uns/unterstützen-sie-uns",
		},
		"/about/team": {
			fr: "/uber-uns/equipe",
			de: "/uber-uns/team",
		},
		"/about/europan-switzerland": {
			fr: "/uber-uns/europan-suisse",
			de: "/uber-uns/europan-schweiz",
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
		"/competitions/what-is-europan": {
			fr: "/wettbewerb/qu-est-ce-qu-europan",
			de: "/wettbewerb/was-ist-europan",
		},
		"/competitions/promoter": {
			fr: "/wettbewerb/organisateur",
			de: "/wettbewerb/auslober-in",
		},
		"/competitions/jury": {
			fr: "/wettbewerb/jury",
			de: "/wettbewerb/jury",
		},
		"/competitions/process": {
			fr: "/wettbewerb/deroulement",
			de: "/wettbewerb/prozess",
		},
		"/competitions/results": {
			fr: "/wettbewerb/resultats",
			de: "/wettbewerb/ergebnisse",
		},
		"/competitions/sites": {
			fr: "/wettbewerb/lieux",
			de: "/wettbewerb/orte",
		},
		"/competitions/topic": {
			fr: "/wettbewerb/sujet",
			de: "/wettbewerb/thema",
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