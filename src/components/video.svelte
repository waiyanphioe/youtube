<script>
	export let video;
</script>

<div class="m-2">
	<a href={`/watch?v=${video.id.videoId}`}
		><img src={video.snippet.thumbnails.medium.url} alt={video.title} class=" rounded-md" /></a
	>
	<div>
		<h1>{video.snippet.title}</h1>
	</div>
</div>
