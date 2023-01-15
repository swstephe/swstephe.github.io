<script lang="ts">
  import { getContext } from 'svelte';
  import type { CMSData, Social } from '$lib/cms';

  const cms: CMSData = getContext('cms');
  const social: Social[] = cms.social;
</script>

<div class="pl-1">
  <table class="w-full box-border">
    <tr>
      <td class="text-center align-middle">
        <img class="rounded-full" src="/images/avatar.jpg" alt="Avatar" />
      </td>
    </tr>
    <tr>
      <td class="text-center align-middle">
        <h5>Scott Stephens</h5>
        <h6>Software Engineer</h6>
      </td>
    </tr>
  </table>
  <table class="md:block hidden">
    {#each social as link}
      <tr>
        <td>
          <a href={link.link} title={link.name}>
            <img class="align-middle" src={link.icon} alt={link.name} />
          </a>
        </td>
        <td>
          <a href={link.link} title={link.name}>{link.text}</a>
        </td>
      </tr>
    {/each}
  </table>
</div>
