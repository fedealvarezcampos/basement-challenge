import {Dispatch, SetStateAction, useEffect, useState} from "react";
import Image from "next/image";
import {motion} from "framer-motion";

import logo from "../public/logo.svg";
import mobileLogo from "../public/moblogo.svg";
import navicons from "../public/navicons.svg";
import useCart from "../stores/cart";
import useCheckMobile from "../hooks/useCheckMobile";

type Props = {
    setModal: Dispatch<SetStateAction<boolean>>;
};

function NavBar({setModal}: Props) {
    const mobile = useCheckMobile();

    const cart = useCart((state) => state?.cart);

    const numberOfItems = cart
        .map((product) => product.quantity)
        .reduce((acc, cur) => acc + cur, 0);

    const [quantityInCart, setQuantityInCart] = useState<number>(0);

    useEffect(() => {
        setQuantityInCart(numberOfItems);
    }, [numberOfItems]);

    return (
        <motion.nav
            animate={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.4,
                },
            }}
            className="h-22 sticky top-0 z-30 flex w-full justify-between gap-20 bg-[black] px-[3%]"
            initial={{y: -50, opacity: 0}}
        >
            {!mobile ? (
                <Image alt="logo" height={100} objectFit="contain" src={logo} width="160px" />
            ) : (
                <Image alt="logo" height={100} objectFit="contain" src={mobileLogo} width="35px" />
            )}
            {!mobile && (
                <Image
                    alt="header icons"
                    height={100}
                    objectFit="contain"
                    src={navicons}
                    width="260px"
                />
            )}
            <div className="flex w-[11rem] justify-end place-self-center">
                <button
                    className="h-fit rounded-full border-2 border-solid border-white py-2 px-7 pt-2.5 text-[0.9rem] font-bold hover:bg-[white] hover:text-black sm:text-xl"
                    onClick={() => setModal(true)}
                >
                    CART ({quantityInCart})
                </button>
            </div>
        </motion.nav>
    );
}

export default NavBar;
