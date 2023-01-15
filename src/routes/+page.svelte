<script lang="ts">
  import { getContext } from 'svelte';
  import type { CMSData, Experience } from '$lib/cms';
  import { formatYears } from '$lib/utils';
  import Location from '$lib/components/Location.svelte';

  const cms: CMSData = getContext('cms');
  const experience: Experience[] = cms.experience;
</script>

<svelte:head>
  <title>Scott stephens</title>
</svelte:head>

<div class="p-7 block-section">
  <h2 class="block-title">Experience</h2>
  {#each experience as exp}
    <div class="mb-5 item-section">
      <div class="company-logo">
        {#if exp.logo}
          {#if exp.link}
            <a href={exp.link} target="_blank" rel="noreferrer">
              <img class="h-12 w-12" src={exp.logo} alt="logo" />
            </a>
          {:else}
            <img class="h-12 w-12" src="/images/{exp.logo}" alt="logo" />
          {/if}
        {/if}
      </div>
      <div class="w-full space-y-5">
        <div class="item-header">
          <div class="space-y-1.5">
            <div class="font-medium">{exp.title}</div>
            <div class="flex space-x-5 align-baseline">
              <div class="item-header-info">
                {#if exp.link}
                  <a href={exp.link} target="_blank" rel="noreferrer"><span>{exp.company}</span></a>
                {:else}
                  <span>{exp.company}</span>
                {/if}
              </div>
              <div class="item-header-info">
                <Location location={exp.location} />
              </div>
            </div>
          </div>
          <div class="space-y-2 sm:text-right">
            <div class="job-item-badge">{exp.consultant ? 'Contract' : ''}</div>
            <div class="item-header-info">
              <span><i class="bx bx-calendar text-2xl"></i> {formatYears(exp.date1, exp.date2)}</span>
            </div>
          </div>
        </div>
        <p class="text-gray-600">{exp.summary}</p>
        <div class="border-b border-gray-200"></div>
      </div>
    </div>
  {/each}
</div>
