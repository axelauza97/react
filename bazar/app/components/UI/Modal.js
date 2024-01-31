"use client";
import { CartContext } from "@/context/cart";
import { ModalContext } from "@/context/modal";
import { useContext } from "react";

export const Modal = () => {
  const { showModal, setShowModal } = useContext(ModalContext);
  const { cart, addCart, removeCart, getTotalPrice } = useContext(CartContext);

  /*const { isLoading, setIsLoading } = useContext(LoaderContext);
   */

  return (
    <>
      {/*<div className="fixed bottom-0 left-0 p-2 text-xs ">
        {cart.map((e) => e.id + " " + e.title + " " + e.quantity)}
  </div>*/}
      {showModal ? (
        <div className="fixed top-0 left-0 right-0 z-[999] min-h-[100dvh] grid backdrop-blur-md place-content-center">
          <div className="max-w-md relative grid gap-4 max-h-[80dvh] md:max-h-[70dvh] bg-slate-100 rounded-xl p-4 shadow-2xl">
            <button
              className="absolute font-bold bg-red-400 rounded shadow-md cursor-pointer right-2 top-2 active:bg-red-500 active:scale-95"
              onClick={() => setShowModal((prev) => !prev)}
            >
              <div className="w-5 h-5 close"></div>
            </button>
            <h3 className="mx-auto text-2xl font-bold">Your cart Items!</h3>
            <section className="overflow-x-hidden overflow-y-auto">
              <ul className="grid max-h-full gap-4">
                {cart.length == 0 && <h3>No product items in your cart</h3>}
                {cart.length > 0 &&
                  cart.map((e) => (
                    <li
                      key={e.title}
                      className="grid border p-2 rounded-lg bg-slate-100 shadow-md  grid-cols-[max-content,1fr,min-content] items-center gap-2 justify-items-stretch"
                    >
                      <img
                        className="object-cover h-full w-28 max-h-28 rounded-xl "
                        src={e.thumbnail}
                      />
                      <h2 className="text-xs font-bold sm:text-sm justify-self-start">
                        {e.title}
                      </h2>
                      <aside className="grid items-stretch px-2 justify-items-stretch">
                        <button
                          onClick={() => addCart(e)}
                          className="p-2 font-semibold bg-red-400 rounded shadow-md cursor-pointer active:bg-red-500 active:scale-95"
                        >
                          +
                        </button>
                        <h4 className="py-2 font-bold text-center">
                          {e.quantity}
                        </h4>
                        <button
                          onClick={() => removeCart(e)}
                          className="p-2 font-semibold bg-red-400 rounded shadow-md cursor-pointer active:bg-red-500 active:scale-95"
                        >
                          -
                        </button>
                      </aside>
                    </li>
                  ))}
              </ul>
            </section>
            <section className="grid grid-cols-[1fr,2fr] justify-items-stretch">
              <h3 className="p-2 text-sm font-bold text-center md:text-base">
                Price : ${getTotalPrice()}
              </h3>
              <button
                className="p-2 font-semibold bg-red-400 rounded shadow-md cursor-pointer active:bg-red-500 active:scale-95"
                onClick={() => {}}
              >
                Checkout!
              </button>
            </section>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
