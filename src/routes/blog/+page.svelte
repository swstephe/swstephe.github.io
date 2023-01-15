<script lang="ts">
  import { getContext } from 'svelte';
  import dayjs from 'dayjs';

  import type { CMSData, BlogDocument } from '$lib/cms';

  const cms: CMSData = getContext('cms');
  const blog: BlogDocument[] = cms.blog;
</script>

<svelte:head>
  <title>Scott Stephens | Blog</title>
</svelte:head>

{#each blog as post}
  <a href={`/blog/${post.slug}`} class="article-title-hover block">
    <article class="article-section">
      <div class="space-y-3 mb-5 p-7 pb-0">
        <h2 class="text-lg font-semibold">{post.title}</h2>
        <p class="text-gray-600">{post.summary}</p>
        <p>
          <i class="bx bx-calendar text-xl"></i>
          <time datetime={post.timestamp} class="text-sm text-gray-500">
            {dayjs(post.timestamp).format('MMMM D, YYYY')}
          </time>
        </p>
      </div>
      {#if post.image}
        <div class="article-img">
          <img src={post.image} alt="">
        </div>
      {/if}
    </article>
  </a>
{/each}
