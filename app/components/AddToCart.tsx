"use client";
import { IoCart } from "react-icons/io5";
import React from "react";

interface AddToCartProps {
  product: {
    id: string;
    productName: string;
    actualPrice: number;
    mrp: number;
    image: string;
  };
}
const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const handleAddToCart = () => {
    const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
console.log("session cart",cart);
    // Check if product is already in the cart
    const productInCart = cart.find((item: { id: string }) => item.id === product.id);
    if (productInCart) {
      productInCart.quantity += 1; // Increment quantity if it already exists
    } else {
      cart.push({ ...product, quantity: 1 }); // Add product with initial quantity
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));
    console.log("Added to cart:", product);
  };
  return (
    <div className="flex p-1 justify-start space-x-2 group items-center hover:bg-green-700 transition hover:text-white rounded-3xl mt-6 w-[180px] cursor-pointer">
      <div className="p-2 bg-green-800 rounded-full text-white">
        <IoCart className="text-lg md:text-xl" />
      </div>
      <button onClick={handleAddToCart} className="add-to-cart-button">
      Add to Cart
    </button>
    </div>
  );
};

export default AddToCart;
