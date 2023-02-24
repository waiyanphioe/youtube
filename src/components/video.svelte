<script>
	export let video;
</script>

<div class="m-2">
	<a href={`/watch?v=${video.id}`}><img src={video.img} alt={video.title} class=" rounded-md" /></a>
	<div>
		<h1>{video.title}</h1>
	</div>
</div>
