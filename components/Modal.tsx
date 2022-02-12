import {Dispatch, SetStateAction} from "react";
import {motion} from "framer-motion";
import Image from "next/image";

import yourcart from "../public/yourcart.svg";

type Props = {
    setModal: Dispatch<SetStateAction<boolean>>;
};

function Modal({setModal}: Props) {
    return (
        <>
            <motion.div
                animate={{x: 0, opacity: 1, transition: {bounce: 0}}}
                className="fixed top-0 right-0 z-30 flex h-[55vw] w-[50vw] flex-col border-l-2 border-b-2 border-white bg-[black] p-8"
                exit={{x: 500, opacity: 0, transition: {bounce: 0}}}
                initial={{x: 150, opacity: 0}}
            >
                <button className="w-fit self-end text-[2vw]" onClick={() => setModal(false)}>
                    → CLOSE
                </button>
                <Image
                    alt="your cart"
                    height={20}
                    layout="responsive"
                    objectFit="contain"
                    src={yourcart}
                    width={100}
                />
            </motion.div>
            <motion.div
                animate={{opacity: 1}}
                className="fixed top-0 z-20 h-full w-full bg-neutral-900/80"
                exit={{opacity: 0}}
                initial={{opacity: 0}}
                transition={{duration: 0.3}}
                onClick={() => setModal(false)}
            />
        </>
    );
}

export default Modal;
