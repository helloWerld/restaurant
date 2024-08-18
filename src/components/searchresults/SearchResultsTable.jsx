import React from "react";
import restaurantData from "./restaurantdata";

const SearchResultsTable = () => {
  return (
    <div className="overflow-x-auto flex justify-center mt-3">
      <table className="table-xs md:table-lg table-zebra table-pin-cols border border-accent">
        {/* head */}
        <thead className="bg-secondary text-secondary-content text-sm">
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Rating</th>
            <th>Price Range</th>
          </tr>
        </thead>
        <tbody>
          {restaurantData.restaurants.map((restaurant) => (
            <tr className="text-center" key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.cuisine}</td>
              <td>{restaurant.rating}</td>
              <td>{restaurant.priceRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResultsTable;
