"use client";
import Cuisine from "../../../public/basic-filters/cuisine-type.png";
import AvgRating from "../../../public/basic-filters/average-rating.png";
import OpenNow from "../../../public/basic-filters/currently-open.png";
import PriceApprox from "../../../public/basic-filters/price-approximate.png";
import TypeOfRestaurant from "../../../public/basic-filters/type-of-restaurant.png";
// basic filter options icons
import Pickup from "../../../public/basic-filters/basic-options/pickup.png";
import Delivery from "../../../public/basic-filters/basic-options/delivery.png";
import EatIn from "../../../public/basic-filters/basic-options/eat-in.png";
import FastFood from "../../../public/basic-filters/basic-options/fast-food.png";
import Inexpensive from "../../../public/basic-filters/basic-options/inexpensive.png";
import AvgCost from "../../../public/basic-filters/basic-options/average.png";
import Expensive from "../../../public/basic-filters/basic-options/expensive.png";
import FineDining from "../../../public/basic-filters/basic-options/fine-dining.png";
import OpenCurrent from "../../../public/basic-filters/basic-options/open-now.png";
import CloseSoon from "../../../public/basic-filters/basic-options/closing-soon.png";
import NowClosed from "../../../public/basic-filters/basic-options/closed.png";
import LowRating from "../../../public/basic-filters/basic-options/low-rating.png";
import RatingAvg from "../../../public/basic-filters/basic-options/avg-rating.png";
import GoodRating from "../../../public/basic-filters/basic-options/good-rating.png";
import GreatRating from "../../../public/basic-filters/basic-options/great-rating.png";

const infoBasicFilters = [
  {
    id: 1,
    icon: Cuisine,
    description: "Type of cuisine",
    hasOptions: [
      "American", // american_restaurant
      "Bakery", // bakery
      "Bar", // bar
      "Barbecue", // barbecue_restaurant
      "Brazilian", // brazilian_restaurant
      "Breakfast", // breakfast_restaurant
      "Brunch", // brunch_restaurant
      "Cafe", // cafe
      "Chinese", // chinese_restaurant
      "Coffee", // coffee_shop
      "Fast food", // fast_food_restaurant
      "French", // french_restaurant
      "Greek", // greek_restaurant
      "Hamburger", // hamburger_restaurant
      "Ice-cream", // ice_cream_shop
      "Indian", // indian_restaurant
      "Indonesian", // indonesian_restaurant
      "Italian", // italian_restaurant
      "Japanese", // japanese_restaurant
      "Korean", // korean_restaurant
      "Lebanese", // lebanese_restaurant
      "Meal delivery", // meal_delivery
      "Meal takeaway", // meal_takeaway
      "Mediterranean", // mediterranean_restaurant
      "Mexican", // mexican_restaurant
      "Middle-eastern", // middle_eastern_restaurant
      "Pizza", // pizza_restaurant
      "Ramen", // ramen_restaurant
      "Sandwich", // sandwich_shop
      "Seafood", // seafood_restaurant
      "Spanish", // spanish_restaurant
      "Steak-house", // steak_house
      "Sushi", // sushi_restaurant
      "Thai", // thai_restaurant
      "Turkish", // turkish_restaurant
      "Vegan", // vegan_restaurant
      "Vegetarian", // vegetarian_restaurant
      "Vietnamese", // vietnamese_restaurant
    ],
  },
  {
    id: 2,
    icon: AvgRating,
    description: "Average rating",
    propertyField: "rating", // or 'userRatingCount'
    hasOptions: [
      {
        name: "Low",
        icon: LowRating,
      },
      {
        name: "Average",
        icon: RatingAvg,
      },
      {
        name: "Good",
        icon: GoodRating,
      },
      {
        name: "Great",
        icon: GreatRating,
      },
    ],
  },
  {
    id: 3,
    icon: OpenNow,
    description: "Open? Closing soon?",
    hasOptions: [
      {
        name: "Open now",
        icon: OpenCurrent,
      },
      {
        name: "Closing soon",
        icon: CloseSoon,
      },
      {
        name: "Closed",
        icon: NowClosed,
      },
    ],
  },
  {
    id: 4,
    icon: PriceApprox,
    description: "Approximate price",
    propertyField: "priceLevel",
    hasOptions: [
      {
        name: "Inexpensive",
        icon: Inexpensive,
      },
      {
        name: "Average",
        icon: AvgCost,
      },
      {
        name: "Expensive",
        icon: Expensive,
      },
      {
        name: "Fine dining",
        icon: FineDining,
      },
    ],
  },
  {
    id: 5,
    icon: TypeOfRestaurant,
    description: "Restaurant type",
    hasOptions: [
      {
        name: "Pick up",
        icon: Pickup,
        propertyField: "hasTakeout",
      },
      {
        name: "Delivery",
        icon: Delivery,
        propertyField: "hasDelivery",
      },
      {
        name: "Fast-food",
        icon: FastFood,
      },
      {
        name: "Sit-down",
        icon: EatIn,
        propertyField: "hasDineIn",
      },
    ],
  },
];

const BasicFilters = () => {
  return (
    <div className="flex flex-row items-center justify-around px-6">
      {infoBasicFilters.map((filter) => (
        <div key={filter.id} className="tooltip" data-tip={filter.description}>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost"
            >
              <img
                className="h-6 w-6"
                src={filter.icon.src}
                alt={filter.description}
              />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              {filter.hasOptions.map((option, index) =>
                option.icon ? (
                  <li key={index}>
                    <button
                      className="btn btn-ghost btn-sm"
                      name={option.name}
                      value={option.name}
                      onClick={(event) =>
                        console.log(event.currentTarget.value)
                      }
                    >
                      <img
                        className="w-6 h-6"
                        src={option.icon.src}
                        alt={option.name}
                      />
                      {option.name}
                    </button>
                  </li>
                ) : (
                  <li key={index}>
                    <button
                      className="btn btn-ghost btn-sm"
                      name={option}
                      value={option}
                      onClick={(event) =>
                        console.log(event.currentTarget.value)
                      }
                    >
                      {option}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BasicFilters;
