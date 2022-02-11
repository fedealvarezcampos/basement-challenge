import React from "react";
import {PropsWithChildren} from "react";

import NavBar from "./NavBar";

function Layout({children}: PropsWithChildren<{}>) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
