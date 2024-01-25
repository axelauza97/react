import { Car } from "@/images/Car";
import { SearchForm } from "./components/SearchForm";

export default function Home() {
  return (
    <main className="grid min-h-[calc(100dvh)] gap-4 overflow-hidden overscroll-none justify-items-center place-content-center ">
      <Car className={"w-40 h-4w-40 drop-shadow"} />
      <h1 className="text-4xl font-bold">Bazar Online</h1>
      <SearchForm />
    </main>
  );
}
