import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addCart = (product) => {
    const productId = cart.findIndex((item) => item.id === product.id);
    if (productId >= 0) {
      const newCart = structuredClone(cart);
      newCart[productId].quantity += 1;
      setCart(newCart);
    } else {
      setCart((prev) => [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const removeCart = (product) => {
    const productId = cart.findIndex((item) => item.id === product.id);
    if (productId >= 0) {
      if (product.quantity > 1) {
        const newCart = structuredClone(cart);
        newCart[productId].quantity -= 1;
        setCart(newCart);
      } else {
        setCart((prev) => prev.filter((item) => item.id != product.id));
      }
    }
  };
  const clearCart = () => {
    setCart([]);
  };
  const removeProductCart = (product) => {
    setCart((prev) => prev.filter((item) => item.id != product.id));
  };
  const checkProduct = (product) => {
    //console.log(cart.findIndex((item) => item.id === product.id) >= 0);
    return cart.findIndex((item) => item.id === product.id) >= 0;
  };
  const getTotalPrice = () => {
    let totalPrice = 0;
    if (cart.length == 0) {
      return totalPrice;
    }
    totalPrice = cart.reduce(
      (totalPrice, product) => (totalPrice += product.price * product.quantity),
      0
    );

    return totalPrice;
  };
  return (
    <CartContext.Provider
      value={{
        cart,
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
