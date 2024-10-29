// AddToCart.tsx
"use client";
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
    <button onClick={handleAddToCart} className="add-to-cart-button">
      Add to Cart
    </button>
  );
};

export default AddToCart;
