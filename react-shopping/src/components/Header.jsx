import { useContext, useId } from "react";
import "./Header.css";
import { FiltersContext } from "../context/filters";
import { Cart } from "./Cart";
import PropTypes from "prop-types";

Header.propTypes = {
  categories: PropTypes.array,
};
export function Header({ categories }) {
  const priceId = useId();
  const categoryId = useId();
  const { filters, setFilters } = useContext(FiltersContext);

  const handlePriceChange = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
    //setPrice(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };
  return (
    <header>
      <nav className="navbarTitle">
        <h1>ECommerce</h1>
        <Cart />
      </nav>

      <section className="filters">
        <div>
          <label htmlFor={priceId}>
            From: $<span>{filters.price}</span>
          </label>
          <input
            type="range"
            id={priceId}
            value={filters.price}
            min="0"
            max="2000"
            onChange={handlePriceChange}
          />
        </div>
        <div>
          <label htmlFor={categoryId}>Category</label>

          <select id={categoryId} onChange={handleCategoryChange}>
            {categories &&
              categories.map((category) => (
                <option value={category} key={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
          </select>
        </div>
      </section>
    </header>
  );
}
