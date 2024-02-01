import PropTypes from "prop-types";

export const SkeletonItem = ({ product, images }) => {
  return (
    <>
      {images && !product.thumbnail && (
        <section className="w-56 h-56 col-span-3 row-span-2 sm:col-span-2 sm:row-span-3 rounded-xl active:scale-95 sm:h-72 sm:w-64 bg-slate-700 animate-pulse" />
      )}
      {images &&
        !product.images &&
        Array(3)
          .fill(2)
          .map(() => (
            <section
              key={crypto.randomUUID()}
              className="w-24 h-24 rounded-xl active:scale-95 sm:h-40 sm:w-36 bg-slate-700 animate-pulse"
            />
          ))}
      {images == false && !product.title && (
        <section className="sm:w-52 sm:self-end sm:mx-auto sm:pl-8">
          <section className="rounded h-14 sm:self-center bg-slate-700 animate-pulse" />
        </section>
      )}
      {images == false && !product.description && (
        <section className="h-20 rounded sm:w-36 sm:pl-8 sm:mx-auto sm:self-center bg-slate-700 animate-pulse" />
      )}
    </>
  );
};
SkeletonItem.propTypes = {
  product: PropTypes.object,
  images: PropTypes.bool,
};
