import React from "react";

const Rating = () => {
  return (
    <div className=" w-1/2 ">
      <form className="flex flex-col items-center p-4" action="">
        <textarea
          className="w-full textarea textarea-lg textarea-primary textarea-bordered "
          type="text"
          placeholder="Write a review"
        ></textarea>
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
        <button className="btn btn-primary">Primary</button>
      </form>
    </div>
  );
};

export default Rating;
