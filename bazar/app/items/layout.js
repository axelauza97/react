"use client";
import { SearchBar } from "@/components/SearchBar";
import { FiltersProvider } from "@/context/filters";
import { ProductsProvider } from "@/context/products";
import { SearchLoadingProvider } from "@/context/searchLoading";
import PropTypes from "prop-types";

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object,
};

export default function Layout({ children }) {
  //console.log(params);

  return (
    <section className="flex flex-col min-h-[calc(100dvh)]">
      <FiltersProvider>
        <SearchLoadingProvider>
          <ProductsProvider>
            <SearchBar />
            {children}
          </ProductsProvider>
        </SearchLoadingProvider>
      </FiltersProvider>
    </section>
  );
}
