import { ProductCard } from "./ProductCard";
import PropTypes from "prop-types";

export const ProductsList = ({ products }) => {
  return (
    <section>
      <ul className="grid max-w-xl gap-4 m-4 mx-auto sm:grid-cols-2 sm:max-w-4xl justify-items-stretch items-stretch">
        {products.map((product) => (
          <ProductCard key={crypto.randomUUID()} product={product} />
        ))}
      </ul>
    </section>
  );
};
ProductsList.propTypes = {
  products: PropTypes.object.isRequired,
};
