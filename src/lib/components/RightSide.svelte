<script lang="ts">
  import { getContext } from 'svelte';
  import type { Blurb, CMSData } from '$lib/cms';

  import NavBar from './NavBar.svelte';

  const cms: CMSData = getContext('cms')
  const about: Blurb = cms.blurbs.about;
</script>

<div class="space-y-5 lg:col-span-2">
  <div class="p-7 pb-0 block-section">
    <div class="mb-5 prose prose-slate dark:prose-invert">
      {@html about.content}
    </div>
    <div class="border-t border-gray-200 my-5"></div>
    <NavBar />
  </div>
  <slot />
</div>
