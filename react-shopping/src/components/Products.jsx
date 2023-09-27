import { useCart } from "../hooks/useCart";
import "./Products.css";
export function Products({ products }) {
  const { cart, addCart, removeProductCart, checkProduct } = useCart();
  console.log(cart);
  return (
    <>
      <ul className="productsList">
        {products &&
          products.map((product) => (
            <li className="productItem" key={product.id}>
              <h3>{product.title}</h3>
              <img
                className="productImage"
                src={product.thumbnail}
                alt={product.title}
              />
              <p className="productDescription">{product.description}</p>
              <section className="productItemSection">
                <p>
                  <strong>Price:</strong> ${product.price}
                </p>
                {checkProduct(product) ? (
                  <button onClick={() => removeProductCart(product)}>
                    Remove
                  </button>
                ) : (
                  <button onClick={() => addCart(product)}>Add</button>
                )}
              </section>
            </li>
          ))}
      </ul>
      <footer className="footerDebug">{JSON.stringify(cart)}</footer>
    </>
  );
}
