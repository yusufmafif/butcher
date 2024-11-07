import React, { useState } from "react";

function CheckoutPage() {
  const [cart, setCart] = useState([
    { id: 1, name: "Produk A", price: 100, quantity: 1 },
    { id: 2, name: "Produk B", price: 200, quantity: 1 },
  ]);
  const [shipping, setShipping] = useState("standard");
  const [address, setAddress] = useState("");

  // Fungsi untuk menambah dan mengurangi jumlah produk
  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  };

  // Fungsi untuk menghitung total harga
  const calculateTotal = () => {
    const subtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const shippingCost = shipping === "standard" ? 20 : 50;
    return subtotal + shippingCost;
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>{item.price} USD</p>
            <div>
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="shipping">
        <h2>Shipping</h2>
        <select
          value={shipping}
          onChange={(e) => setShipping(e.target.value)}
        >
          <option value="standard">Standard (20 USD)</option>
          <option value="express">Express (50 USD)</option>
        </select>
      </div>

      <div className="address">
        <h2>Shipping Address</h2>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="total">
        <h2>Total: {calculateTotal()} USD</h2>
      </div>

      <button
        disabled={!address}
        onClick={() => alert("Checkout Successful!")}
      >
        Complete Checkout
      </button>
    </div>
  );
}

export default CheckoutPage;
