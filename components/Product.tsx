import {Dispatch, SetStateAction, useState} from "react";
import Image from "next/image";
import {motion} from "framer-motion";

import useCart from "../stores/cart";
import {Product} from "../product/types";
import addToCart from "../public/addtocart.svg";

type Props = {
    product: Product;
    setModal: Dispatch<SetStateAction<boolean>>;
};

function ProductItem({product, setModal}: Props) {
    const [cartButton, setCartButton] = useState(false);

    const addProduct = useCart((state) => state.addProduct);

    const handleProduct = (product: Product) => {
        addProduct(product);
        setModal(true);
    };

    return (
        <div className="flex flex-1 flex-col">
            <div className="relative mt-10 h-[80vw] max-h-[35rem] cursor-pointer">
                <div
                    className="flex h-full w-full place-content-center"
                    onClick={() => handleProduct(product)}
                    onMouseOut={() => setCartButton(false)}
                >
                    {cartButton && (
                        <>
                            <motion.div
                                animate={{opacity: 1}}
                                className="z-10 flex"
                                initial={{opacity: 0}}
                            >
                                <Image
                                    alt="add to cart"
                                    aria-label="add to cart"
                                    layout="intrinsic"
                                    objectFit="contain"
                                    src={addToCart}
                                />
                            </motion.div>
                            <motion.div
                                animate={{opacity: 1, transition: {duration: 0.2}}}
                                className={
                                    cartButton &&
                                    "absolute z-10 flex h-full w-full place-content-center bg-neutral-900 mix-blend-lighten"
                                }
                                initial={{opacity: 0}}
                            />
                        </>
                    )}
                </div>
                <Image
                    alt="product"
                    className="z-5 bg-gradient-to-t from-neutral-900"
                    layout="fill"
                    objectFit="contain"
                    src={product?.image}
                    onMouseOver={() => setCartButton(true)}
                />
            </div>
            <div className="flex place-content-between border-t-2 border-white py-2">
                <span>{product?.name}</span>
                <span>${product?.price}</span>
            </div>
        </div>
    );
}

export default ProductItem;
