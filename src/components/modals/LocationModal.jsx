"use client";
import React from "react";
import { useState } from "react";

const LocationModal = () => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Location:", location);
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("location-modal").showModal()}
      >
        Update Location
      </button>

      <dialog id="location-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Enter Your Location</h3>
          <p className="py-4">Please enter your location below.</p>
          <input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={handleLocationChange}
            className="p-2"
          />

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn m-2" onClick={handleSubmit}>
                Submit
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default LocationModal;
