<script lang="ts">
  import type { Location } from '$lib/cms';
  export let location: Location[];
</script>

<span>
  {#each location as { address, text }}
    &nbsp;
    <a target="_blank" href={`https://maps.google.com/?q=${address}`} rel="noreferrer">
			<i class="bx bx-map text-2xl"></i>
      &nbsp;
      {text}
    </a>
  {/each}
</span>
