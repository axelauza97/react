"use client";
import { createContext, useState } from "react";

export const SearchLoadingsContext = createContext();
export function SearchLoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <SearchLoadingsContext.Provider value={{ loading, setLoading }}>
      {children}
    </SearchLoadingsContext.Provider>
  );
}
