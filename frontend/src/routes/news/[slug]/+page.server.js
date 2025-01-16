import { getNews } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const news = await getNews(params.slug);
  if (news) {
    return {
      news,
    };
  }
  throw error(404, 'Not found');
}