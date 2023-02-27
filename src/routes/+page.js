export const load = async ({ fetch, params }) => {
	const res = await fetch(
		'https://youtube.googleapis.com/youtube/v3/search?maxResults=50&part=snippet&regionCode=mm&type=video&key=AIzaSyDhLvl0Enr6w_2RkxnvjnsLDOubBWndUHs'
	);
	const item = await res.json();

	return { item };
};
