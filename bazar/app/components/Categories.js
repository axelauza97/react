"use client";
import { Smartphone } from "@/images/smartphone";
import { useCallback } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Laptop } from "@/images/laptop";
import { Frangance } from "@/images/fragance";
import { Skincare } from "@/images/skincare";
import { Groceries } from "@/images/groceries";
import { Homedeco } from "@/images/homeDe";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export const Categories = ({ products }) => {
  const searchParams = useSearchParams();

  const searchParam = searchParams.get("search");
  const categoryParam = searchParams.get("category");

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
          <Link
            href={
              categoryParam == category
                ? `?search=${searchParam}`
                : `?search=${searchParam}&category=${category}`
            }
            key={category}
            className={clsx(
              "active:scale-95 items-center text-xs sm:text-base flex gap-3 p-1 sm:p-2 rounded cursor-pointer shadow-md",
              {
                "bg-red-400": category === "smartphones",
              },
              {
                "bg-red-500":
                  categoryParam === "smartphones" && category === "smartphones",
              },
              {
                "bg-blue-400": category === "laptops",
              },
              {
                "bg-blue-500":
                  categoryParam === "laptops" && category === "laptops",
              },
              {
                "bg-yellow-400": category === "fragrances",
              },
              {
                "bg-yellow-500":
                  categoryParam === "fragrances" && category === "fragrances",
              },
              {
                "bg-lime-400": category === "skincare",
              },
              {
                "bg-lime-500":
                  categoryParam === "skincare" && category === "skincare",
              },
              {
                "bg-emerald-400": category === "groceries",
              },
              {
                "bg-emerald-500":
                  categoryParam === "groceries" && category === "groceries",
              },

              {
                "bg-fuchsia-400": category === "home-decoration",
              },
              {
                "bg-fuchsia-500":
                  categoryParam === "home-decoration" &&
                  category === "home-decoration",
              }
            )}
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
          </Link>
        ))}
    </section>
  );
};
Categories.propTypes = {
  products: PropTypes.arrayOf(Object),
};
