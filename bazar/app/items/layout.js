import { CartProvider } from "@/context/cart";
import { FiltersProvider } from "@/context/filters";
import { ModalProvider } from "@/context/modal";
import { ProductsProvider } from "@/context/products";
import { SearchLoadingProvider } from "@/context/searchLoading";
import PropTypes from "prop-types";
import { SearchBar } from "../components/SearchBar";
import { CartFloat } from "../components/CartFloat";
import { Modal } from "../components/UI/Modal";

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object,
};

export default function Layout({ children }) {
  //console.log(params);

  return (
    <section className="flex flex-col min-h-[calc(95dvh)] sm:min-h-[calc(100dvh)]">
      <CartProvider>
        <ModalProvider>
          <FiltersProvider>
            <SearchLoadingProvider>
              <ProductsProvider>
                <SearchBar />
                {children}
                <CartFloat />
                <Modal />
              </ProductsProvider>
            </SearchLoadingProvider>
          </FiltersProvider>
        </ModalProvider>
      </CartProvider>
    </section>
  );
}
