"use client";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

Page.propTypes = {
  params: PropTypes.object,
};

export default function Page({ params }) {
  /*const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const images = searchParams.get('images');
  const thumbnail = searchParams.get('thumbnail');*/
  const [product, setProduct] = useState({});
  const [showImage, setShowImage] = useState({
    show: false,
    img: "",
  });
  //console.log(params.id);
  //console.log(product);
  useEffect(() => {
    fetch(`/api/item/${params.id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [params]);
  const imageHandler = (image) => {
    setShowImage({
      show: true,
      img: image,
    });
  };
  return (
    <>
      <section className="flex-1 grid max-w-xs max-h-screen mx-auto grid-rows-[1fr,min-content,min-content,0.25fr]">
        <section className="grid items-center grid-cols-3 grid-rows-3 gap-2 justify-items-center ">
          <img
            className="object-cover w-40 h-40 col-span-2 row-span-3 rounded-xl active:scale-95"
            src={product.thumbnail}
            onClick={() => imageHandler(product.thumbnail)}
          />
          {product.images &&
            product.images.map((image, index) => (
              <img
                key={crypto.randomUUID()}
                className={`w-24 h-24 rounded-3xl object-cover active:scale-95 ${
                  index >= 3 ? "hidden" : ""
                } `}
                src={image}
                onClick={() => imageHandler(image)}
              />
            ))}
        </section>
        <h2 className="mt-2 text-xl font-bold text-center">{product.title}</h2>
        <p className="mt-2 text-sm">{product.description}</p>
        <button className="self-center p-2 px-8 mx-auto font-semibold bg-red-400 rounded shadow-md cursor-pointer active:bg-red-500 active:scale-95 h-fit bottom-2 w-fit">
          Comprar
        </button>
      </section>
      <aside
        className={clsx(
          {
            "hidden scale-95 transition ease-in-out duration-300":
              !showImage.show,
          },
          {
            "grid top-0 left-0 right-0 fixed h-screen place-content-center duration-300 backdrop-blur scale-100 transition ease-in-out shadow-lg":
              showImage.show,
          }
        )}
      >
        <section className="relative grid px-6 rounded animate-show">
          <button
            className="absolute top-[-1.5rem] right-[-.5rem] font-bold px-2 text-gray-800 bg-red-400 rounded active:bg-red-500 active:scale-95"
            onClick={() => setShowImage({ show: false, img: "" })}
          >
            x
          </button>
          <img src={showImage.img} className="object-cover rounded w-60 h-60" />
        </section>
      </aside>
    </>
  );
}
