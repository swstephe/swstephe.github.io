import type { BlogDocument } from '$lib/cms';
import { loadPost } from '$lib/cms';
import type { Load } from '@sveltejs/kit';

type LoadType = {
  post?: BlogDocument;
}

export const load: Load = async ({ params}): Promise<LoadType> => {
  if (params.slug == null) {
    return <LoadType>{};
  }
  const post: BlogDocument = await loadPost(params.slug);
  return <LoadType>{post};
};
