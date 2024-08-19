import Rating from "@/components/Rating";
import React from "react";

const rating = () => {
  return (
    <div>
      <h1 className=" flex flex-col p-20 mx-10 ">Rate Restaurant</h1>
      <Rating />
    </div>
  );
};

export default rating;
