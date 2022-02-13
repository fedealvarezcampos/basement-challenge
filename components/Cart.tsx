import Image from "next/image";

import yourcart from "../public/yourcart.svg";
import useCart from "../stores/cart";

function Cart() {
    const cart = useCart((state) => state?.cart);

    return (
        <div className="flex flex-col gap-5 overflow-hidden">
            <div className="px-6">
                <Image
                    alt="your cart"
                    height={20}
                    layout="responsive"
                    objectFit="contain"
                    src={yourcart}
                    width={100}
                />
            </div>
            <div className="flex flex-col gap-4 overflow-auto px-6">
                {!cart.length && <div className="text-[4rem]">...SO EMPTY</div>}
                {cart.map((item) => (
                    <div key={item?.product.id} className="flex gap-6 border-[1px] p-6">
                        <div className="relative h-[15vw] max-h-[12rem] w-[15vw] max-w-[12rem] bg-gradient-to-t from-neutral-900">
                            <Image
                                alt={item?.product.name}
                                height={100}
                                layout="fill"
                                objectFit="contain"
                                src={item?.product.image}
                                width={100}
                            />
                        </div>
                        <div className="flex flex-col justify-evenly gap-3">
                            <div className="flex flex-col">
                                <span className="text-2xl">{item?.product.name.toUpperCase()}</span>
                                <span className="text-neutral-400">
                                    {item?.product.description}
                                </span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <span className="flex place-items-center gap-3">
                                    QUANTITY:
                                    <span className="flex w-fit gap-1 rounded-full border-[1px] py-[1px] px-[15px]">
                                        <button>-</button>
                                        <span>{item.quantity}</span>
                                        <button>+</button>
                                    </span>
                                </span>
                                <span className="flex place-items-center gap-3">
                                    SIZE:
                                    {item.product.options[0].values.map((size, i) => (
                                        <button
                                            key={i}
                                            className={`h-[2rem] w-[2rem] pt-1 pr-[1px] text-[0.8rem] ${
                                                size === item.size && "rounded-full border-[1px]"
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
