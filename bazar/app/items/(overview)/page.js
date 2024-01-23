import { ProductCard } from "../../components/ProductCard";
import { ProductsList } from "../../components/ProductsList";
import { hostUrl } from "../../env/env";
import { Categories } from "../../components/Categories";

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
            Resultados de búsqueda de &quot;{searchParams.search}&quot; :
            {" " + products.products.length}
          </h2>
        )}

        {products.products.length === 0 && (
          <h2 className="font-bold text-center">
            No hay resultados para su búsqueda, pruebe buscando por letras
          </h2>
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
