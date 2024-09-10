"use client";
import { motion } from "framer-motion";

// export const filterButton = ({
//   description,
//   filterIcon,
//   nameValue,
//   onClick,
// }) => {
//   return (
//     <div className="tooltip" data-tip={description}>
//       <motion.button
//         className="btn btn-circle btn-ghost"
//         name={nameValue}
//         value={nameValue}
//         whileHover={{ scale: 1.15 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={onClick}
//       >
//         <img className="h-6 w-6" src={filterIcon} alt={description} />
//       </motion.button>
//     </div>
//   );
// };

const FilterButtonOptions = ({
  description,
  filterIcon,
  nameValue,
  onClick,
  filterOptions,
}) => {
  return (
    <div className="tooltip" data-tip={description}>
      <div className="dropdown">
        <motion.div
          tabIndex={0}
          role="button"
          className="btn btn-circle btn-ghost"
          name={nameValue}
          value={nameValue}
          onClick={onClick}
        >
          <img className="h-6 w-6" src={filterIcon} alt={description} />
        </motion.div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          {filterOptions.map((option, index) =>
            option.icon ? (
              <li key={index}>
                <a>
                  <img
                    className="w-6 h-6"
                    src={option.icon.src}
                    alt={option.name}
                  />
                  {option.name}
                </a>
              </li>
            ) : (
              <li key={index}>
                <a>{option}</a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default FilterButtonOptions;
