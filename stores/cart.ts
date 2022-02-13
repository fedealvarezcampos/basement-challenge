import create from "zustand";
import {devtools, persist} from "zustand/middleware";

import {Product} from "../product/types";

interface CartState {
    cart: {product: Product; quantity: number; size: string}[];
    addProduct: (product: Product) => void;
    removeProduct: (product: Product) => void;
}

const useCart = create<CartState>(
    persist(
        devtools((set) => ({
            cart: [],
            addProduct: (product) =>
                set((state) => {
                    const alreadyInCart = state.cart.find((cart) => cart.product.id === product.id);

                    if (!alreadyInCart) {
                        return {
                            ...state,
                            cart: [...state.cart, {product, quantity: 1, size: "S"}],
                        };
                    }

                    const updatedCart = state.cart.map((cart) =>
                        cart.product.id === product.id
                            ? {...cart, quantity: cart.quantity + 1}
                            : cart,
                    );

                    return {
                        ...state,
                        cart: updatedCart,
                    };
                }),
            removeProduct: (product) =>
                set((state) => {
                    const alreadyInCart = state.cart.find((cart) => cart.product.id === product.id);

                    if (alreadyInCart) {
                        return {
                            ...state,
                        };
                    }

                    const updatedCart = state.cart
                        .map((cart) =>
                            cart.product.id === product.id
                                ? {...cart, quantity: Math.max(cart.quantity - 1, 0)}
                                : cart,
                        )
                        .filter((cart) => cart.quantity);

                    return {
                        ...state,
                        cart: updatedCart,
                    };
                }),
        })),
        {
            name: "cart",
        },
    ),
);

export default useCart;
