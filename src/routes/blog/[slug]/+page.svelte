<script lang="ts">
  import dayjs from 'dayjs';

  import type { BlogDocument } from '$lib/cms';

  export let data;
  const post: BlogDocument = data.post;
</script>

<svelte:head>
  <title>Scott Stephens | {post.title}</title>
</svelte:head>

<article class="single-article-section prose prose-slate lg:prose-xl dark:prose-invert">
  {#if post.image}
    <div class="single-article-mg rounded-t-xl">
      <img src={post.image} alt="" />
    </div>
  {/if}
  <div class="space-y-7 mb-5 p-7 pb-0">
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">{post.title}</h2>
      <p><time class="text-sm text-gray-400">{dayjs(post.timestamp).format('MMM D, YYYY')}</time></p>
    </div>
    {@html post.article}
  </div>
</article>
