import Cuisine from "../../../public/basic-filters/cuisine-type.png";
import AvgRating from "../../../public/basic-filters/average-rating.png";
import OpenNow from "../../../public/basic-filters/currently-open.png";
import PriceApprox from "../../../public/basic-filters/price-approximate.png";
import TypeOfRestaurant from "../../../public/basic-filters/type-of-restaurant.png";

const infoBasicFilters = [
  {
    id: 1,
    icon: Cuisine,
    description: "Type of cuisine",
    hasOptions: [
      "American",
      "Bakery",
      "Bar",
      "Barbecue",
      "Brazilian",
      "Breakfast",
      "Brunch",
      "Cafe",
      "Chinese",
      "Coffee",
      "Fast food",
      "French",
      "Greek",
      "Hamburger",
      "Ice-cream",
      "Indian",
      "Indonesian",
      "Italian",
      "Japanese",
      "Korean",
      "Lebanese",
      "Meal delivery",
      "Meal takeaway",
      "Mediterranean",
      "Mexican",
      "Middle-eastern",
      "Pizza",
      "Ramen",
      "Sandwich",
      "Seafood",
      "Spanish",
      "Steak-house",
      "Sushi",
      "Thai",
      "Turkish",
      "Vegan",
      "Vegetarian",
      "Vietnamese",
    ],
  },
  {
    id: 2,
    icon: AvgRating,
    description: "Average rating",
    hasOptions: ["Low", "Average", "Good", "Great"],
  },
  {
    id: 3,
    icon: OpenNow,
    description: "Open? Closing soon?",
    hasOptions: ["Open now", "Closing soon", "Closed"],
  },
  {
    id: 4,
    icon: PriceApprox,
    description: "Approximate price",
    hasOptions: ["Inexpensive", "Average", "Expensive", "Fine dining"],
  },
  {
    id: 5,
    icon: TypeOfRestaurant,
    description: "Restaurant type",
    hasOptions: ["Pick up", "Delivery", "Fast-food", "Sit-down"],
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
              {filter.hasOptions.map((option, index) => (
                <li key={index}>
                  <a>{option}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BasicFilters;
