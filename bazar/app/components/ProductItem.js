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
      <section className="gap-4 sm:gap-2 sm:p-2 sm:max-h-[38rem] my-auto flex-1 grid max-w-xs sm:max-w-4xl max-h-[38rem] mx-auto grid-rows-[1fr,min-content,min-content,min-content] sm:grid-cols-[auto,auto,13rem] sm:grid-rows-3">
        <section className="grid items-center grid-cols-3 grid-rows-2 gap-2 sm:grid-rows-3 sm:col-span-2 sm:row-span-4 justify-items-center">
          <SkeletonItem product={product} images={true} />
          {product.thumbnail && (
            <Image
              alt="Image product"
              height={500}
              width={500}
              priority={true}
              className={`${
                imageLoading.thumbnail ? "invisible" : ""
              } object-cover sm:col-span-2 col-span-3 row-span-2 sm:row-span-3 w-56 h-56 rounded-xl active:scale-95 sm:h-72 sm:w-72`}
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
                priority={false}
                key={product.title}
                className={`${imageLoading.images[index] ? "invisible" : ""}
                  object-cover w-24 h-24 rounded-xl active:scale-95 sm:h-40 sm:w-40`}
                src={image}
                onClick={() => imageHandler(image)}
                onLoad={() => handleImageLoaded(index)}
              />
            ))}
        </section>
        <SkeletonItem product={product} images={false} />
        {product.title && product.category && product.price && (
          <section className="sm:self-end sm:w-fit sm:mx-auto sm:pl-8">
            {product.title && (
              <h2 className="text-xl font-bold sm:self-center sm:text-4xl sm:w-fit sm:mx-auto">
                {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
              </h2>
            )}
            {product.category && (
              <h3 className="text-xs font-semibold sm:text-sm sm:self-center sm:w-fit ">
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </h3>
            )}
            {product.price && (
              <h2 className="text-sm font-medium sm:self-center sm:w-fit ">
                ${product.price}
              </h2>
            )}
          </section>
        )}
        {product.description && (
          <p className="sm:pl-8 text-sm text-left sm:self-center sm:text-base sm:max-w-[15rem] ">
            {product.description}
          </p>
        )}

        <button
          onClick={() => {
            addCart(product);
          }}
          className={clsx(
            {
              "sm:ml-8 p-2 mb-4 px-4 mx-auto font-semibold bg-green-400 rounded shadow-md cursor-pointer self-top active:bg-green-500 active:scale-95 h-fit bottom-2 w-full sm:w-[width:15rem]":
                checkProduct(product),
            },
            {
              "sm:ml-8 p-2 mb-4 px-4 mx-auto font-semibold bg-red-400 rounded shadow-md cursor-pointer self-top active:bg-red-500 active:scale-95 h-fit bottom-2 w-full sm:w-[width:15rem]":
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
