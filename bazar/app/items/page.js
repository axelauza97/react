"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useContext, useEffect } from "react";
import { Categories } from "@/components/Categories";
import { ProductsContext } from "@/context/products";
import { FiltersContext } from "@/context/filters";
import { SearchLoadingsContext } from "@/context/searchLoading";
export default function Page() {
  const { products, setProducts } = useContext(ProductsContext);
  const { filters } = useContext(FiltersContext);
  const { loading, setLoading } = useContext(SearchLoadingsContext);

  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  useEffect(() => {
    setLoading(true);
    fetch(`/api/items?search=${search}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
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
        {loading && (
          <section className="h-6 max-w-xl m-4 rounded-lg sm:mx-auto bg-slate-700 animate-pulse"></section>
        )}
        {loading && (
          <section className="h-6 max-w-xl m-4 rounded-lg sm:mx-auto bg-slate-700 animate-pulse"></section>
        )}
        {loading &&
          Array(3)
            .fill(0)
            .map(() => (
              <section
                key={crypto.randomUUID()}
                className="h-32 max-w-xl p-2 m-4 mt-2 border rounded-lg cursor-pointer sm:mx-auto auto-rows-min bg-slate-700 animate-pulse sm:grid-cols-2 sm:max-w-4xl"
              ></section>
            ))}
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

        <section>
          {!loading && (
            <ul className="grid max-w-xl gap-4 m-4 mx-auto sm:grid-cols-2 sm:max-w-4xl justify-items-stretch">
              {filterProducts().map((product) => (
                <Link
                  href={{
                    pathname: `/items/${product.id}`,
                  }}
                  key={product.id}
                  className="bg-slate-100 shadow-md active:scale-95 rounded-lg mx-4 grid border border-neutral-500 grid-cols-2 gap-2 grid-rows-[min-content,min-content,min-content] p-2 auto-rows-min cursor-pointer h-full place-content-center"
                >
                  <img
                    src={product.thumbnail}
                    className="self-center object-cover w-32 h-32 rounded-xl justify-self-center row-span-full"
                  />
                  <h3 className="font-bold">{product.title}</h3>
                  <p className="text-sm">{product.description}</p>
                  <p className="font-bold">${product.price}</p>
                </Link>
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
}
