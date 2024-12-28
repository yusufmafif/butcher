'use client'

import React, { useState, useContext } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import produkSapi from '../produkSapi.json'
import seafood from '../seafood.json'
import frozenFood from '../frozenFood.json'
import ShoppingCartComponent from "../../../components/cart"
import CartContext from "@/context/CartContext"

export const dynamic = "force-static"

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
  qty: number
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const { cart, addToCart } = useContext(CartContext)
  const [qty, setQty] = useState(0)
  const [disable, setDisable] = useState(true)

  const decodedSlug = decodeURIComponent(params.slug)
  // const product = produkSapi.find((p) => p.name === decodedSlug)
  const product = seafood.find((p) => p.name === decodedSlug) || frozenFood.find((p) => p.name === decodedSlug) || produkSapi.find((p) => p.name === decodedSlug)

  if (!product) return notFound()

    
  const checkoutToWhatsApp = () => {
    const cartItems = cart.map((item: Product) => `${item.name} - Rp. ${item.price}`).join("\n")
    const total = cart.reduce((sum: number, item: Product) => sum + item.price, 0)
    // const message = `Saya ingin membeli:\n${cartItems}\n\nTotal: Rp. ${total}`
    const message = `Produk yang dibeli:\n${product.name}\n\nx ${qty}\n\n${product.unit}\n\nTotal: Rp.${(product.price * qty).toLocaleString()}`
    const waLink = `https://api.whatsapp.com/send/?phone=6282124754039&text=${encodeURIComponent(message)}`
    window.open(waLink, "_blank")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ShoppingCartComponent />
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="md:flex">
          <div className="md:w-1/3">
            <Image
              src={product.thumbnail}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <h1 className="text-2xl font-semibold text-gray-800">{product.name}</h1>
            <p className="text-sm text-gray-500 mt-1">{product.description}</p>
            <div className="mt-4 flex items-center">
              <span className="text-3xl font-bold text-green-600">Rp. {product.price.toLocaleString()}</span>
              <span className="ml-4 text-sm text-gray-500">/{product.unit}</span>
            </div>
            <div className="mt-6 flex items-center">
              <button
                onClick={() => setQty(qty - 1)}
                className="text-gray-500 hover:text-gray-700 border rounded px-3 py-1"
              >
                -
              </button>
              <span className="mx-4">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="text-gray-500 hover:text-gray-700 border rounded px-3 py-1"
              >
                +
              </button>
            </div>
            <div className="mt-6 space-x-4">
              <button
                onClick={() => addToCart({ ...product, qty })}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                + <span className="font-semibold">Keranjang</span>
              </button>
              <button
                onClick={checkoutToWhatsApp}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                <span className="font-semibold">Checkout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
