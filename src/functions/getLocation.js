export const getLocation = () => {
	return new Promise((resolve) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					console.log('position', {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					});
					console.log('Getting human readable address...');
					const response = await fetch(
						`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&result_type=street_address&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
					);
					const addressData = await response.json();
					console.log('ADDRESS:', addressData);
					if (addressData.status === 'OK') {
						resolve({
							latitude: position.coords.latitude,
							longitude: position.coords.longitude,
							address: addressData?.results[0]?.formatted_address,
						});
					} else {
						alert('Could not resolve mailing address for lat/long');
						resolve({
							latitude: 39.7817,
							longitude: -89.6501,
							address: '123 Elm Street, Springfield, IL 62701 United States',
						});
					}
				},
				(error) => {
					alert(`ERROR: Could not retrieve location. ${error.message}`);
					resolve({
						latitude: 39.7817,
						longitude: -89.6501,
						address: '123 Elm Street, Springfield, IL 62701 United States',
					});
				}
			);
		} else {
			alert('Please enable geolocation for this feature.');
		}
	});
};
