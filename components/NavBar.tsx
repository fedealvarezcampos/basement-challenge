import Image from "next/image";

import logo from "../public/logo.svg";
import navicons from "../public/navicons.svg";

function NavBar() {
  return (
    <nav className="flex w-full justify-between gap-20 px-8">
      <Image alt="logo" height={100} objectFit="contain" src={logo} width="160px" />
      <Image alt="header icons" height={100} objectFit="contain" src={navicons} width="260px" />
      <button className="h-fit place-self-center rounded-full border-2 border-solid border-white py-2 px-7 text-xl font-bold">
        CART (0)
      </button>
    </nav>
  );
}

export default NavBar;
