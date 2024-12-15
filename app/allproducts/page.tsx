"use client";
// AllProductsPage.tsx

import { useEffect, useState } from "react";
import { Product, products } from "../staticData"; // Assuming the static data is exported from a file named `data.ts`
import Image from "next/image"; // for optimizing images
import { StaticImageData } from "next/image";

// Create a functional component for the All Products Page
const AllProductsPage = () => {
  const [loading, setLoading] = useState(true); // Track loading state
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulate data loading with a delay (you can replace this with actual data fetch logic if required)
    setTimeout(() => {
      setAllProducts(products); // You could replace this with an API call
      setLoading(false); // Set loading to false once data is ready
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading message while the data is being fetched
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={product.image} // Using StaticImageData here
              alt={product.imageAlt}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.productName}</h2>
              <p className="text-gray-500">{product.category}</p>
              <p className="text-sm text-gray-500">{product.subCategory}</p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <span className="line-through text-gray-400">
                    ${product.mrp.toFixed(2)}
                  </span>
                  <span className="text-xl font-semibold text-green-500 ml-2">
                    ${product.actualPrice.toFixed(2)}
                  </span>
                </div>
                <div className="bg-green-200 px-2 py-1 text-green-700 text-sm font-medium rounded-full">
                  {product.discount}% OFF
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
