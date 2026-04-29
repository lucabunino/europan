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
			de: "/uber-uns/vorstand",
		},
		"/about/europan-switzerland": {
			fr: "/a-propos/europan-suisse",
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
			fr: "/concours/qu-est-ce-qu-europan",
			de: "/wettbewerb/was-ist-europan",
		},
		"/competitions/promoter": {
			fr: "/concours/organisateur",
			de: "/wettbewerb/auslober-in",
		},
		"/competitions/jury": {
			fr: "/concours/jury",
			de: "/wettbewerb/jury",
		},
		"/competitions/process": {
			fr: "/concours/deroulement",
			de: "/wettbewerb/prozess",
		},
		"/competitions/results": {
			fr: "/concours/resultats",
			de: "/wettbewerb/ergebnisse",
		},
		"/competitions/sites": {
			fr: "/concours/lieux",
			de: "/wettbewerb/orte",
		},
		"/competitions/topic": {
			fr: "/concours/sujet",
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
	prefixDefault: "always",
    strategy: ["localStorage", "preferredLanguage", "url", "baseLocale"],
	// Matchers can be added if needed
	// matchers: { int }
});