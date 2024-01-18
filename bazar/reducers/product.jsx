import { productActions } from "@/context/products";

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case productActions.GET_FILTER_PRODUCTS: {
      return state.filter((product) => {
        if (payload.category === "all") {
          return true;
        } else {
          return payload.category === product.category;
        }
      });
    }
    case productActions.SET_FETCH_PRODUCTS: {
      return [...payload];
    }
  }
};
