"use client";
import { SearchBar } from "@/components/SearchBar";
import { FiltersProvider } from "@/context/filters";
import { ProductsProvider } from "@/context/products";
import PropTypes from "prop-types";

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object,
};

export default function Layout({ children }) {
  //console.log(params);

  return (
    <section className="">
      <FiltersProvider>
        <ProductsProvider>
          <SearchBar />
          {children}
        </ProductsProvider>
      </FiltersProvider>
    </section>
  );
}
