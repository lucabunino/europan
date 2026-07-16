# Upgrade frontend deps across several majors, paraglide isolated

Frontend deps were behind across the board, several by multiple majors: `@inlang/paraglide-js` v1→v2 (the i18n engine — different runtime API, not a drop-in bump), `vite` v5→v8, `@sveltejs/adapter-vercel` v5→v6, `@sanity/client`/`@sanity/image-url` majors, `swiper` v11→v14 (a critical prototype-pollution fix, previously deferred), `nodemailer` v6→v9.

Given paraglide drives every page's routing and message functions, it's treated as its own isolated upgrade stage with focused verification (`messages/`, `i18n.js`, `hooks.server.js`, generated routes), separate from the SvelteKit/Vite/adapter toolchain stage and a final lower-risk stage for everything else. Done on a throwaway branch (`deps/frontend-major-upgrade`).

No headless browser is available in this environment, so verification is `npm run build` (compile-time) plus `curl` smoke checks against a handful of representative routes per language (home, a localized path, a dynamic competition route, an archive route) to catch runtime routing/i18n breakage that a clean build wouldn't. A full visual click-through in a real browser is the user's responsibility before merging.
