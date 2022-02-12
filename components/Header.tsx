import Image from "next/image";
import {motion} from "framer-motion";

import header from "../public/header.svg";
import asterisk from "../public/asterisk.svg";
import asterisk2 from "../public/asterisk2.svg";

import Marquee from "./Marquee";

const animVariant = {
    asterisk: {
        scale: [1, 1.1, 1.1, 1, 1],
        rotate: [0, 120, 120, 290, 0],
        opacity: 1,
        transition: {
            opacity: {
                repeat: 0,
            },
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
        },
    },
    asterisk2: {
        scale: [1, 1.1, 1.1, 1],
        rotate: [0, 50, -250, 0],
        opacity: 1,
        transition: {
            opacity: {
                repeat: 0,
            },
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
        },
    },
};

function Header() {
    return (
        <>
            <header className="relative w-full">
                <motion.div
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                        },
                    }}
                    className="px-[3%] pb-10"
                    initial={{opacity: 0}}
                >
                    <Image
                        priority
                        alt="header"
                        layout="responsive"
                        objectFit="contain"
                        src={header}
                    />
                </motion.div>
                <motion.span
                    animate="asterisk"
                    className="absolute left-14 bottom-[-20%] z-10 w-[13%] min-w-[5rem] max-w-[15rem] cursor-pointer"
                    initial={{opacity: 0}}
                    variants={animVariant}
                    whileHover={{rotate: 360, scale: 0.9}}
                    whileTap={{rotate: -100, transition: {duration: 2}}}
                >
                    <Image
                        alt="design item"
                        draggable={false}
                        layout="responsive"
                        objectFit="contain"
                        src={asterisk}
                    />
                </motion.span>
                <motion.span
                    animate="asterisk2"
                    className="absolute right-14 bottom-2 z-10 w-[13%] min-w-[5rem] max-w-[15rem] cursor-pointer"
                    initial={{opacity: 0}}
                    variants={animVariant}
                    whileHover={{rotate: -360, scale: 0.9}}
                    whileTap={{rotate: 360, transition: {duration: 2}}}
                >
                    <Image
                        alt="design item"
                        draggable={false}
                        layout="responsive"
                        objectFit="contain"
                        src={asterisk2}
                    />
                </motion.span>
                <Marquee />
            </header>
        </>
    );
}

export default Header;
