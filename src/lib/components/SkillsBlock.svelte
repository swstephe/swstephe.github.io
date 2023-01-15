<script lang="ts">
  import { getContext } from 'svelte';
  import type {CMSData, Skill} from '$lib/cms';
  import SkillTag from './SkillTag.svelte';

  const cms: CMSData = getContext('cms');
  const skills: Skill[] = cms.skills;
</script>

<div class="p-7 bg-white shadow rounded-xl flow-root">
  <h2 class="block-title">Skills</h2>
  <div class="-m-2 flex flex-wrap">
    {#each skills as skill}
      <SkillTag skill={skill} />
    {/each}
  </div>
</div>