export const searchItems = ({ value }) => {
  return fetch(`/api/items?search=${value}`)
    .then((res) => res.json())
    .then((res) => res.products);
};
