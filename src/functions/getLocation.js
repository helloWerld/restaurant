export const getLocation = () => {
	return new Promise((resolve) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					console.log('position', {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					});
					resolve({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					});
				},
				(error) => {
					alert(`ERROR: Could not retrieve location. ${error.message}`);
					resolve({
						latitude: null,
						longitude: null,
					});
				}
			);
		} else {
			alert('Please enable geolocation for this feature.');
		}
	});
};
