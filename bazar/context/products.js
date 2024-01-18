"use client";
import { createContext, useCallback, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import { reducer } from "@/reducers/product";
import { FiltersContext } from "./filters";

export const productActions = {
  GET_FILTER_PRODUCTS: "GET_FILTER_PRODUCTS",
  SET_FETCH_PRODUCTS: "SET_FETCH_PRODUCTS",
  CLEAR_CART: "CLEAR_CART",
  REMOVE_PRODUCT_CART: "REMOVE_PRODUCT_CART",
};

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const { filters } = useContext(FiltersContext);

  const [products, dispatch] = useReducer(reducer, []);

  const setFetchProducts = (products) => {
    dispatch({
      type: productActions.SET_FETCH_PRODUCTS,
      payload: products,
    });
  };

  const filterProducts = useCallback(() => {
    return products.filter((product) => {
      if (filters.category === "all") {
        return true;
      } else {
        return filters.category === product.category;
      }
    });
  }, [products, filters]);

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
