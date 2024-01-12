import { Car } from "@/images/car";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import debounce from "just-debounce-it";

export const SearchBar = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  //const [error, setError] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    setSearchValue(search);
  }, [search]);

  const fetchProducts = useCallback(
    debounce((value) => {
      router.push(`/items?search=${value}`);
    }, 1000),
    []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.target));
    if (fields.search.trim() != "") {
      router.push(`/items?search=${fields.search}`);
    } else {
      //setError("Enter value");
    }
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    fetchProducts(event.target.value);
  };
  return (
    <header className="sticky top-0 left-0 right-0 backdrop-blur z-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap max-w-xs gap-4 py-2 m-4 mx-auto sm:max-w-md"
      >
        <Car
          className="w-10 drop-shadow hover:cursor-pointer active:scale-95"
          onClick={() => {
            if (pathName.includes("/items/")) {
              router.push("/items");
            } else {
              router.push("/");
            }
          }}
        />
        <input
          className="flex-1 px-2 py-2 rounded shadow-lg"
          type="text"
          placeholder="Laptops, smartphones..."
          name="search"
          value={searchValue == null ? "" : searchValue}
          onChange={(e) => handleChange(e)}
        />
        <button className="hidden p-2 px-8 mx-auto font-semibold bg-red-400 rounded shadow-md cursor-pointer sm:block active:bg-red-500 active:scale-95 h-fit bottom-2 w-fit">
          Buscar
        </button>
      </form>
    </header>
  );
};
