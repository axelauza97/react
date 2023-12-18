"use client";
import { SearchBar } from "@/components/SearchBar";
import { FiltersProvider } from "@/context/filters";
import { ProductsProvider } from "@/context/products";
import { Car } from "@/images/car";
import { useRouter } from "next/navigation";

export default function Layout({ children, params }) {
  //console.log(params);
  const router = useRouter();

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
