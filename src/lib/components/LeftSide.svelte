<script lang="ts">
  import type { Skill, Social } from '../../cms';

  import InfoBlock from './InfoBlock.svelte';
  import UserBlock from './UserBlock.svelte';
  import SkillsBlock from './SkillsBlock.svelte';

  export let social: Social[];
  export let skills: Skill[];
</script>

<div class="space-y-5">
  <UserBlock social={social} />
  <InfoBlock />
  <SkillsBlock skills={skills} />
</div>
