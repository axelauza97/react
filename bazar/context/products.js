"use client";
import { createContext, useCallback, useReducer } from "react";
import PropTypes from "prop-types";
import { reducer } from "@/reducers/product";
import { useSearchParams } from "next/navigation";

export const productActions = {
  GET_FILTER_PRODUCTS: "GET_FILTER_PRODUCTS",
  SET_FETCH_PRODUCTS: "SET_FETCH_PRODUCTS",
  CLEAR_CART: "CLEAR_CART",
  REMOVE_PRODUCT_CART: "REMOVE_PRODUCT_CART",
};

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, dispatch] = useReducer(reducer, []);
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const setFetchProducts = (products) => {
    dispatch({
      type: productActions.SET_FETCH_PRODUCTS,
      payload: products,
    });
  };

  const filterProducts = useCallback(() => {
    return products.filter((product) => {
      if (categoryParam === "all") {
        return true;
      } else {
        return categoryParam === product.category;
      }
    });
  }, [products, categoryParam]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        filterProducts,
        setFetchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
