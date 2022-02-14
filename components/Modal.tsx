import {Dispatch, ReactNode, SetStateAction} from "react";
import {motion} from "framer-motion";

import useClosingKey from "../hooks/useClosingKey";

type Props = {
    setModal: Dispatch<SetStateAction<boolean>>;
    children: ReactNode | undefined;
};

function Modal({setModal, children}: Props) {
    useClosingKey("Escape", setModal);

    return (
        <>
            <motion.div
                animate={{x: 0, opacity: 1, transition: {bounce: 0}}}
                className="fixed top-0 right-0 z-30 flex h-[38rem] w-[40rem] flex-col gap-2 border-l-2 border-b-2 border-white bg-[black] p-6"
                exit={{x: 500, opacity: 0, transition: {bounce: 0}}}
                initial={{x: 150, opacity: 0}}
            >
                <button className="w-fit self-end text-[1.5rem]" onClick={() => setModal(false)}>
                    → CLOSE
                </button>
                {children}
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
