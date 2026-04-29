import { i18n } from "$lib/i18n";
import { sequence } from "@sveltejs/kit/hooks";
import { redirect } from "@sveltejs/kit";

// /** @type {import('@sveltejs/kit').Handle} */
// const browserDetectionHandle = async ({ event, resolve }) => {
//     const { url, cookies, request } = event;
    
//     const acceptLanguage = request.headers.get('accept-language');
//     const cookieLanguage = cookies.get('paraglide_lang');

//     If no language cookie exists, we perform the first-time detection
//     if (!cookieLanguage && acceptLanguage) {
//         const isDe = acceptLanguage.toLowerCase().startsWith('de');
//         const isFr = acceptLanguage.toLowerCase().startsWith('fr');
        
//         let targetLang = isDe ? 'de' : isFr ? 'fr' : null;

//         if (targetLang) {
//             // 1. Set the cookie so this logic doesn't run on the next request
//             // We set it for 1 year so their preference is remembered
//             cookies.set('paraglide_lang', targetLang, {
//                 path: '/',
//                 maxAge: 60 * 60 * 24 * 365,
//                 httpOnly: false, // Allow client-side JS to see it if needed
//                 sameSite: 'lax'
//             });

//             // 2. If they are currently on the root, redirect them to the prefixed version
//             if (url.pathname === '/') {
//                 throw redirect(302, `/${targetLang}`);
//             }
//         }
//     }

//     return resolve(event);
// };

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
    // browserDetectionHandle, 
    i18n.handle(), 
    preloadAssets
);