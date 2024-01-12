"use client";
import { useSearchParams } from "next/navigation";
import { useCallback, useContext, useEffect } from "react";
import { Categories } from "@/components/Categories";
import { ProductsContext } from "@/context/products";
import { FiltersContext } from "@/context/filters";
import { SearchLoadingsContext } from "@/context/searchLoading";
import { ProductsList } from "@/components/ProductsList";
import { SkeletonItems } from "@/components/SkeletonItems";
import { searchItems } from "@/services/items";
export default function Page() {
  const { products, setProducts } = useContext(ProductsContext);
  const { filters } = useContext(FiltersContext);
  const { loading, setLoading } = useContext(SearchLoadingsContext);

  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  useEffect(() => {
    setLoading(true);
    searchItems({ value: search }).then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, [search, setProducts, setLoading]);
  const categories = useCallback(() => {
    let listCategories = new Set();
    products.forEach((item) => {
      listCategories.add(item.category);
    });
    return [...listCategories];
  }, [products]);

  const filterProducts = () => {
    return products.filter((product) => {
      if (filters.category === "all") {
        return true;
      } else {
        return filters.category === product.category;
      }
    });
  };
  return (
    <>
      <main>
        <SkeletonItems loading={loading} />
        {!loading && products.length > 0 && (
          <h2 className="font-bold text-center">
            Resultados de búsqueda de &quot;{search}&quot; :
            {" " + filterProducts().length}
          </h2>
        )}
        {!loading && products.length === 0 && (
          <h2 className="font-bold text-center">
            No hay resultados para su búsqueda, pruebe buscando por letras
          </h2>
        )}
        {!loading && <Categories categories={categories()} />}
        <ProductsList products={filterProducts()} />
      </main>
    </>
  );
}
