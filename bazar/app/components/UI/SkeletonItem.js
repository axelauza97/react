import PropTypes from "prop-types";

export const SkeletonItem = ({ product, images }) => {
  return (
    <>
      {images && !product.thumbnail && (
        <section className="col-span-2 row-span-3 w-52 h-52 rounded-xl bg-slate-700 animate-pulse"></section>
      )}
      {images &&
        !product.images &&
        Array(3)
          .fill(2)
          .map(() => (
            <section
              key={crypto.randomUUID()}
              className="w-24 h-24 rounded-3xl bg-slate-700 animate-pulse sm:h-40 sm:w-40"
            ></section>
          ))}
      {images == false && !product.title && (
        <section className="h-10 text-xl font-bold text-center rounded sm:self-center bg-slate-700 animate-pulse"></section>
      )}
      {images == false && !product.description && (
        <section className="h-20 text-xl font-bold text-center rounded sm:self-center bg-slate-700 animate-pulse"></section>
      )}
    </>
  );
};
SkeletonItem.propTypes = {
  product: PropTypes.object,
  images: PropTypes.bool,
};
