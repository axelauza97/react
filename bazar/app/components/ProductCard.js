import Link from "next/link";
import PropTypes from "prop-types";
import { ButtonControlCard } from "./UI/ButtonControlCard";
import { MotionLi } from "./UI/MotionLi";
import Image from "next/image";

export const ProductCard = ({ product }) => {
  //console.log(product);

  return (
    <MotionLi
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={{
          pathname: `/items/${product.id}`,
        }}
        key={product.id}
        className="relative bg-slate-100 shadow-md active:scale-95 rounded-lg mx-4 hover:scale-95 hover:duration-150  grid border border-neutral-500 grid-cols-2 gap-2 grid-rows-[min-content,min-content,min-content] p-2 auto-rows-min cursor-pointer h-full place-content-center"
      >
        <Image
          src={product.thumbnail}
          className="self-center object-cover w-32 h-32 rounded-xl justify-self-center row-span-full"
          alt={product.id}
          height={500}
          width={500}
        />
        <h3 className="font-bold">{product.title}</h3>
        <p className="overflow-hidden text-sm max-h-20">
          {product.description}
        </p>
        <p className="font-bold">${product.price}</p>
        <ButtonControlCard product={product} />
      </Link>
    </MotionLi>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
