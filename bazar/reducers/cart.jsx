import { cartActions, initialState } from "../context/cart";

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case cartActions.ADD_CART: {
      const productId = state.findIndex((item) => item.id === payload.id);
      if (productId >= 0) {
        const newCart = [...state];
        newCart[productId].quantity += 1;
        return newCart;
      } else {
        return [
          ...state,
          {
            ...payload,
            quantity: 1,
          },
        ];
      }
    }
    case cartActions.REMOVE_CART: {
      const productId = state.findIndex((item) => item.id === payload.id);
      if (productId >= 0) {
        if (payload.quantity > 1) {
          const newCart = [...state];
          newCart[productId].quantity -= 1;
          return newCart;
        } else {
          return state.filter((item) => item.id != payload.id);
        }
      }
      return state;
    }
    case cartActions.CLEAR_CART: {
      return initialState;
    }
    case cartActions.REMOVE_PRODUCT_CART: {
      return state.filter((item) => item.id != payload.id);
    }
  }
  return state;
};
