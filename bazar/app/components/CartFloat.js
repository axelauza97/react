"use client";
import { ModalContext } from "@/context/modal";
import { Cart } from "@/images/cart";
import { useContext } from "react";

export const CartFloat = () => {
  const { setShowModal } = useContext(ModalContext);
  return (
    <div
      onClick={() => setShowModal((prev) => !prev)}
      className="fixed flex items-center justify-center p-1 bg-blue-100 border-2 border-blue-500 rounded-full hover:scale-95 hover:bg-blue-300 w-14 h-14 bottom-5 right-5 active:scale-95 hover:cursor-pointer"
    >
      <Cart className="drop-shadow " />
    </div>
  );
};
