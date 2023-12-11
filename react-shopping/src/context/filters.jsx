import { createContext, useState } from "react";
import PropTypes from "prop-types";

FiltersProvider.propTypes = {
  children: PropTypes.node,
};

export const FiltersContext = createContext();
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    price: 0,
  });
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
