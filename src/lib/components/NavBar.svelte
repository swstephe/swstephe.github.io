<script lang="ts">
  import type { CMSData } from '$lib/cms';
  import { getContext } from 'svelte';
  import { page } from '$app/stores';

  const cms: CMSData = getContext('cms');

  let path: string;
  $: path = $page.url.pathname;

  const matchPath = (url: string): boolean => (
    url === '/'
      ? path === '/'
      : path === url || path.startsWith(url)
  );
</script>

<ul class="flex space-x-8 font-medium">
  {#each cms.pages as { url, title }}
    <li>
      <a href={url}
         class:menu-link-active={matchPath(url)}
         class="menu-link-hover">{title}</a>
    </li>
  {/each}
</ul>
