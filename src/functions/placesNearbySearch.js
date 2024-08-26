export const placesNearbySearch = async () =>
	// locationRestriction,
	// includedTypes,
	// maxResultsCount,
	// searchFilters
	{
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Goog-Api-Key': process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
				'X-Goog-FieldMask': 'places.displayName',
			},
			body: JSON.stringify({
				includedTypes: ['restaurant'],
				maxResultCount: 9,
				locationRestriction: {
					circle: {
						center: {
							latitude: 37.7937,
							longitude: -122.3965,
						},
						radius: 500.0,
					},
				},
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
