<script>
	import { page } from '$app/stores';
	const videoData = $page.data.item;
</script>

<div class="p-8 grid grid-cols-xxl xl:grid-cols-xl lg:grid-cols-lg">
	<div class="">
		<!-- <video src={videoData.url[0].url} class=" w-full aspect-video" controls>
			<track kind="captions" />
			<source src="movie.mp4" type="video/mp4" />
			<source src="movie.ogg" type="video/ogg" />
			Your browser does not support the video tag.
		</video> -->

		<iframe
			class="w-full aspect-video"
			src={`https://www.youtube.com/embed/${videoData.items['0'].id}`}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
		<h1 class=" text-lg">{videoData.items['0'].snippet.title}</h1>
	</div>
	<div class=""><h1 class="text-white">Hi</h1></div>
</div>
