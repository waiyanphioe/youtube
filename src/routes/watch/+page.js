export async function load({ fetch, params, url }) {
	let v = url.searchParams.get('v');
	const data = { url: `https://www.youtube.com/watch?v=${v}` };

	const response = await fetch('https://ssyoutube.com/api/convert', {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.stringify(data)
	});
	const item = response.json();

	return { item };
}
