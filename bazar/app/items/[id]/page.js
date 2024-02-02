import PropTypes from "prop-types";
import { ProductItem } from "@/app/components/ProductItem";
import { hostUrl } from "@/app/env/env";

Page.propTypes = {
  params: PropTypes.object,
};
export const metadata = {
  title: "Product Overview",
};
export const fetchSearchItem = async ({ value }) => {
  return fetch(`${hostUrl}/api/item/${value}`, {
    next: { revalidate: 3600 },
  }).then((res) => res.json());
};

export default async function Page({ params }) {
  const product = await fetchSearchItem({ value: params.id });

  return <ProductItem product={product} />;
}
