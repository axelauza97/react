import PropTypes from "prop-types";

export const Item = ({ element, clickHandler }) => {
  return (
    <li
      className="w-40 px-2 py-2 m-2 border border-gray-700 border-solid rounded hover:border-gray-800 hover:cursor-pointer"
      onClick={() => clickHandler(element.id)}
    >
      {element.text}
    </li>
  );
};
Item.propTypes = {
  element: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
