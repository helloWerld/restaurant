import Link from "next/link";
import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

const RestaurantCard = ({
  name,
  cuisine,
  rating,
  priceRange,
  imageUrl,
  website,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="card card-side shadow-2xl image-full">
        <figure>
          <img
            src={imageUrl}
            alt={`Photo of ${name}`}
            className="rounded-2xl"
          />
        </figure>
        <div className="card-body flex flex-col items-center justify-center">
          <h2 className="card-title mb-3">{name}</h2>
          <div className="card-actions flex flex-col items-center">
            <div className="flex gap-2 mb-2">
              <div className="badge badge-primary">{cuisine}</div>
              <div className="badge badge-primary">{rating}</div>
              <div className="badge badge-primary">{priceRange}</div>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-accent">
                <FaRegStar size={16} />
              </button>
              <Link href="">
                <button className="btn btn-secondary">
                  <TbWorldWww size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
