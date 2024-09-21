"use client";

import { useState, useEffect, useRef } from "react";
// not sure if I need this next/script
import { Script } from "next/script";

export default function DirectionsMap({ destination }) {
  const [showMap, setShowMap] = useState(false);
  const [origin, setOrigin] = useState(null);
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState(null);

  // Danny, I don't know if this next bit is like the modal we discussed bc of the new window
  useEffect(() => {
    if (showMap && mapLoaded && origin) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 },
        zoom: 3,
      });

      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();

      directionsRenderer.setMap(map);

      const request = {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, (result, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(result);
        } else {
          setError("Unable to find directions. Please try again.");
        }
      });
    }
  }, [showMap, mapLoaded, origin, destination]);

  const handleGetDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setOrigin(`${latitude},${longitude}`);
          setShowMap(true);
        },
        () => {
          setError(
            "Unable to retrieve your location. Please enable location services."
          );
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Get Directions</h2>
          <div className="mb-4">
            <button className="btn btn-primary" onClick={handleGetDirections}>
              Get Directions
            </button>
          </div>
          {error && <div className="alert alert-error">{error}</div>}
          {showMap && <div ref={mapRef} className="w-full h-96 rounded-box" />}
        </div>
      </div>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY`}
        onLoad={() => setMapLoaded(true)}
      />
    </div>
  );
}
