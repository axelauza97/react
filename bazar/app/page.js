"use client";
import { Car } from "@/images/car";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.target));
    if (fields.search.trim() != "") {
      router.push(`/items?search=${fields.search}`);
    } else {
      setError("Enter value");
    }
  };

  return (
    <main className="grid justify-center h-screen gap-4 place-content-center ">
      <Car className={"mx-auto w-40 h-4w-40"} />
      <h1 className="text-4xl font-bold">Bazar Online</h1>
      <form
        className="flex flex-col items-center gap-3"
        onSubmit={handleSubmit}
      >
        <input
          className="px-2 py-2 rounded"
          type="text"
          name="search"
          placeholder="laptops, smartphoes..."
        />
        {error != "" && <p className="text-red-700 ">{error}</p>}
        <button className="self-end p-2 px-8 mx-auto font-semibold bg-red-400 rounded cursor-pointer active:bg-red-500 active:scale-95 h-fit bottom-2 w-fit">
          Buscar
        </button>
        {/*<Link href="/items"> dd</Link>*/}
      </form>
    </main>
  );
}
