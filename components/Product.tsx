import Image from "next/image";

import {Product} from "../product/types";

type Props = {
  product: Product;
};

function ProductItem({product}: Props) {
  return (
    <div className="flex-1 bg-gradient-to-t from-neutral-900">
      <Image
        alt="product"
        height={100}
        layout="responsive"
        objectFit="contain"
        src={product?.image}
        width={100}
      />
      <div>
        <span>{product?.name}</span>
        <span>{product?.price}</span>
      </div>
    </div>
  );
}

export default ProductItem;
