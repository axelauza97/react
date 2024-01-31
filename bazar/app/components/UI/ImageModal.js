import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";

export const ImageModal = ({ showImage, setShowImage }) => {
  return (
    <aside
      className={clsx(
        {
          "hidden scale-95 transition ease-in-out duration-300":
            !showImage.show,
        },
        {
          "grid top-0 left-0 right-0 fixed h-screen place-content-center duration-300 backdrop-blur scale-100 transition ease-in-out shadow-lg":
            showImage.show,
        }
      )}
      onClick={() => setShowImage({ show: false, img: "" })}
    >
      <section className="grid px-6 rounded animate-show">
        <button
          className="absolute top-[-.5rem] right-[-.5rem] font-bold text-gray-800 bg-red-400 rounded active:bg-red-500 shadow-lg active:scale-95"
          onClick={() => setShowImage({ show: false, img: "" })}
        >
          <div className="w-5 h-5 close"></div>
        </button>
        {showImage.img && (
          <Image
            alt="Image product"
            height={500}
            width={500}
            src={showImage.img}
            className="object-cover rounded w-60 h-60 sm:h-96 sm:w-96 sm:max-h-[80dvh] z-10"
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        )}
      </section>
    </aside>
  );
};
ImageModal.propTypes = {
  showImage: PropTypes.object,
  setShowImage: PropTypes.func,
};
