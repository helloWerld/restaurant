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
    <article className="card card-side shadow-2xl image-full size-72 rounded">
      <figure>
        <img src={imageUrl} alt={`Photo of ${name || "restaurant"}`} />
      </figure>
      <div className="card-body flex flex-col items-center justify-center">
        <h2 className="card-title mb-3">{name}</h2>
        <div className="card-actions flex flex-col items-center">
          <div className="flex gap-2 mb-2">
            <div className="badge badge-secondary">{cuisine}</div>
            <div className="badge badge-secondary">{rating}</div>
            <div className="badge badge-secondary">{priceRange}</div>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-primary" aria-label="Rate Restaurant">
              <FaRegStar size={16} />
            </button>
            {website && (
              <Link href={website}>
                <button className="btn btn-primary" aria-label="Visit Website">
                  <TbWorldWww size={16} />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

RestaurantCard.defaultProps = {
  rating: "No rating",
  priceRange: "N/A",
  imageUrl: "default-image.jpg",
};

export default RestaurantCard;
