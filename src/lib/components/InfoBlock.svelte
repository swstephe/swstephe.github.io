<script lang="ts">
  import { getContext } from 'svelte';
  import type { CMSData } from '$lib/cms';

  const cms: CMSData = getContext('cms');
  const info = cms.info;
</script>

<div class="p-7 block-section">
  <h2 class="block-title">Information</h2>
  <div class="space-y-4">
    <div class="flex justify-between">
      <div class="text-gray-400">Location</div>
      <div class="font-medium text-right text-gray-500">{info.location}</div>
    </div>
    <div class="flex justify-between">
      <div class="text-gray-400">Experience</div>
      <div class="font-medium text-right text-gray-500">{info.experience}</div>
    </div>
    <div class="flex justify-between">
      <div class="text-gray-400">Availability</div>
      <div class="font-medium text-right text-gray-500">{info.availability}</div>
    </div>
  </div>
</div>
