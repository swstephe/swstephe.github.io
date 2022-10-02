<script lang="ts">
  import '../app.css';
  import type { CMSData } from '../cms';
  import { setContext } from 'svelte';

  import LeftSide from '../lib/components/LeftSide.svelte';
  import RightSide from '../lib/components/RightSide.svelte';

  export let data: CMSData;
  setContext('cms', data);
  const title = data.page.url === '/' ? 'Scott Stephens' : data.page.title;
</script>

<svelte:head>
  <meta name="description" content="">
  <meta name="author" content="Scott Stephens <scott@nuruq.com>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css">
  <title>{title}</title>
</svelte:head>

<main class="main-container">
  <div class="grid gap-5 lg:grid-cols-3">
    <LeftSide skills={data.skills} social={data.social} />
    <RightSide page={data.page}  pages={data.pages}>
      <slot />
    </RightSide>
  </div>
</main>
