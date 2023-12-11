import { Car } from "@/images/car";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid h-screen gap-4 place-content-center ">
      <Car />
      <h1 className="text-4xl font-bold">Bazar Online</h1>
      <form className="flex flex-col items-center gap-3 ">
        <input
          className="px-2 py-2 rounded"
          type="text"
          placeholder="laptops, smartphoes..."
        />
        <button className="px-12 py-1 bg-red-400 border border-red-700 border-solid rounded-full w-fit">
          Buscar
        </button>
        <Link href="/items"> dd</Link>
      </form>
    </main>
  );
}
