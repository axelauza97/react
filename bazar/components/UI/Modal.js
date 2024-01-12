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
      {/*<div className="fixed bottom-0 left-0 text-xs p-2 ">
        {cart.map((e) => e.id + " " + e.title + " " + e.quantity)}
  </div>*/}
      {showModal ? (
        <div className="fixed top-0 left-0 right-0 z-[999] min-h-[100dvh] grid backdrop-blur-md place-content-center">
          <div className="max-w-md relative grid gap-4 max-h-[80dvh] md:max-h-[70dvh] bg-slate-200 rounded-xl p-4 shadow-2xl">
            <button
              className="absolute right-2 top-2 font-bold p-2 bg-red-400 rounded shadow-md cursor-pointer active:bg-red-500 active:scale-95"
              onClick={() => setShowModal((prev) => !prev)}
            >
              X
            </button>
            <h3 className="mx-auto text-2xl font-bold">Your cart Items!</h3>
            <section className="overflow-y-auto overflow-x-hidden">
              <ul className="grid gap-4  max-h-full">
                {cart.length == 0 && <h3>No product items in your cart</h3>}
                {cart.length > 0 &&
                  cart.map((e) => (
                    <li
                      key={e.title}
                      className="grid border p-2 rounded-lg bg-slate-100 shadow-md border-neutral-500 grid-cols-[max-content,1fr,min-content] items-center gap-2 justify-items-stretch"
                    >
                      <img
                        className="object-cover w-28 h-full max-h-28 rounded-xl "
                        src={e.thumbnail}
                      />
                      <h2 className="font-bold text-xl justify-self-start">
                        {e.title}
                      </h2>
                      <aside className="px-2 grid justify-items-stretch items-stretch">
                        <button
                          onClick={() => addCart(e)}
                          className="p-2 font-semibold bg-red-400 rounded shadow-md cursor-pointer active:bg-red-500 active:scale-95"
                        >
                          +
                        </button>
                        <h4 className="text-center py-2 font-bold">
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
              <h3 className="font-bold text-center text-sm md:text-base p-2">
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
