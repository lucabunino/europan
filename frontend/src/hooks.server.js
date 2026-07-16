import * as runtime from '$lib/paraglide/runtime.js';
import { paraglideMiddleware } from '$lib/paraglide/server';
import { sequence } from "@sveltejs/kit/hooks";
import { redirect } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').Handle} */
const browserDetectionHandle = async ({ event, resolve }) => {
    const { url, cookies, request } = event;

    const cookieLanguage = cookies.get(runtime.cookieName);

    // If no language cookie exists, we perform the first-time detection
    if (!cookieLanguage) {
        const acceptLanguage = request.headers.get('accept-language');
        const isDe = acceptLanguage?.toLowerCase().startsWith('de');
        const isFr = acceptLanguage?.toLowerCase().startsWith('fr');

        const targetLang = isDe ? 'de' : isFr ? 'fr' : null;

        if (targetLang) {
            // 1. Set the cookie so this logic doesn't run on the next request
            // We set it for 1 year so their preference is remembered
            cookies.set(runtime.cookieName, targetLang, {
                path: '/',
                maxAge: 60 * 60 * 24 * 365,
                httpOnly: false, // Allow client-side JS to see it if needed
                sameSite: 'lax'
            });

            // 2. The home route's French URL ("/") is unprefixed, so the
            // 'url' strategy always resolves it to French before the cookie
            // strategy is ever consulted - explicitly redirect first-time
            // German visitors off the shared root path.
            if (url.pathname === '/' && targetLang !== runtime.baseLocale) {
                throw redirect(302, `/${targetLang}`);
            }
        }
    }

    return resolve(event);
};

/** @type {import('@sveltejs/kit').Handle} */
const paraglideHandle = ({ event, resolve }) =>
    paraglideMiddleware(event.request, ({ request, locale }) => {
        event.request = request;
        event.locals.paraglide = { lang: locale };
        return resolve(event, {
            transformPageChunk: ({ html }) =>
                html
                    .replace('%paraglide.lang%', locale)
                    .replace('%paraglide.textDirection%', runtime.getTextDirection(locale))
        });
    });

/** @type {import('@sveltejs/kit').Handle} */
async function preloadAssets({ event, resolve }) {
    return await resolve(event, {
        preload: ({ type, path }) =>
            ['js', 'css', 'font'].includes(type) || path.includes('/important/')
    });
}

// Order:
// 1. Detection & Cookie setting
// 2. Paraglide routing logic
// 3. Asset preloading
export const handle = sequence(
    browserDetectionHandle,
    paraglideHandle,
    preloadAssets
);
