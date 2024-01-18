"use client";
import { CartContext } from "@/context/cart";
import { AddCart } from "@/images/AddCart";
import { DeleteCart } from "@/images/DeleteCart";
import clsx from "clsx";
import { useContext } from "react";
import PropTypes from "prop-types";

export const ButtonControlCard = ({ product }) => {
  const { addCart, removeCart, checkProduct } = useContext(CartContext);

  return (
    <>
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
    </>
  );
};
ButtonControlCard.propTypes = {
  product: PropTypes.object.isRequired,
};
