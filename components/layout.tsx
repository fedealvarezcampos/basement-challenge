import React from "react";
import {useState} from "react";
import {PropsWithChildren} from "react";
import Image from "next/image";
import {AnimatePresence} from "framer-motion";

import footer from "../public/footer.svg";

import Header from "./Header";
import Modal from "./Modal";
import NavBar from "./NavBar";

function Layout({children}: PropsWithChildren<{}>) {
    const [modal, setModal] = useState(false);

    return (
        <>
            <NavBar setModal={setModal} />
            <div className="flex h-full flex-col place-content-between">
                <Header />
                <AnimatePresence exitBeforeEnter>
                    {modal && <Modal setModal={setModal} />}
                </AnimatePresence>
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
