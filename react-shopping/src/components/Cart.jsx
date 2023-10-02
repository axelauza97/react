import { useState } from "react";
import "./Cart.css";
import { ShoppingCartIcon } from "../assets/ShoppingIcon";
import { useCart } from "../hooks/useCart";
export function Cart() {
  const [show, setShow] = useState(false);
  const { cart, addCart, removeCart, getTotalPrice } = useCart();
  const onClickHandler = () => {
    if (cart.length == 0) {
      alert("Cart is empty");
      return;
    }
    setShow(!show);
  };
  const onCloseHandler = () => {
    setShow(!show);
  };
  //console.log(cart);
  return (
    <>
      <button className="btnCart" onClick={onClickHandler}>
        <ShoppingCartIcon />
      </button>
      <aside className={`cart ${show ? "show" : ""}`}>
        <div className="cartContent">
          <header className="headerCart">
            <h3>Cart</h3>
            <button className="close" onClick={onCloseHandler}>
              &times;
            </button>
          </header>

          <ul className="cartList">
            {cart &&
              cart.map((item) => (
                <li key={item.id} className="cartItem">
                  <img
                    className="cartImage"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <p>Price ${item.price}</p>
                  <p>
                    <button
                      type="button"
                      className="buttonQty"
                      onClick={() => {
                        addCart(item);
                      }}
                    >
                      +
                    </button>
                    {item.quantity}
                    <button
                      type="button"
                      className="buttonQty"
                      onClick={() => removeCart(item)}
                    >
                      -
                    </button>
                  </p>
                </li>
              ))}
            {cart.length == 0 && <p>Cart is empty</p>}
          </ul>
          <footer>
            <h3>Total: ${getTotalPrice()}</h3>
          </footer>
        </div>
      </aside>
    </>
  );
}
