<script lang="ts">
  import { getContext } from 'svelte';
  import type { CMSData, Social } from '$lib/cms';

  const cms: CMSData = getContext('cms');
  const social: Social[] = cms.social;
</script>

<div class="flex flex-col space-y-4">
  <ul class="flex space-x-5">
    {#each social as link}
      <li>
        <a href={link.link} class="social-link social-link-hover">
          {#if link.name === 'email'}
            <span>scott@nuruq.com</span>
          {:else}
            <i class={`bx ${link.icon} text-xl`}></i>
          {/if}
        </a>
      </li>
    {/each}
  </ul>
</div>
