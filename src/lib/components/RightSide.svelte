<script lang="ts">
  import type { Page, Social } from '../../cms';

  import AboutMeBlock from './AboutMeBlock.svx';
  import SocialBlock from './SocialBlock.svelte';
  import NavBar from './NavBar.svelte';

  export let pages: Page[];
</script>

<div class="space-y-5 lg:col-span-2">
  <div class="p-7 pb-0 block-section">
    <div class="mb-5 prose prose-slate dark:prose-invert">
      <AboutMeBlock />
    </div>
    <div class="border-t border-gray-200 my-5"></div>
    <NavBar pages={pages} />
  </div>
  <slot />
</div>
