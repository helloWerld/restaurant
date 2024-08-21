import React from "react";
import restaurantData from "./restaurantdata";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {restaurantData.restaurants && restaurantData.restaurants.length > 0 ? (
        restaurantData.restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
            priceRange={restaurant.priceRange}
            imageUrl={restaurant.imageUrl}
            website={restaurant.website}
          />
        ))
      ) : (
        <p>No restaurants available</p>
      )}
    </div>
  );
};

export default RestaurantList;
