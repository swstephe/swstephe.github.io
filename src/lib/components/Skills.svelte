<script lang="ts">
  import { getContext } from 'svelte';
  import type { CMSData, Skill } from '$lib/cms';

  const cms: CMSData = getContext('cms');
  const skills: Skill[] = cms.skills;
</script>

<h4>Skills</h4>
{#each skills as skill}
  <div class="text-white bg-gray-500 h-12 m-2 py-1 px-3" style={`width: ${skill.prof}%;`}>
    {skill.skill} ({skill.prof}%)
  </div>
{/each}
