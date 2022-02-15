import Image from "next/image";

import {Product} from "../product/types";
import useCart from "../stores/cart";

export interface Props {
    item: {
        product: Product;
        quantity: number;
        size: string;
    };
}

function CartProduct({item}: Props) {
    const addProduct = useCart((state) => state.addProduct);
    const removeProduct = useCart((state) => state.removeProduct);
    const setSize = useCart((state) => state.setSize);

    return (
        <div key={item?.product.id} className="flex gap-3 border-[1px] p-4 sm:gap-6">
            <div className="relative h-full w-[24vw] shrink-0 bg-gradient-to-t from-neutral-900 sm:h-[15vw] sm:max-h-[12rem] sm:w-[15vw] sm:max-w-[12rem]">
                <Image
                    alt={item?.product.name}
                    layout="fill"
                    objectFit="contain"
                    src={item?.product.image}
                />
            </div>
            <div className="flex flex-col justify-evenly gap-3">
                <div className="flex flex-col">
                    <span className="text-[1rem] sm:text-2xl">
                        {item?.product.name.toUpperCase()}
                    </span>
                    <span className="text-[0.8rem] text-neutral-400 sm:text-lg">
                        {item?.product.description}
                    </span>
                </div>
                <div className="flex flex-col gap-3 text-[0.8rem] sm:text-base">
                    <span className="flex place-items-center gap-3">
                        QUANTITY:
                        <span className="flex w-fit gap-1 rounded-full border-[1px] py-[1px] px-[15px]">
                            <button onClick={() => removeProduct(item.product)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => addProduct(item.product)}>+</button>
                        </span>
                    </span>
                    <span className="flex place-items-center gap-2 sm:gap-3">
                        SIZE:
                        {item.product.options[0].values.map((size, i) => (
                            <button
                                key={i}
                                className={`h-[1.6rem] w-[1.6rem] pt-1 pr-[1px] text-[0.8rem] sm:h-[2rem] sm:w-[2rem] ${
                                    size === item.size && "rounded-full border-[1px]"
                                }`}
                                onClick={() => setSize(item.product, size)}
                            >
                                {size}
                            </button>
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
