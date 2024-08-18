import React from "react";

const RestaurantCard = () => {
  return (
    <div className="flex flex-col items-center p-20">
      <div className="card bg-base-300 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title mb-3">Restaurant Name</h2>
          <div className="card-actions justify-center">
            <div className="badge badge-outline">Cuisine</div>
            <div className="badge badge-outline">Rating</div>
            <div className="badge badge-outline">$$$</div>
            <div className="card-actions">
              <button className="btn btn-primary">Favorite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
