import { CartContext } from "@/context/cart";
import { DeleteCart } from "@/images/DeleteCart";
import { AddCart } from "@/images/AddCart";
import { clsx } from "clsx";
import Link from "next/link";
import PropTypes from "prop-types";
import { useContext } from "react";

export const ProductCard = ({ product }) => {
  const { addCart, removeCart, checkProduct } = useContext(CartContext);

  return (
    <Link
      href={{
        pathname: `/items/${product.id}`,
      }}
      key={product.id}
      className="relative bg-slate-100 shadow-md active:scale-95 rounded-lg mx-4 hover:scale-95 hover:duration-150  grid border border-neutral-500 grid-cols-2 gap-2 grid-rows-[min-content,min-content,min-content] p-2 auto-rows-min cursor-pointer h-full place-content-center"
    >
      <img
        src={product.thumbnail}
        className="self-center object-cover w-32 h-32 rounded-xl justify-self-center row-span-full"
      />
      <h3 className="font-bold">{product.title}</h3>
      <p className="text-sm max-h-20 overflow-hidden">{product.description}</p>
      <p className="font-bold">${product.price}</p>
      <button
        className={clsx(
          {
            "absolute focus:bg-green-400 bottom-2 right-2 bg-green-300 p-1 rounded-sm shadow backdrop-blur-2xl":
              checkProduct(product),
          },
          {
            "absolute focus:bg-slate-400 bottom-2 right-2 bg-slate-300 p-1 rounded-sm shadow backdrop-blur-2xl":
              !checkProduct(product),
          }
        )}
        onClick={(e) => {
          e.preventDefault();
          if (checkProduct(product)) {
            removeCart(product);
          } else {
            addCart(product);
          }
        }}
      >
        {checkProduct(product) ? (
          <AddCart className="h-8 " />
        ) : (
          <DeleteCart className="h-8 " />
        )}
      </button>
    </Link>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
