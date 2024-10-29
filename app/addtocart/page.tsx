"use client";

import React, { useEffect, useState } from "react";

interface CartItem {
  id: string;
  productName: string;
  actualPrice: number;
  mrp: number;
  image: string;
  quantity: number;
}

const AddToCartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalOrder, setTotalOrder] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [shippingCost, setShippingCost] = useState(5); // Flat shipping cost in AED

  useEffect(() => {
    // Retrieve cart items from sessionStorage
    const storedCart = sessionStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart);
      calculateTotals(parsedCart);
    }
  }, []);

  const calculateTotals = (items: CartItem[]) => {
    const total = items.reduce((sum, item) => sum + item.actualPrice * item.quantity, 0);
    const discount = items.reduce((sum, item) => sum + (item.mrp - item.actualPrice) * item.quantity, 0);
    setTotalOrder(total);
    setTotalDiscount(discount);
  };

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotals(updatedCart);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="border p-4 rounded-lg shadow-lg flex flex-col items-center">
                <img src={item.image} alt={item.productName} className="w-24 h-24 object-cover mb-4" />
                <h2 className="font-semibold text-lg">{item.productName}</h2>
                <p>Quantity: {item.quantity}</p>
                <p className="text-red-500 font-bold">Price: AED {item.actualPrice.toFixed(2)}</p>
                <p className="line-through text-gray-500">MRP: AED {item.mrp.toFixed(2)}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="mt-4 text-sm bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Remove Item
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Total Order:</span>
              <span>AED {totalOrder.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount:</span>
              <span>-AED {totalDiscount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping Cost:</span>
              <span>AED {shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Grand Total:</span>
              <span>AED {(totalOrder - totalDiscount + shippingCost).toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-center mt-6">
  <button
    onClick={() => alert(`Proceeding with order of AED ${(totalOrder - totalDiscount + shippingCost).toFixed(2)}`)}
    className="w-full md:w-auto bg-green-800 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-500 transition-all"
  >
    Proceed with Order
  </button>
</div>
        </div>
      ) : (
        <p className="text-gray-700 text-lg">Your cart is empty.</p>
      )}
    </div>
  );
};

export default AddToCartPage;
