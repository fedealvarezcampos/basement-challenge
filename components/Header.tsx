import Image from "next/image";

import header from "../public/header.svg";
import asterisk from "../public/asterisk.svg";
import asterisk2 from "../public/asterisk2.svg";

import Marquee from "./Marquee";

function Header() {
  return (
    <>
      <header className="relative w-full">
        <div className="px-8 pb-10">
          <Image priority alt="header" layout="responsive" objectFit="contain" src={header} />
        </div>
        <span className="absolute left-14 bottom-[-20%] z-10 w-[13%] min-w-[5rem] max-w-[15rem]">
          <Image alt="design item" layout="responsive" objectFit="contain" src={asterisk} />
        </span>
        <span className="absolute right-14 bottom-2 z-10 w-[13%] min-w-[5rem] max-w-[15rem]">
          <Image alt="design item" layout="responsive" objectFit="contain" src={asterisk2} />
        </span>
        <Marquee />
      </header>
    </>
  );
}

export default Header;
