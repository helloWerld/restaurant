"use client";
import React, { useState } from "react";
import RestaurantDetails from "./RestuarantDetails";

const ResDetailsMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleOpenModal = () => {
    setSelectedRestaurant({
      name: "Pasta Paradise",
      location: "456 Noodle Ave, SauceTown, NY 10001",
      price: 3,
      rating: 4.7,
      cuisine: "Italian",
      hours: "Daily: 11:00 AM - 11:00 PM",
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="btn btn-wide btn-ghost" onClick={handleOpenModal}>
        Open Restaurant Details
      </button>
      <RestaurantDetails
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        restuarant={selectedRestaurant}
        closeModal={handleCloseModal}
      />
    </div>
  );
};

export default ResDetailsMain;
