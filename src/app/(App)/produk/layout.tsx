import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Produk | Ikhwan Butcher",
  description: "List Produk",
  keywords:
    " ikhwanbutcher, Ihwan Butcher, Produk Daging",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
