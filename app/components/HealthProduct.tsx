import React from "react";
import ProductCarousel from "./ProductCarousel";
import { shuffledProducts } from "../staticData";

const HealthProduct = () => {
  return (
    <ProductCarousel
      title={
        <span className="text-3xl md:text-4xl font-bold text-green-700 flex items-center space-x-2">
           Health & Wellness Products
        </span>
      }
      timer={null}
      productArray={shuffledProducts}
    />
  );
};

export default HealthProduct;
