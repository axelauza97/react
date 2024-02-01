import { ProductCard } from "../../components/ProductCard";
import { ProductsList } from "../../components/ProductsList";
import { hostUrl } from "../../env/env";
import { Categories } from "../../components/Categories";
import Link from "next/link";

export const fetchSearch = async ({ value }) => {
  return fetch(`${hostUrl}/api/items?search=${value}`, {
    next: { revalidate: 3600 },
  }).then((res) => res.json());
};
export default async function Page({ searchParams }) {
  const products = await fetchSearch({ value: searchParams.search });
  return (
    <>
      <main>
        {products.products.length > 0 && (
          <h2 className="font-bold text-center">
            Search results for &quot;{searchParams.search}&quot; :
            {" " + products.products.length}
          </h2>
        )}

        {products.products.length === 0 && (
          <>
            <h2 className="p-2 font-bold text-center">
              There are no results for you search, try searching by letters or
              click below:
            </h2>

            <section className="flex flex-wrap justify-center max-w-xl gap-10 m-4 mx-auto sm:max-w-4xl">
              <Link
                href={{
                  pathname: "/items",
                  query: { search: "Iphone" },
                }}
                className="gap-3 p-1 text-xs font-bold bg-red-100 rounded shadow-md cursor-pointer active:scale-95"
              >
                Iphone
              </Link>
              <Link
                href={{
                  pathname: "/items",
                  query: { search: "B" },
                }}
                className="w-10 gap-3 p-1 text-xs font-bold text-center bg-red-100 rounded shadow-md cursor-pointer active:scale-95"
              >
                B
              </Link>
              <Link
                href={{
                  pathname: "/items",
                  query: { search: "A" },
                }}
                className="w-10 gap-3 p-1 text-xs font-bold text-center bg-red-100 rounded shadow-md cursor-pointer active:scale-95"
              >
                A
              </Link>
              <Link
                href={{
                  pathname: "/items",
                  query: { search: "E" },
                }}
                className="w-10 gap-3 p-1 text-xs font-bold text-center bg-red-100 rounded shadow-md cursor-pointer active:scale-95"
              >
                E
              </Link>
            </section>
          </>
        )}
        <Categories products={products.products} />
        <ProductsList products={products.products}>
          {products.products &&
            products.products.map((productE, i) => (
              <ProductCard
                key={crypto.randomUUID()}
                product={productE}
                index={i}
              />
            ))}
        </ProductsList>
      </main>
    </>
  );
}
