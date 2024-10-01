"use client";
import React, { useState } from "react";
import {
  LuMapPin,
  LuDollarSign,
  LuClock,
  LuUtensils,
  LuStar,
  LuXCircle,
} from "react-icons/lu";
import MapImgPlaceholder from "../../../public/mapplaceholder.jpg";

const RestaurantDetails = ({ isOpen, onClose, restuarant, closeModal }) => {
  const [showMap, setShowMap] = useState(false);

  // default restaurant data
  const defaultRestaurant = {
    name: "Delicious Bites",
    location: "123 Foodie St, Somewhere, CA 90210",
    price: 3,
    rating: 4.5,
    cuisine: "Italian",
    hours: "Mon-Sat: 11:00 AM - 10:00 PM, SUN: 12:00 PM - 9:00 PM",
  };

  // use default if no restuarant provided
  const { name, location, price, rating, cuisine, hours } =
    restuarant || defaultRestaurant;

  return (
    <dialog
      open={isOpen}
      onOpenChange={onClose}
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <h3 className="font-bold text-2xl">{name}</h3>
        <div className="mt-4 space-y-4">
          <div className="flex items-center space-x-2">
            <LuMapPin className="h-5 w-5 text-gray-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <LuDollarSign className="h-5 w-5 text-gray-500" />
            <span>{"$".repeat(price)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <LuStar className="h-5 w-5 text-gray-500" />
            <span>{rating} / 5</span>
          </div>
          <div className="flex items-center space-x-2">
            <LuUtensils className="h-5 w-5 text-gray-500" />
            <span>{cuisine}</span>
          </div>
          <div className="flex items-center space-x-2">
            <LuClock className="h-5 w-5 text-gray-500" />
            <span>{hours}</span>
          </div>
        </div>
        <div className="mt-6 flex flex-row items-center justify-between">
          <button
            onClick={() => setShowMap(!showMap)}
            className="btn w-40 h-auto"
          >
            {showMap ? "Hide Map" : "Get Directions"}
          </button>

          <button className="btn w-40 h-auto" onClick={closeModal}>
            <LuXCircle className="h-5 w-5 text-gray-500" /> close
          </button>
        </div>
        {showMap && (
          <div className="mt-4 h-64 bg-gray-200 rounded-md overflow-hidden">
            <img
              src={MapImgPlaceholder.src}
              alt="Map"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </dialog>
  );
};

export default RestaurantDetails;
