import { CartProvider } from "@/context/cart";
import { ModalProvider } from "@/context/modal";
import { ProductsProvider } from "@/context/products";
import { SearchLoadingProvider } from "@/context/searchLoading";
import PropTypes from "prop-types";
import { SearchBar } from "../components/SearchBar";
import { Modal } from "../components/UI/Modal";

export const metadata = {
  title: {
    template: "%s - Axel Auza",
    default: "Bazar Store - Axel Auza",
  },
  description:
    "Example Ecommerce Web Page written with Next.js and Tailwind.css by Axel Auza A",
  keywords: "Axel Auza, Next.js, Tailwind, FrontEnd, FullStack",
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object,
};

export default function Layout({ children }) {
  //console.log(params);

  return (
    <section className="flex flex-col min-h-[calc(90dvh)] sm:min-h-[calc(100dvh)]">
      <CartProvider>
        <ModalProvider>
          <SearchLoadingProvider>
            <ProductsProvider>
              <SearchBar />
              {children}
              <Modal />
            </ProductsProvider>
          </SearchLoadingProvider>
        </ModalProvider>
      </CartProvider>
    </section>
  );
}
