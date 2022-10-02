<script lang="ts">
  import { page } from '$app/stores';
  import { Page } from '../../cms';

  export let pages: Page[];
  let path;

  $: path = $page.url.pathname;

  function matchPath(url) {
    return url === '/' ? path === '/' : path === url || path.startsWith(url);
  }
</script>

<ul class="flex space-x-8 font-medium">
  {#each pages as page}
    <li>
      <a href={page.url} class:menu-link-active={matchPath(page.url)} class="menu-link-hover">{page.title}</a>
    </li>
  {/each}
</ul>
