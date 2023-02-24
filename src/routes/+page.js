export const load = async ({ fetch, params }) => {
	const res = await fetch('/api/videos');
	const item = await res.json();
	return { item };
};
