export async function POST(request) {
	const body = await request.json();
	console.log(body);
	const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
		body.textQuery
	)}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
	const response = await fetch(url);
	console.log('response', response);
	const data = await response.json();
	return Response.json({ data });
}
