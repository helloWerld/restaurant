import React from "react";

const BasicFilters = () => {
  return (
    <div>
      {" "}
      <select className="select select-bordered w-full max-w-xs" id="Cuisine">
        <option disabled selected value="">
          Select a cuisine
        </option>
        <option value="Italian">Italian</option>
        <option value="American">American</option>
        <option value="Hispanic">Hispanic</option>
        <option value="Asian">Asian</option>
        <option value="Middle Eastern">Middle Eastern</option>
        <option value="French">French</option>
        <option value="Other">All Other</option>
      </select>
      <select className="select select-bordered w-full max-w-xs" id="RestType">
        <option disabled selected value="">
          Select a type of service
        </option>
        <option value="Table Service">Table Service</option>
        <option value="Fast Food">Fast Food</option>
        <option value="Takeout">Takeout</option>
        <option value="Delivery">Delivery</option>
      </select>
      <select className="select select-bordered w-full max-w-xs" id="Price">
        <option disabled selected value="">
          Select a price range
        </option>
        <option value="1Dollar">$</option>
        <option value="2Dollar">$$</option>
        <option value="3Dollar">$$$</option>
        <option value="4Dollar">$$$$</option>
      </select>
      <select className="select select-bordered w-full max-w-xs" id="Rating">
        <option disabled selected value="">
          Select an average rating
        </option>
        <option value="1Star">&#9733</option>
        <option value="2Star">&#9733&#9733</option>
        <option value="3Star">&#9733&#9733&#9733</option>
        <option value="4Star">&#9733&#9733&#9733&#9733</option>
      </select>
      <select className="select select-bordered w-full max-w-xs" id="Timing">
        <option disabled selected value="">
          Select timing
        </option>
        <option value="Open">Open now</option>
        <option value="Closing">Closing soon</option>
      </select>
    </div>
  );
};

export default BasicFilters;
