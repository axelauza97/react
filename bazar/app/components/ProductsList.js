"use client";
import { useContext, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import PropTypes from "prop-types";
import { ProductsContext } from "@/context/products";
import { useSearchParams } from "next/navigation";

export const ProductsList = ({ children, products }) => {
  const { filterProducts, setFetchProducts } = useContext(ProductsContext);
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  const categoryParam = searchParams.get("category");

  useEffect(() => {
    setFetchProducts(products);
  }, [search]);
  return (
    <section>
      <ul className="grid items-stretch max-w-xl gap-4 m-4 mx-auto sm:grid-cols-2 sm:max-w-4xl justify-items-stretch">
        {categoryParam != "all" &&
          filterProducts().map((product, i) => (
            <ProductCard
              key={crypto.randomUUID()}
              product={product}
              index={i}
            />
          ))}
        {(categoryParam === "all" || categoryParam == null) && children}
      </ul>
    </section>
  );
};
ProductsList.propTypes = {
  products: PropTypes.array,
  children: PropTypes.node,
};
