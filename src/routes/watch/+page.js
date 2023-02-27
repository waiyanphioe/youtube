export async function load({ fetch, params, url }) {
	let id = url.searchParams.get('v');

	const res = await fetch(
		`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=AIzaSyDhLvl0Enr6w_2RkxnvjnsLDOubBWndUHs`
	);
	const item = await res.json();

	return { item };
}
