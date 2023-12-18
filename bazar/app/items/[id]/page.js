"use client";
import { useSearchParams } from "next/navigation";
import responseMock from "@/mocks/product.json";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  /*const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const images = searchParams.get("images");
  const thumbnail = searchParams.get("thumbnail");*/
  const [product, setProduct] = useState({});
  //console.log(params.id);
  //console.log(product);
  useEffect(() => {
    fetch(`/api/item/${params.id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);
  return (
    <>
      <section className="grid max-w-xs max-h-screen mx-auto grid-rows-[1fr,min-content,min-content,0.5fr]">
        <section className="grid items-center grid-cols-3 grid-rows-3 gap-2 justify-items-center ">
          <img
            className="object-cover w-40 h-40 col-span-2 row-span-3 rounded-full"
            src={product.thumbnail}
          />
          {product.images &&
            product.images.map((image, index) => (
              <img
                key={crypto.randomUUID()}
                className={`w-24 h-24 rounded-full object-cover ${
                  index >= 3 ? "hidden" : ""
                } `}
                src={image}
              />
            ))}
        </section>
        <h2 className="mt-2 text-xl font-bold text-center">{product.title}</h2>
        <p className="mt-2 text-sm">{product.description}</p>
        <button className="self-end p-2 px-8 mx-auto font-semibold bg-red-400 rounded cursor-pointer active:bg-red-500 active:scale-95 h-fit bottom-2 w-fit">
          Comprar
        </button>
      </section>
    </>
  );
}
