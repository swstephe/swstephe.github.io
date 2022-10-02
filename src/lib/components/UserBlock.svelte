<script lang="ts">
	import type { Social } from '../../cms';
	import SocialBlock from '../components/SocialBlock.svelte';
	export let social: Social[];
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
			<div class="text-lg font-semibold mb-1.5">Scott Stephens</div>
		</a>
		<div class="prose-sm prose-slate mb-1.5">Senior Software Engineer</div>
		<SocialBlock social={social} />
	</div>
</div>
