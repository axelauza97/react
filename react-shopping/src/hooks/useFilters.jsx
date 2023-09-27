import { useCallback, useContext, useState } from "react";
import productsResponse from "./../../mocks/products.json";
import { FiltersContext } from "../context/filters";
export function useFilters() {
  const [products, setProducts] = useState(productsResponse.products);
  const { filters, setFilters } = useContext(FiltersContext);
  /*const [filters, setFilters] = useState({
      category: "all",
      price: 0,
    });*/
  const getCategories = useCallback((products) => {
    let filterArray = new Set();
    filterArray.add("all");
    products.forEach((product) => {
      filterArray.add(product.category);
    });

    return filterArray;
  }, []);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price > filters.price &&
        (filters.category == "all" || product.category == filters.category)
      );
    });
  };
  console.log("render");
  const filteredProducts = filterProducts(products);
  return { filteredProducts, products, getCategories };
}
