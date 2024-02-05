import Link from "next/link";
import PropTypes from "prop-types";
import { ButtonControlCard } from "./UI/ButtonControlCard";
import { MotionLi } from "./UI/MotionLi";
import Image from "next/image";

export const ProductCard = ({ product, index }) => {
  //console.log(product);

  return (
    <MotionLi
      initial={{ opacity: 0, scale: 0.85, filter: "blur(0.25rem)" }}
      //animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
      transition={{
        duration: 0.25,
        delay: 0.1 * index > 0.4 ? 0.1 : 0.1 * index,
      }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0)" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Link
        href={{
          pathname: `/items/${product.id}`,
        }}
        key={product.id}
        className="relative group bg-slate-100 shadow active:scale-95 rounded-lg  grid grid-cols-2 sm:gap-2 grid-rows-[min-content,min-content,min-content,min-content,min-content] auto-rows-min cursor-pointer h-full place-content-center"
      >
        <Image
          src={product.thumbnail}
          className="self-center object-cover col-span-2 row-span-2 w-full h-36 sm:w-42 sm:h-42  justify-self-center group-hover:scale-95 group-hover:duration-150 rounded-t-lg"
          alt={product.id}
          height={500}
          width={500}
          priority={index <= 3 ? true : false}
        />
        <h3 className="pl-2 max-w-xs pt-1 text-sm font-bold col-span-full">
          {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
        </h3>
        <p className="pl-2 row-start-4 overflow-hidden text-xs col-span-full">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </p>
        <p className="pl-2 row-start-5 font-medium">${product.price}</p>
        <ButtonControlCard product={product} />
      </Link>
    </MotionLi>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
