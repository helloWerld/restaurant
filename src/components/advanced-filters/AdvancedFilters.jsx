import React from "react";
import dietaryRestrictions from "../../../public/diet-restrictions-icon.png";
import servesAlcohol from "../../../public/alcohol-icon.png";
import evCharge from "../../../public/ev-charge-icon.png";
import outdoorSeating from "../../../public/outdoor-seating-icon.png";
import liveMusic from "../../../public/live-music-icon.png";
import petFriendly from "../../../public/pet-friendly-icon.png";
import familyFriendly from "../../../public/family-friendly-icon.png";
import parking from "../../../public/parking-icon.png";
import payments from "../../../public/payment-icon.png";
import coffee from "../../../public/coffee-icon.png";
import wifiIcon from "../../../public/wifi-icon.png";
import cardPayment from "../../../public/card-payment-icon.png";
import cashPayment from "../../../public/cash-payment-icon.png";
import mobilePayment from "../../../public/other-payment-icon.png";

const infoAdvancedFilters = [
  {
    id: 1,
    icon: servesAlcohol,
    description: "Serves alcohol",
  },
  {
    id: 2,
    icon: dietaryRestrictions,
    description: "Dietary & allergy restrictions",
  },
  {
    id: 3,
    icon: evCharge,
    description: "EV charge station",
  },
  {
    id: 4,
    icon: outdoorSeating,
    description: "Outdoor seating",
  },
  {
    id: 5,
    icon: liveMusic,
    description: "Live music",
  },
  {
    id: 6,
    icon: petFriendly,
    description: "Pet friendly",
  },
  {
    id: 7,
    icon: familyFriendly,
    description: "Family friendly",
  },
  {
    id: 8,
    icon: parking,
    description: "Parking",
  },
  {
    id: 9,
    icon: coffee,
    description: "Serves coffee",
  },
  {
    id: 10,
    icon: wifiIcon,
    description: "Wifi access",
  },
];

const filtersWithOptions = [
  {
    id: 1,
    icon: payments,
    description: "Payment options",
    hasOptions: [
      {
        icon: cardPayment,
        description: "Card",
      },
      {
        icon: cashPayment,
        description: "Cash",
      },
      {
        icon: mobilePayment,
        description: "Mobile",
      },
    ],
  },
];

const AdvancedFilters = () => {
  return (
    <div className="flex flex-row items-center justify-around px-6">
      {infoAdvancedFilters.map((filter) => (
        <div key={filter.id} className="tooltip" data-tip={filter.description}>
          <button className="btn btn-circle btn-ghost">
            <img
              className="h-6 w-6"
              src={filter.icon.src}
              alt={filter.description}
            />
          </button>
        </div>
      ))}
      <div className="tooltip" data-tip={filtersWithOptions[0].description}>
        <details className="dropdown">
          <summary className="btn btn-circle btn-ghost">
            <img
              className="h-6 w-6"
              src={filtersWithOptions[0].icon.src}
              alt={filtersWithOptions[0].description}
            />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            {filtersWithOptions[0].hasOptions.map((option, index) => (
              <li key={index}>
                <a>
                  <img
                    className="h-6 w-6"
                    src={option.icon.src}
                    alt={option.description}
                  />{" "}
                  {option.description}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default AdvancedFilters;