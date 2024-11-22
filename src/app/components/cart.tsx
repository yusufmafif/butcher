'use client'

import { useState } from 'react'
import { Trash, ShoppingCart, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useContext } from "react";
import CartContext from '@/context/CartContext';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Contoh data cart
interface Product {
  name: string
  description: string
  website: string
  logo: string
  story: string
  stack: string[]
  thumbnail: string
  year: string
  price: number
  unit: string
  qty : number
}

export default function ShoppingCartComponent() {
  const { cart, removeFromCart, addToCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false)

  const checkoutToWhatsApp = () => {
    const cartItems = cart.map(
      (item: Product) =>
        `Nama Produk: ${item.name}\nSubtotal: Rp. ${(item.price * 2).toLocaleString()}`
    ).join("\n\n");

    const total = cart.reduce((sum: number, item: Product) => sum + item.price, 0)
    const message = `Saya ingin membeli:\n\n${cartItems}\n\nTotal Keseluruhan: Rp. ${totalPrice.toLocaleString()}`;

    const waLink = `https://api.whatsapp.com/send/?phone=6282124754039&text=${encodeURIComponent(message)}`
    window.open(waLink, "_blank")
  }

  const totalPrice = cart.reduce((a: number, item:Product) => {
    return a + item.price * item.qty
  },0)

  return (
    <>
      <div className="fixed top-4 right-4 z-50 ">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="relative bg-white text-black border border-secondary hover:scale-105 hover:bg-slate-200">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cart.length}
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Keranjang Belanja</DialogTitle>
            </DialogHeader>

            {cart.length ? (<div className="mt-4">
              {cart.map((item: any, index: number) => (
                <div key={index} className="flex justify-between items-center py-2 border-b">
                  <Image
                    src={item?.thumbnail}
                    alt={item?.name}
                    priority={true}
                    width={50}
                    height={50}
                  />
                  <div className='space-x-2'>
                    <button
                      onClick={() => addToCart({ name: item.name, qty: item.qty - 1 })}
                      className="text-gray-500 hover:text-gray-700 border rounded px-3 py-1"
                      disabled={item.qty === 1} // Nonaktifkan tombol jika qty = 1
                    >
                      -
                    </button>

                    {/* Tampilkan Jumlah */}
                    <span className="">{item.qty}</span>

                    {/* Tombol Tambah */}
                    <button
                      onClick={() => addToCart({ name: item.name, qty: item.qty + 1 })}
                      className="text-gray-500 hover:text-gray-700 border rounded px-3 py-1"
                    >
                      +
                    </button>
                  </div>
                  <span>{item.name} x {item.qty}</span>
                  <span>Rp {(item.price * item.qty).toLocaleString()}</span>
                  <Button
                    className="relative bg-white text-black border border-secondary hover:scale-105 hover:bg-slate-200"
                    onClick={() => removeFromCart(index)} // Panggil fungsi untuk menghapus item
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              ))}


              <div className="mt-4 font-bold text-right">
                Total: Rp {totalPrice.toLocaleString()}
               
                <button
                  onClick={checkoutToWhatsApp}
                  className="bg-blue-500 ml-4 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  <span className="font-semibold">Checkout</span>
                </button>
              </div>
            </div>
            ) : (
              <div className="text-center">
                Keranjang Belanja Kosong
              </div>
            )}

          </DialogContent>
        </Dialog>
      </div>
      {isOpen && <div className="fixed inset-0 bg-white/50 backdrop-blur-sm" />}
    </>
  )
}