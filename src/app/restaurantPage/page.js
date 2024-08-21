import RestaurantList from "@/components/restaurantResults/RestaurantList";
import React from "react";

const RestaurantPage = () => {
  return (
    <main className="min-h-screen max-w-screen p-4 overflow-x-clip">
      <RestaurantList />
    </main>
  );
};

export default RestaurantPage;
