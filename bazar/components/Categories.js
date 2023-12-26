"use client";
import { Smartphone } from "@/images/smartphone";
import { useContext } from "react";
import clsx from "clsx";
import { FiltersContext } from "@/context/filters";
import PropTypes from "prop-types";

export const Categories = ({ categories }) => {
  const { filters, setFilters } = useContext(FiltersContext);

  const handleClickCategory = (category) => {
    if (category === filters.category) {
      setFilters({ category: "all" });
    } else {
      setFilters({ category: category });
    }
  };
  return (
    <section className="flex flex-wrap justify-around max-w-xl gap-2 m-4 mx-auto">
      {categories &&
        categories.map((category) => (
          <a
            key={category}
            className={clsx(
              "active:scale-95 items-center text-xs flex gap-3 p-1 bg-red-400 rounded cursor-pointer shadow-md",
              {
                "bg-red-500": filters.category === category,
              }
            )}
            onClick={() => handleClickCategory(category)}
          >
            <Smartphone className="w-5 h-5" />
            <p>{category}</p>
          </a>
        ))}
    </section>
  );
};
Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};
