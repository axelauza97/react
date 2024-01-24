"use client";
import PropTypes from "prop-types";

import Image from "next/image";
import { SkeletonItem } from "./UI/SkeletonItem";
import { CartContext } from "@/context/cart";
import { useCallback, useContext, useState } from "react";
import clsx from "clsx";
import { ImageModal } from "./UI/ImageModal";

export const ProductItem = ({ product }) => {
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

  const imageHandler = (image) => {
    setShowImage({
      show: true,
      img: image,
    });
  };

  return (
    <>
      <section className="gap-4 sm:p-2 sm:max-h-[38rem] sm:my-auto flex-1 grid max-w-xs sm:max-w-4xl max-h-screen mx-auto grid-rows-[1fr,min-content,min-content,0.25fr] sm:grid-cols-3 auto sm:grid-rows-3">
        <section className="grid items-center grid-cols-3 grid-rows-3 gap-2 sm:col-span-2 sm:row-span-4 justify-items-center">
          <SkeletonItem product={product} images={true} />
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
        <SkeletonItem product={product} images={false} />

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
      <ImageModal showImage={showImage} setShowImage={setShowImage} />
    </>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
  params: PropTypes.string,
};
