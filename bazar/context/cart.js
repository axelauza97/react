"use client";
import { createContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/cart";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const cartActions = {
  ADD_CART: "ADD_CART",
  REMOVE_CART: "REMOVE_CART",
  CLEAR_CART: "CLEAR_CART",
  REMOVE_PRODUCT_CART: "REMOVE_PRODUCT_CART",
  INITIALIZE_STATE: "INITIALIZE_STATE",
};
export const initialState = [];

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const savedData = localStorage.getItem("items");
    if (savedData) {
      dispatch({
        type: cartActions.INITIALIZE_STATE,
        payload: JSON.parse(savedData),
      });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(state));
  }, [state]);
  const addCart = (product) => {
    dispatch({
      type: cartActions.ADD_CART,
      payload: product,
    });
  };
  const removeCart = (product) => {
    dispatch({
      type: cartActions.REMOVE_CART,
      payload: product,
    });
  };
  const clearCart = () => {
    dispatch({ type: cartActions.CLEAR_CART });
  };
  const removeProductCart = (product) => {
    dispatch({ type: cartActions.REMOVE_PRODUCT_CART, payload: product });
  };
  const checkProduct = (product) => {
    return state.findIndex((item) => item.id === product.id) >= 0;
  };
  const getTotalPrice = () => {
    let totalPrice = 0;
    if (state.length == 0) {
      return totalPrice;
    }
    totalPrice = state.reduce(
      (totalPrice, product) => (totalPrice += product.price * product.quantity),
      0
    );
    return totalPrice;
  };
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addCart,
        clearCart,
        removeProductCart,
        checkProduct,
        removeCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
