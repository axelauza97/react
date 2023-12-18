import { ProductsContext } from "@/context/products";
import { Car } from "@/images/car";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";
import debounce from "just-debounce-it";

export const SearchBar = () => {
  const { setProducts } = useContext(ProductsContext);
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  const [setError] = useState();
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    setSearchValue(search);
  }, [search]);

  const fetchProducts = useCallback(
    debounce((value) => {
      fetch(`/api/items?search=${value}`)
        .then((res) => res.json())
        .then((res) => setProducts(res.products));
      router.push(`/items?search=${value}`);
      console.log("search");
    }, 1000),
    []
  );

  const handleSubmit = (event) => {
    console.log(event);
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

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    fetchProducts(event.target.value);
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
          value={searchValue}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </header>
  );
};
