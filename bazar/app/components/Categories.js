"use client";
import { Smartphone } from "@/images/smartphone";
import { useCallback, useContext } from "react";
import clsx from "clsx";
import { FiltersContext } from "@/context/filters";
import PropTypes from "prop-types";
import { Laptop } from "@/images/laptop";
import { Frangance } from "@/images/fragance";
import { Skincare } from "@/images/skincare";
import { Groceries } from "@/images/groceries";
import { Homedeco } from "@/images/homeDe";

export const Categories = ({ products }) => {
  const { filters, setFilters } = useContext(FiltersContext);

  const handleClickCategory = (category) => {
    if (category === filters.category) {
      setFilters({ category: "all" });
    } else {
      setFilters({ category: category });
    }
  };
  const categories = useCallback(() => {
    let listCategories = new Set();
    products.forEach((item) => {
      listCategories.add(item.category);
    });
    return [...listCategories];
  }, [products]);

  return (
    <section className="flex flex-wrap justify-around max-w-xl gap-2 m-4 mx-auto">
      {categories() &&
        categories().map((category) => (
          <a
            key={category}
            className={clsx(
              "active:scale-95 items-center text-xs sm:text-base flex gap-3 p-1 sm:p-2 rounded cursor-pointer shadow-md",
              {
                "bg-red-400": category === "smartphones",
              },
              {
                "bg-red-500":
                  filters.category === "smartphones" &&
                  category === "smartphones",
              },
              {
                "bg-blue-400": category === "laptops",
              },
              {
                "bg-blue-500":
                  filters.category === "laptops" && category === "laptops",
              },
              {
                "bg-yellow-400": category === "fragrances",
              },
              {
                "bg-yellow-500":
                  filters.category === "fragrances" &&
                  category === "fragrances",
              },
              {
                "bg-lime-400": category === "skincare",
              },
              {
                "bg-lime-500":
                  filters.category === "skincare" && category === "skincare",
              },
              {
                "bg-emerald-400": category === "groceries",
              },
              {
                "bg-emerald-500":
                  filters.category === "groceries" && category === "groceries",
              },

              {
                "bg-fuchsia-400": category === "home-decoration",
              },
              {
                "bg-fuchsia-500":
                  filters.category === "home-decoration" &&
                  category === "home-decoration",
              }
            )}
            onClick={() => handleClickCategory(category)}
          >
            {category === "smartphones" ? (
              <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              ""
            )}
            {category === "laptops" ? (
              <Laptop className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              ""
            )}
            {category === "fragrances" ? (
              <Frangance className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              ""
            )}
            {category === "skincare" ? (
              <Skincare className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              ""
            )}
            {category === "groceries" ? (
              <Groceries className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              ""
            )}
            {category === "home-decoration" ? (
              <Homedeco className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              ""
            )}

            <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
          </a>
        ))}
    </section>
  );
};
Categories.propTypes = {
  products: PropTypes.arrayOf(Object),
};
