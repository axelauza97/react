"use client";
import { Car } from "@/images/car";
import { Smartphone } from "@/images/smartphone";
import Link from "next/link";
import responseMock from "@/mocks/products.json";
import { usePathname, useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  //const pathName = usePathname();

  const { products } = responseMock;
  console.log(router);
  //console.log(pathName);
  //console.log(products);
  return (
    <>
      <main>
        <h2 className="font-bold text-center">
          Resultados de búsqueda de "smart":12
        </h2>
        <section className="flex flex-wrap justify-around max-w-xl mx-auto mt-2">
          <a className="flex gap-3 p-2 bg-red-400 rounded cursor-pointer">
            <Smartphone className="w-8 h-8" />
            <p>smartphones</p>
          </a>
          <a className="flex gap-3 p-2 bg-red-400 rounded cursor-pointer">
            <Smartphone className="w-8 h-8" />
            <p>smartphones</p>
          </a>
        </section>
        <section>
          <ul className="grid max-w-xl gap-4 m-4 mx-auto">
            {products.map((product) => (
              <Link
                href={{
                  pathname: `/items/${product.id}`,
                  //query: product,
                }}
                key={product.id}
                className="active:scale-95 rounded-lg mx-4 grid border border-neutral-500 grid-cols-2 gap-2 grid-rows-[min-content,min-content,min-content] p-2 auto-rows-min cursor-pointer"
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
