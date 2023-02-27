<script>
	import Video from '../components/video.svelte';

	export let data;

	const videos = data.item.items;
</script>

<div class=" grid grid-cols-footer ">
	<div class="">HI</div>
	<div class=" p-2 grid grid-cols-4 gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
		{#each videos as video}
			<Video {video} />
		{/each}
	</div>
</div>

<style>
</style>
