<script lang="ts">
  import type {Skill} from '../../cms';
  import SkillTag from './SkillTag.svelte';

  export let skills: Skill[];
</script>

<div class="p-7 bg-white shadow rounded-xl flow-root">
  <h2 class="block-title">Skills</h2>
  <div class="-m-2 flex flex-wrap">
    {#each skills as skill}
      <SkillTag skill={skill} />
    {/each}
  </div>
</div>