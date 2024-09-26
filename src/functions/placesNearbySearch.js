export const placesNearbySearch = async (filters) => {
	console.log('Filters', filters);
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Goog-Api-Key': process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
			'X-Goog-FieldMask':
				'places.displayName,places.photos,places.primaryType,places.id,places.priceLevel,places.rating',
		},
		body: JSON.stringify({
			includedTypes:
				filters.cuisine.length > 0 ? filters.cuisine : ['restaurant'],
			maxResultCount: 12,
			locationRestriction: filters.location,
		}),
	};

	try {
		const response = await fetch(
			'https://places.googleapis.com/v1/places:searchNearby',
			requestOptions
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		throw new Error(error);
	}
};
