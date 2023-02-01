import { useState } from "react";
import ProductActions from "./ProductActions";
import ProductCardActionArea from "./ProductCardActionArea";

const ProductBody = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <ProductCardActionArea product={product} quantity={quantity} />
      <ProductActions
        product={product}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </>
  );
};

export default ProductBody;
