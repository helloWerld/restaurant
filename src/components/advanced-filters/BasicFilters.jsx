import ServesAlcohol from "../../../public/alcohol-icon.png";
import Example from "../../../public/coffee-icon.png";

const infoBasicFilters = [
  {
    id: 1,
    icon: ServesAlcohol,
    description: "Serves alcohol",
  },
  {
    id: 2,
    icon: Example,
    description: "Serves coffee",
  },
];

const BasicFilters = () => {
  return (
    <div className="flex flex-row items-center justify-around px-6">
      {infoBasicFilters.map((filter) => (
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
      {/* <div className="tooltip" data-tip={filtersWithOptions[0].description}>
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
      </div> */}
    </div>
  );
};

export default BasicFilters;
