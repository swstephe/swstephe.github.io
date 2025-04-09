<script lang="ts">
  import '../app.css';
  import { setContext } from 'svelte';
  import type { CMSData } from '$lib/cms';

  import LeftSide from '$lib/components/LeftSide.svelte';
  import RightSide from '$lib/components/RightSide.svelte';

  let { children, data } = $props();
  const cms: CMSData = data.cms;
  setContext('cms', cms);

</script>

<svelte:head>
  <meta name="description" content="">
  <meta name="author" content="Scott Stephens <zahi.stephens@gmail.com>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css">
</svelte:head>

<main class="main-container">
  <div class="grid gap-5 lg:grid-cols-3">
    <LeftSide />
    <RightSide>
      {@render children()}
    </RightSide>
  </div>
</main>
