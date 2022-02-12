import create from "zustand";
import {devtools, persist} from "zustand/middleware";

import {Product} from "../product/types";

interface CartState {
    cart: {id: Product["id"]; quantity: number; size: string}[];
    addProduct: (id: string) => void;
    removeProduct: (id: string) => void;
}

const useStore = create<CartState>(
    persist(
        devtools((set) => ({
            cart: [],
            addProduct: (id) =>
                set((state) => {
                    const isPresent = state.cart.find((product) => product.id === id);

                    if (!isPresent) {
                        return {
                            ...state,
                            cart: [...state.cart, {id, quantity: 1, size: "S"}],
                        };
                    }

                    const updatedCart = state.cart.map((product) =>
                        product.id === id ? {...product, quantity: product.quantity + 1} : product,
                    );

                    return {
                        ...state,
                        cart: updatedCart,
                    };
                }),
            removeProduct: (id) =>
                set((state) => {
                    const isPresent = state.cart.find((product) => product.id === id);

                    if (isPresent) {
                        return {
                            ...state,
                        };
                    }

                    const updatedCart = state.cart
                        .map((product) =>
                            product.id === id
                                ? {...product, quantity: Math.max(product.quantity - 1, 0)}
                                : product,
                        )
                        .filter((product) => product.quantity);

                    return {
                        ...state,
                        cart: updatedCart,
                    };
                }),
        })),
        {
            name: "products",
        },
    ),
);

export default useStore;

// addProduct: (product) =>
//                 set((state) => ({
//                     products: [
//                         ...state.products,
//                         {
//                             product: product,
//                             quantity: +1,
//                             size: "S",
//                         },
//                     ],
//                 })),
