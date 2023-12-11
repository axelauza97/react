"use client";
import { useSearchParams } from "next/navigation";
import responseMock from "@/mocks/product.json";

export default function Page({ params }) {
  /*const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const images = searchParams.get("images");
  const thumbnail = searchParams.get("thumbnail");*/
  const title = responseMock.title;
  const images = responseMock.images;
  const thumbnail = responseMock.thumbnail;
  const description = responseMock.description;
  //console.log(params.id);
  return (
    <>
      <section className="max-w-xs mx-auto">
        <section className="grid gap-2 grid-cols-3 grid-rows-3 justify-items-center items-center ">
          <img
            className="col-span-2 rounded-full w-40 h-40 object-cover row-span-3"
            src={thumbnail}
          />
          {images &&
            images.map((image, index) => (
              <img
                key={crypto.randomUUID()}
                className={`w-24 h-24 rounded-full object-cover ${
                  index >= 3 ? "hidden" : ""
                } `}
                src={image}
              />
            ))}
        </section>
        <h2 className="text-center font-bold mt-2 text-xl">{title}</h2>
        <p className="text-sm mt-2">{description}</p>
        <button className="active:scale-95 cursor-pointer absolute bottom-2 left-0 right-0 p-2 px-8 font-semibold rounded w-fit mx-auto block bg-red-400 ">
          Comprar
        </button>
      </section>
    </>
  );
}
