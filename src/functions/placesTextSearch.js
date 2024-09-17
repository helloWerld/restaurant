export const placesTextSearch = async (query, pageSize) => {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Goog-Api-Key': process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
			'X-Goog-FieldMask': '*',
		},
		body: JSON.stringify({
			// prettier-ignore
			"textQuery": query,
			// prettier-ignore
			"pageSize": pageSize,
		}),
	};
	try {
		const response = await fetch(
			'https://places.googleapis.com/v1/places:searchText',
			requestOptions
		);
		const data = await response.json();
		console.log('response', data);
		//console.log('SINGLE ITEM', data?.contextualContents[0].photos);
		return data;
	} catch (error) {
		throw new Error(error);
	}
};
