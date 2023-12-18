"use client";
import { createContext, useState } from "react";

export const ProductsContext = createContext();
export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
