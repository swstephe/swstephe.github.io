<script lang="ts">
	export let location: { address: string, text: string }[];
</script>

<span>
	{#each location as location}
		&nbsp;
		<a target="_blank" href={`https://maps.google.com/?q=${location.address}`}>
			<i class="bx bx-map text-2xl"></i>
			{location.text}
		</a>
	{/each}
</span>