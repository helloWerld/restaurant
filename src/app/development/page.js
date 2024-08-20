import Rating from "@/components/Rating";
import React from "react";

const rating = () => {
  return (
    <div>
      <div className=" flex flex-col p-10 mx-10 text-center font-bold">
        Rate and Review Restaurant
      </div>
      <Rating />
    </div>
  );
};

export default rating;
