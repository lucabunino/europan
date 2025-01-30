/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		preload: ({ type, path }) => 
			['js', 'css', 'font'].includes(type) || path.includes('/important/')
	});

	return response;
}