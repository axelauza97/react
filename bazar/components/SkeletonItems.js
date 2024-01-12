import PropTypes from "prop-types";

export const SkeletonItems = ({ loading }) => {
  return (
    <>
      {loading && (
        <section className="h-6 max-w-xl m-4 rounded-lg sm:mx-auto bg-slate-700 animate-pulse"></section>
      )}
      {loading && (
        <section className="h-6 max-w-xl m-4 rounded-lg sm:mx-auto bg-slate-700 animate-pulse"></section>
      )}
      {loading &&
        Array(3)
          .fill(0)
          .map(() => (
            <section
              key={crypto.randomUUID()}
              className="h-32 max-w-xl p-2 m-4 mt-2 border rounded-lg cursor-pointer sm:mx-auto auto-rows-min bg-slate-700 animate-pulse sm:grid-cols-2 sm:max-w-4xl"
            ></section>
          ))}
    </>
  );
};
SkeletonItems.propTypes = {
  loading: PropTypes.object.isRequired,
};
