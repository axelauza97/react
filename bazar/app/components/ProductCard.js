import Link from "next/link";
import PropTypes from "prop-types";
import { ButtonControlCard } from "./UI/ButtonControlCard";

export const ProductCard = ({ product }) => {
  //console.log(product);

  return (
    <Link
      href={{
        pathname: `/items/${product.id}`,
      }}
      key={product.id}
      className="relative bg-slate-100 shadow-md active:scale-95 rounded-lg mx-4 hover:scale-95 hover:duration-150  grid border border-neutral-500 grid-cols-2 gap-2 grid-rows-[min-content,min-content,min-content] p-2 auto-rows-min cursor-pointer h-full place-content-center"
    >
      <img
        src={product.thumbnail}
        className="self-center object-cover w-32 h-32 rounded-xl justify-self-center row-span-full"
      />
      <h3 className="font-bold">{product.title}</h3>
      <p className="text-sm max-h-20 overflow-hidden">{product.description}</p>
      <p className="font-bold">${product.price}</p>
      <ButtonControlCard product={product} />
    </Link>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
