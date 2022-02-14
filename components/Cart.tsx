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
        <div className="mb-14 flex flex-col gap-2 overflow-hidden">
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
                {!cart.length && <div className="place-self-end text-[4rem]">...SO EMPTY</div>}
                {cart.map((item) => (
                    <CartProduct key={item.product.id} item={item} />
                ))}
            </div>
            <div className="absolute bottom-0 left-0 flex w-full justify-between border-t-[1px] text-2xl">
                <span className="p-6 py-3 pt-4">TOTAL: ${totalCartPrice}</span>
                <button
                    className="text-shadow h-fit border-l-[1px] p-6 py-3 pt-4 text-black"
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
