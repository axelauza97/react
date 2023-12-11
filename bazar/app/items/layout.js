"use client";
import { Car } from "@/images/car";
import { useRouter } from "next/navigation";

export default function Layout({ children, params }) {
  //console.log(params);
  const router = useRouter();
  return (
    <section className="">
      <header className="sticky top-0 left-0 right-0 backdrop-blur">
        <section className="flex flex-wrap max-w-xs gap-4 py-2 m-4 mx-auto">
          <Car className="w-10" onClick={() => router.back()} />
          <input
            className="flex-1 px-2 py-2 rounded"
            type="text"
            placeholder="laptops, smartphones..."
          />
        </section>
      </header>
      {children}
    </section>
  );
}
