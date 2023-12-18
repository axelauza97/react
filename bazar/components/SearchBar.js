import { ProductsContext } from "@/context/products";
import { Car } from "@/images/car";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export const SearchBar = () => {
  const { setProducts } = useContext(ProductsContext);
  const [setError] = useState();
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.target));
    if (fields.search.trim() != "") {
      fetch(`/api/items?search=${fields.search}`)
        .then((res) => res.json())
        .then((res) => setProducts(res.products));
      router.push(`/items?search=${fields.search}`);
    } else {
      setError("Enter value");
    }
  };
  return (
    <header className="sticky top-0 left-0 right-0 backdrop-blur">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap max-w-xs gap-4 py-2 m-4 mx-auto"
      >
        <Car className="w-10" onClick={() => router.back()} />
        <input
          className="flex-1 px-2 py-2 rounded"
          type="text"
          placeholder="laptops, smartphones..."
          name="search"
        />
      </form>
    </header>
  );
};
