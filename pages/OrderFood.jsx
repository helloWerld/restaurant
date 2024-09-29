"use client";

import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API requests
import styles from "./OrderFood.module.css";

const OrderFood = () => {
  const router = useRouter();
  const { restaurant } = router.query;

  const [selectedRestaurant, setSelectedRestaurant] = useState({
    name: restaurant || "Selected Restaurant",
    imageUrl: "/img/icon.png", // Default image URL as a string
  });

  useEffect(() => {
    const unsplashApiKey = process.env.NEXT_PUBLIC_UNSPLASH_API_KEY; // Access environment variable

    if (restaurant) {
      const fetchRestaurantImage = async () => {
        try {
          const response = await axios.get(
            `https://api.unsplash.com/search/photos`,
            {
              params: {
                query: restaurant,
                client_id: unsplashApiKey, // Use the environment variable here
              },
            }
          );
          const imageUrl =
            response.data.results[0]?.urls?.regular || "/img/icon.png";
          setSelectedRestaurant({
            name: restaurant,
            imageUrl,
          });
        } catch (error) {
          console.error("Error fetching image from Unsplash:", error);
        }
      };

      fetchRestaurantImage();
    }
  }, [restaurant]);

  const [service, setService] = useState("");
  const services = {
    UberEats: {
      name: "UberEats",
      logo: "/img/ubereats-logo.png",
      url: "https://www.ubereats.com/",
      color: "#5fb709",
    },
    Grubhub: {
      name: "Grubhub",
      logo: "/img/grubhub-logo.png",
      url: "https://grubhub.com/",
      color: "#f74a4a",
    },
    DoorDash: {
      name: "DoorDash",
      logo: "/img/doordash-logo.png",
      url: "https://doordash.com/",
      color: "#ff6b00",
    },
  };

  const handleServiceClick = (serviceKey) => {
    const selectedService = services[serviceKey];
    setService(selectedService.name);
  };

  const handleOrder = () => {
    const selectedService = services[service];
    if (selectedService) {
      window.open(selectedService.url, "_blank");
    } else {
      alert("Please select a service.");
    }
  };

  return (
    <div className={styles.orderFoodContainer}>
      <h2 className={styles.heading}>Order from {selectedRestaurant.name}</h2>

      <div className={styles.restaurantDetails}>
        <img
          src={selectedRestaurant.imageUrl}
          alt={selectedRestaurant.name}
          className={styles.restaurantImage}
        />
        <p>Select a delivery service:</p>

        <div className={styles.serviceButtons}>
          {Object.keys(services).map((serviceKey) => (
            <button
              key={serviceKey}
              className={styles.serviceButton}
              onClick={() => handleServiceClick(serviceKey)}
              style={{ backgroundColor: services[serviceKey].color }}
            >
              <img
                src={services[serviceKey].logo}
                alt={`${services[serviceKey].name} logo`}
                className={styles.serviceLogo}
              />
              {services[serviceKey].name}
            </button>
          ))}
        </div>

        <button onClick={handleOrder} className={styles.orderButton}>
          Order Now from {service || "..."}
        </button>
      </div>
    </div>
  );
};

export default OrderFood;
