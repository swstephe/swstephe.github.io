<script lang="ts">
  export let amazon: string|null = null;
  export let text: string;
</script>

{#if amazon}
  <a href={amazon} target="_blank" rel="noreferrer">
    <i class="bx bxl-amazon"></i>&nbsp;{text}
  </a>
{:else}
  {text}
{/if}
