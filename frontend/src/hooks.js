// src/hooks.js
import { deLocalizeUrl } from '$lib/paraglide/runtime';

/** @type {import('@sveltejs/kit').Reroute} */
export const reroute = ({ url }) => deLocalizeUrl(url).pathname;
