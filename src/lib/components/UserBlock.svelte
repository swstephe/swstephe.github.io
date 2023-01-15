<script lang="ts">
	import { getContext } from 'svelte';
	import type { CMSData, Info } from '$lib/cms';
	import SocialBlock from '$lib/components/SocialBlock.svelte';

	const cms: CMSData = getContext('cms');
	const info: Info = cms.info;
</script>

<style>
	.cover {
		background-image: url('/images/cover.svg');
	}
</style>

<div class="shadow rounded-xl overflow-hidden">
	<div class="h-32 bg-cover cover"></div>
	<div class="pt-14 p-7 bg-white relative">
		<a href="/">
			<img src="/images/avatar.jpg" alt="Avatar" class="user-photo" />
			<div class="text-lg font-semibold mb-1.5">{info.name}</div>
		</a>
		<div class="prose-sm prose-slate mb-1.5">{info.title}</div>
		<SocialBlock />
	</div>
</div>
