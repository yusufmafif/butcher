import React from "react";
import { Navbar } from "../components/navbar";
import CheckLocation from "../components/check-location";
import ShoppingCartComponent from "../components/cart";
import { CartProvider } from "../../context/CartContext"

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <CartProvider>
      <ShoppingCartComponent />
      <CheckLocation />
      <Navbar />
      <main className="pt-12 pb-32 antialiased">{children}</main>
    </CartProvider>
  );
};


export default Layout;
