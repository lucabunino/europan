import { getNews } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ params, depends, locals }) {
  depends("paraglide:lang")
  const news = await getNews(params.slug, locals.paraglide.lang);
  if (news) {
    return {
      news,
    };
  }
  throw error(404, 'Not found');
}