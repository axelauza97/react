import "./App.css";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import { CartProvider } from "./context/cart";

function App() {
  //const products = productsResponse.products;
  const { filteredProducts, products, getCategories } = useFilters();

  return (
    <>
      <CartProvider>
        <Header categories={Array.from(getCategories(products))} />
        <main>
          <Products products={filteredProducts} />
        </main>
      </CartProvider>
    </>
  );
}

export default App;
