import React from 'react';
import AddToCart from '../components/AddToCart'; // Adjust the path as necessary

const AddToCartPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
      <AddToCart />
      {/* You can add more components or information related to the cart here */}
    </div>
  );
};

export default AddToCartPage;
