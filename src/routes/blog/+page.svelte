<script lang="ts">
  import { getContext } from 'svelte';
  import dayjs from 'dayjs';

  const cms = getContext('cms');
  export let data;
</script>

{#each data.posts as post}
  <a href={post.path} class="article-title-hover block">
    <article class="article-section">
      <div class="space-y-3 mb-5 p-7 pb-0">
        <h2 class="text-lg font-semibold">{post.meta.title}</h2>
        <p class="text-gray-600">{post.meta.summary}</p>
        <p>
          <i class="bx bx-calendar text-xl"></i>
          &nbsp;
          <time datetime={post.meta.date} class="text-sm text-gray-500">
            {dayjs(post.meta.date).format('MMMM D, YYYY')}
          </time>
        </p>
      </div>
      {#if post.meta.image}
        <div class="article-img">
          <img src={post.meta.image} alt="">
        </div>
      {/if}
    </article>
  </a>
{/each}
