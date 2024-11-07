"use client";
import React, { useState } from "react";
import { notFound } from "next/navigation";
import produkSapi from '../produkSapi.json';
import Image from "next/image";

export const dynamic = "force-static";

const Page = ({ params }: { params: { slug: string } }) => {
  const [cart, setCart] = useState<any[]>([]);
  const decodedSlug = decodeURIComponent(params.slug);
  const produk = produkSapi.find((p) => p.name === decodedSlug);  
  if (!produk) return notFound();

  const addToCart = () => {
    setCart((prevCart) => [...prevCart, produk]);
  };

  const checkoutToWhatsApp = () => {
    const cartItems = cart.map((item) => `${item.name} - Rp. ${item.price}`).join("\n");
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const message = `Produk yang dibeli:\n${cartItems}\n\nTotal: Rp. ${total}`;
    const waLink = `https://api.whatsapp.com/send/?phone=087772018559&text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
  };
  return (
    <div className="container mx-auto px-4 py-10">
    {/* Layout grid responsif untuk tampilan PC */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Bagian Detail Produk */}
      <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col lg:flex-row">
          <Image
            src={produk?.thumbnail}
            alt={produk?.name}
            width={300}
            height={300}
            className="rounded-md"
          />
          <div className="mt-4 lg:mt-0 lg:ml-6">
            <h1 className="text-2xl font-bold text-gray-800">{produk?.name}</h1>
            <p className="text-gray-600 mt-2">{produk?.description}</p>
            <p className="text-xl font-semibold text-gray-800 mt-4">Rp. {produk?.price}</p>

            <div className="flex mt-6">
              <button
                onClick={addToCart}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mr-4 transition duration-200 ease-in-out"
              >
                Add to Cart
              </button>
              <button
                onClick={checkoutToWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ease-in-out"
              >
                Checkout via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Ringkasan Checkout */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800">Ringkasan Belanja</h2>
        {cart.length > 0 ? (
          <div>
            <ul className="mt-4 bg-gray-100 p-4 rounded-lg shadow-inner">
              {cart.map((item, index) => (
                <li key={index} className="text-gray-800 flex justify-between py-2 border-b border-gray-300">
                  <span>{item.name}</span>
                  <span>Rp. {item.price}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4 text-lg font-semibold">
              <span>Total:</span>
              <span>Rp. {cart.reduce((sum, item) => sum + item.price, 0)}</span>
            </div>
            <button
              onClick={checkoutToWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md w-full mt-6 transition duration-200 ease-in-out"
            >
              Checkout via WhatsApp
            </button>
          </div>
        ) : (
          <p className="text-gray-600 mt-4">Keranjang Anda kosong.</p>
        )}
      </div>
    </div>
  </div>
  );
};

export default Page;
