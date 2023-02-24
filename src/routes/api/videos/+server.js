import { json } from '@sveltejs/kit';
import { videos } from '$lib/videos.js';

export const GET = () => {
	return json(videos);
};
