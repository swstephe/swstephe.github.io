<script lang="ts">
  export let amazon: string|null = null;
  export let text: string;
</script>

{#if amazon}
  <a href={amazon} target="_blank">
    <i class="bx bxl-amazon"></i>&nbsp;{text}
  </a>
{:else}
  {text}
{/if}
