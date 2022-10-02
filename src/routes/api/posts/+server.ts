import { compareDateStrings, fetchBlogPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allPosts = await fetchBlogPosts();
  const sortedPosts = allPosts.sort((a, b) => compareDateStrings(a.meta.date, b.meta.date));
  return json(sortedPosts);
};
