import React, { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

import Header from "./Header";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Toaster />
      <main>{children}</main>
    </>
  );
};

export default Layout;
