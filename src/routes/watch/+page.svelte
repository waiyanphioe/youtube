<script>
	import { page } from '$app/stores';
	const videoData = $page.data.item;
	const vv = 'https://www.w3schools.com/tags/movie.mp4';
</script>

<div class="p-8 grid grid-cols-xxl xl:grid-cols-xl lg:grid-cols-lg">
	<div class="">
		<video src={videoData.url[0].url} class=" w-full aspect-video" controls>
			<track kind="captions" />
			<source src="movie.mp4" type="video/mp4" />
			<source src="movie.ogg" type="video/ogg" />
			Your browser does not support the video tag.
		</video>
		<h1 class=" text-lg">{videoData.meta.title}</h1>
	</div>
	<div class=""><h1 class="text-white">Hi {videoData.id}</h1></div>
</div>
