"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useContext, useEffect } from "react";
import { Categories } from "@/components/Categories";
import { ProductsContext } from "@/context/products";
import { FiltersContext } from "@/context/filters";
export default function Page() {
  const { products, setProducts } = useContext(ProductsContext);
  const { filters } = useContext(FiltersContext);

  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  useEffect(() => {
    fetch(`/api/items?search=${search}`)
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, [search, setProducts]);
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
        {products.length > 0 && (
          <h2 className="font-bold text-center">
            Resultados de búsqueda de &quot;{search}&quot; :
            {" " + filterProducts().length}
          </h2>
        )}
        {products.length === 0 && (
          <h2 className="font-bold text-center">
            No hay resultados para su búsqueda
          </h2>
        )}
        <Categories categories={categories()} />
        <section>
          <ul className="grid max-w-xl gap-4 m-4 mx-auto">
            {filterProducts().map((product) => (
              <Link
                href={{
                  pathname: `/items/${product.id}`,
                }}
                key={product.id}
                className="bg-slate-100 shadow-md active:scale-95 rounded-lg mx-4 grid border border-neutral-500 grid-cols-2 gap-2 grid-rows-[min-content,min-content,min-content] p-2 auto-rows-min cursor-pointer"
              >
                <img
                  src={product.thumbnail}
                  className="self-center object-cover w-32 h-32 rounded-full justify-self-center row-span-full"
                />
                <h3 className="font-bold">{product.title}</h3>
                <p className="text-sm">{product.description}</p>
                <p className="font-bold">${product.price}</p>
              </Link>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
