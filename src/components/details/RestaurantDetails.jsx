import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
// restaurant details at top of modal with option to view map/directions
// You should replace this with your actual Google Maps API key
const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

class RestaurantInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null,
    };
  }

  componentDidMount() {
    this.fetchRestaurantDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.placeId !== this.props.placeId) {
      this.fetchRestaurantDetails();
    }
  }

  fetchRestaurantDetails = () => {
    // In a real application, you would call your Firebase backend here
    // which would then use the Places API to get the restaurant details
    // For this example, we'll simulate the API call
    setTimeout(() => {
      const mockRestaurantDetails = {
        name: "Yum Yum Restaurant",
        address: "123 Delicious St, Foodville, YM 12345",
        rating: 4.5,
        priceLevel: 2,
        phoneNumber: "+1 (555) 123-4567",
        website: "https://www.yumyumrestaurant.com",
        lat: 37.7749,
        lng: -122.4194,
      };
      this.setState({ restaurant: mockRestaurantDetails });
    }, 1000);
  };

  render() {
    const { restaurant } = this.state;

    if (!restaurant) {
      return (
        <div className="text-center p-4">Loading restaurant information...</div>
      );
    }

    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="mb-2">
              <strong>Address:</strong> {restaurant.address}
            </p>
            <p className="mb-2">
              <strong>Rating:</strong> {restaurant.rating} stars
            </p>
            <p className="mb-2">
              <strong>Price Level:</strong> {"$".repeat(restaurant.priceLevel)}
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> {restaurant.phoneNumber}
            </p>
            <p className="mb-2">
              <strong>Website:</strong>{" "}
              <a
                href={restaurant.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {restaurant.website}
              </a>
            </p>
          </div>
          <div className="h-64 md:h-auto">
            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerClassName="w-full h-full"
                center={{ lat: restaurant.lat, lng: restaurant.lng }}
                zoom={15}
              >
                <Marker
                  position={{ lat: restaurant.lat, lng: restaurant.lng }}
                />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantInfo;
