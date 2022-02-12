import {Dispatch, SetStateAction} from "react";
import Image from "next/image";
import {motion} from "framer-motion";

import logo from "../public/logo.svg";
import navicons from "../public/navicons.svg";

type Props = {
    setModal: Dispatch<SetStateAction<boolean>>;
};

function NavBar({setModal}: Props) {
    return (
        <motion.nav
            animate={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.4,
                },
            }}
            className="sticky top-0 z-20 flex w-full justify-between gap-20 bg-[black] px-[3%]"
            initial={{y: -50, opacity: 0}}
        >
            <Image alt="logo" height={100} objectFit="contain" src={logo} width="160px" />
            <Image
                alt="header icons"
                height={100}
                objectFit="contain"
                src={navicons}
                width="260px"
            />
            <button
                className="h-fit place-self-center rounded-full border-2 border-solid border-white py-2 px-8 pt-2.5 text-xl font-bold"
                onClick={() => setModal(true)}
            >
                CART (0)
            </button>
        </motion.nav>
    );
}

export default NavBar;
