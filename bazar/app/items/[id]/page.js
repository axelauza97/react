"use client";
import { useCallback, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { CartContext } from "@/context/cart";

Page.propTypes = {
  params: PropTypes.object,
};

export default function Page({ params }) {
  const [product, setProduct] = useState({});
  const { addCart, checkProduct } = useContext(CartContext);

  const [imageLoading, setImageLoading] = useState({
    thumbnail: true,
    images: [true, true, true],
  });

  const [showImage, setShowImage] = useState({
    show: false,
    img: "",
  });

  const handleThumbnailLoaded = useCallback(() => {
    setImageLoading((prevState) => ({
      ...prevState,
      thumbnail: false,
    }));
  }, [setImageLoading]);
  const handleImageLoaded = useCallback(
    (index) => {
      if (imageLoading.images[index] === true) {
        setImageLoading((prevState) => {
          const updatedImages = [...prevState.images];
          updatedImages[index] = false;
          return {
            ...prevState,
            images: updatedImages,
          };
        });
      }
    },
    [imageLoading]
  );

  //console.log(params.id);
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
  //console.log(imageLoading);
  return (
    <>
      <section className="gap-4 p-2 sm:max-h-[38rem] sm:my-auto flex-1 grid max-w-xs sm:max-w-4xl max-h-screen mx-auto grid-rows-[1fr,min-content,min-content,0.25fr] sm:grid-cols-3 auto sm:grid-rows-3">
        <section className="grid items-center grid-cols-3 grid-rows-3 gap-2 sm:col-span-2 sm:row-span-4 justify-items-center">
          {!product.thumbnail && (
            <section className="col-span-2 row-span-3 w-52 h-52 rounded-xl bg-slate-700 animate-pulse"></section>
          )}
          {!product.images &&
            Array(3)
              .fill(2)
              .map(() => (
                <section
                  key={crypto.randomUUID()}
                  className="w-24 h-24 rounded-3xl bg-slate-700 animate-pulse sm:h-40 sm:w-40"
                ></section>
              ))}
          {product.thumbnail && (
            <Image
              alt="Image product"
              height={500}
              width={500}
              className={`${
                imageLoading.thumbnail ? "invisible" : ""
              } object-cover col-span-2 row-span-3 w-52 h-52 rounded-xl active:scale-95 sm:h-72 sm:w-72`}
              src={product.thumbnail}
              onClick={() => imageHandler(product.thumbnail)}
              onLoad={handleThumbnailLoaded}
            />
          )}

          {product.images &&
            product.images.slice(0, 3).map((image, index) => (
              <Image
                alt="Image product"
                height={500}
                width={500}
                key={crypto.randomUUID()}
                className={`${imageLoading.images[index] ? "invisible" : ""}
                  object-cover w-24 h-24 rounded-3xl active:scale-95 sm:h-40 sm:w-40`}
                src={image}
                onClick={() => imageHandler(image)}
                onLoad={() => handleImageLoaded(index)}
              />
            ))}
        </section>
        {!product.title && (
          <section className="h-10 text-xl font-bold text-center rounded sm:self-center bg-slate-700 animate-pulse"></section>
        )}
        {!product.description && (
          <section className="h-20 text-xl font-bold text-center rounded sm:self-center bg-slate-700 animate-pulse"></section>
        )}
        {product.title && (
          <h2 className="mt-2 text-xl font-bold text-center sm:self-center sm:text-4xl">
            {product.title}
          </h2>
        )}
        {product.description && (
          <p className="mt-2 text-sm sm:self-center sm:text-base">
            {product.description}
          </p>
        )}

        <button
          onClick={() => {
            addCart(product);
          }}
          className={clsx(
            {
              "p-2 px-8 mx-auto font-semibold bg-green-400 rounded shadow-md cursor-pointer self-top active:bg-green-500 active:scale-95 h-fit bottom-2 w-fit":
                checkProduct(product),
            },
            {
              "p-2 px-8 mx-auto font-semibold bg-red-400 rounded shadow-md cursor-pointer self-top active:bg-red-500 active:scale-95 h-fit bottom-2 w-fit":
                !checkProduct(product),
            }
          )}
        >
          {checkProduct(product) ? "On Cart" : "Buy"}
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
        onClick={() => setShowImage({ show: false, img: "" })}
      >
        <section className="relative grid px-6 rounded animate-show">
          <button
            className="absolute top-[-1.5rem] right-[-.5rem] font-bold px-2 text-gray-800 bg-red-400 rounded active:bg-red-500 active:scale-95"
            onClick={() => setShowImage({ show: false, img: "" })}
          >
            x
          </button>
          {showImage.img && (
            <Image
              alt="Image product"
              height={500}
              width={500}
              src={showImage.img}
              className="object-cover rounded w-60 h-60 sm:h-96 sm:w-96 sm:max-h-[80dvh] z-10"
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          )}
        </section>
      </aside>
    </>
  );
}
