import React from "react";
import restaurantData from "./restaurantdata";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {restaurantData.restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          name={restaurant.name}
          cuisine={restaurant.cuisine}
          rating={restaurant.rating}
          priceRange={restaurant.priceRange}
          imageUrl={restaurant.imageUrl}
          website={restaurant.website}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
