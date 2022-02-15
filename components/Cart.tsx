import Image from "next/image";

import useCart from "../stores/cart";
import yourcart from "../public/yourcart.svg";

import CartProduct from "./CartProduct";

function Cart() {
    const cart = useCart((state) => state?.cart);

    const totalCartPrice = cart
        .map((item) => item.product.price * item.quantity)
        .reduce((acc, cur) => acc + cur, 0);

    return (
        <div className="mb-[9rem] flex flex-col gap-2 overflow-hidden sm:mb-14">
            <div>
                <Image
                    alt="your cart"
                    height="16px"
                    layout="responsive"
                    objectFit="contain"
                    src={yourcart}
                    width={100}
                />
            </div>
            <div className="flex flex-col gap-4 overflow-y-auto">
                {!cart.length && (
                    <div className="place-self-end text-[2rem] sm:text-[4rem]">
                        ...SO <span className="text-shadow text-black">EMPTY</span>
                    </div>
                )}
                {cart.map((item) => (
                    <CartProduct key={item.product.id} item={item} />
                ))}
            </div>
            <div className="absolute bottom-0 left-0 flex w-full flex-col justify-between bg-black sm:flex-row sm:border-t-[1px] sm:text-2xl">
                <span className="flex justify-between border-b-[1px] p-6 py-3 pt-4">
                    TOTAL: <span>${totalCartPrice}</span>
                </span>
                <button
                    className="text-shadow p-1 text-[13vw] text-black sm:h-fit sm:border-l-[1px] sm:py-3 sm:px-4 sm:pt-4 sm:text-[1.5rem]"
                    onClick={() =>
                        console.log(
                            cart.map((item) => ({
                                product: item.product.name,
                                quantity: item.quantity,
                                size: item.size,
                            })),
                            {totalPrice: totalCartPrice},
                        )
                    }
                >
                    CHECKOUT
                </button>
            </div>
        </div>
    );
}

export default Cart;
