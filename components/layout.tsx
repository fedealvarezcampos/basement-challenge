import {useEffect} from "react";
import {PropsWithChildren} from "react";
import {useState} from "react";
import Image from "next/image";
import {AnimatePresence} from "framer-motion";

import footer from "../public/footer.svg";

import Header from "./Header";
import Cart from "./Cart";
import Modal from "./Modal";
import NavBar from "./NavBar";

function Layout({children}: PropsWithChildren<{}>) {
    const [modal, setModal] = useState(false);
    const [layoutEffect, setLayoutEffect] = useState(false);

    useEffect(() => {
        setLayoutEffect(true);
    }, []);

    return (
        <>
            <NavBar setModal={setModal} />
            <div className="flex h-full flex-col place-content-between">
                <Header />
                {layoutEffect && (
                    <AnimatePresence exitBeforeEnter>
                        {modal && (
                            <Modal setModal={setModal}>
                                <Cart />
                            </Modal>
                        )}
                    </AnimatePresence>
                )}
                <main>{children}</main>
                <footer>
                    <div className="px-[3%] pb-10">
                        <Image
                            priority
                            alt="header"
                            layout="responsive"
                            objectFit="contain"
                            src={footer}
                        />
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Layout;
