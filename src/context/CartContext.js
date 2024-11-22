"use client"
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Update localStorage when cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);const addToCart = (produk) => {
    // Periksa apakah produk memiliki properti "name"
    if (!produk.name) {
      console.error("Produk tidak valid:", produk);
      return; // Jangan tambahkan produk yang tidak valid
    }
  
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.name === produk.name);
  
      if (existingProductIndex !== -1) {
        // Jika produk sudah ada, perbarui qty
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].qty = produk.qty;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        // Tambahkan produk baru
        const updatedCart = [...prevCart, { ...produk }];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  };
  
  
  
  
  
  
  
  


  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((_, i) => i !== index); // Hapus item berdasarkan indeks
      console.log(updatedCart)
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
      return updatedCart;
    });
  };
  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
