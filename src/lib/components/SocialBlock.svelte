<script lang="ts">
  import type { Social } from '../../cms';

  export let social: Social[];
</script>

<div class="flex flex-col space-y-4">
  <ul class="flex space-x-5">
    <li>
      <a href="mailto:scott@nuruq.com" class="social-link social-link-hover">
        <i class="bx bx-at text-xl"></i>
        <span>scott@nuruq.com</span>
      </a>
    </li>
    {#each social as link}
      <li>
        <a href={link.link} class="social-link social-link-hover">
          <i class={`bx ${link.icon} text-xl`}></i>
        </a>
      </li>
    {/each}
  </ul>
</div>
