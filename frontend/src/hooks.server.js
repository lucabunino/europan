// import { i18n } from '$lib/i18n';
// import { sequence } from '@sveltejs/kit/hooks';

// /** @type {import('@sveltejs/kit').Handle} */
// async function preloadAssets({ event, resolve }) {
// 	const response = await resolve(event, {
// 		preload: ({ type, path }) =>
// 			['js', 'css', 'font'].includes(type) || path.includes('/important/')
// 	});
// 	return response;
// }

// // Combine both handlers
// export const handle = sequence(i18n.handle(), preloadAssets);


import { i18n } from '$lib/i18n'; 
import { sequence } from '@sveltejs/kit/hooks';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = sequence(i18n.handle());