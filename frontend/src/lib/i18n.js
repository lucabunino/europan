// file initialized by the Paraglide-SvelteKit CLI - Feel free to edit it
import { createI18n } from "@inlang/paraglide-sveltekit"
import * as runtime from "$lib/paraglide/runtime.js"
import * as m from "$lib/paraglide/messages.js"

export const i18n = createI18n(runtime, {
	pathnames: {
		"/about" : {
      fr: "/a-propos",
			de: "/uber-uns",
		},

		// You can use parameters
		// All translations must use identical parameters and names
		// "/user/[id=int]/[...rest]" : {
		// 	en: "/user/[id=int]/[...rest]",
		// 	de: "/benutzer/[id=int]/[...rest]",
		// 	fr: "/utilisateur/[id=int]/[...rest]",
		// },
	},

	// If you're using matchers in the pathnames, you need to pass them
	// matchers: { int	}
})