import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params}) => {
  const post = await import(`../../../cms/posts/${params.slug}.md`);
  const { title, date } = post.metadata;
  const content = post.default;
  return {
    content,
    title,
    date
  }
};
