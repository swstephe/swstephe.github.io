<script lang="ts">
  import type { Skill } from '../../cms';
  export let skill: Skill;
</script>

<span class="skill-tag">
  {#if skill.icon}<i class={`bx ${skill.icon}`}></i>{/if}
  {skill.skill}
</span>
