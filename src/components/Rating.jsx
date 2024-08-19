import React from "react";

const Rating = () => {
  return (
    <div className="flex flex-row justify-center rating rating-lg rating-half p-10 ">
      <input
        type="radio"
        name="rating-10"
        className="bg-accent rating-hidden "
      />
      <input
        type="radio"
        name="rating-10"
        className="mask mask-star-2 mask-half-1 bg-primary"
      />
      <input
        type="radio"
        name="rating-10"
        className="mask mask-star-2 mask-half-2 bg-primary"
      />
      <input
        type="radio"
        name="rating-10"
        className="mask mask-star-2 mask-half-1 bg-primary"
        defaultChecked
      />
      <input
        type="radio"
        name="rating-10"
        className="mask mask-star-2 mask-half-2 bg-primary"
      />
      <input
        type="radio"
        name="rating-10"
        className="mask mask-star-2 mask-half-1 bg-primary"
      />
      <input
        type="radio"
        name="rating-10"
        className="mask mask-star-2 mask-half-2 bg-primary"
      />
      <input
        type="radio"
        name="rating-10"
        className="mask mask-star-2 mask-half-1 bg-primary"
      />
      <input
        type="radio"
        name="rating-10"
        className="mask mask-star-2 mask-half-2 bg-primary"
      />
      <input
        type="radio"
        name="rating-10"
        className="mask mask-star-2 mask-half-1 bg-primary"
      />
      <input
        type="radio"
        name="rating-10"
        className="mask mask-star-2 mask-half-2 bg-primary"
      />
    </div>
  );
};

export default Rating;
