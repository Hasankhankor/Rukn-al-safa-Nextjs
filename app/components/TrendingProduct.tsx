import React from "react";
import ProductCarousel from "./ProductCarousel";
import { combinedArray } from "../staticData";

const TrendingProduct = () => {
  return (
    <ProductCarousel
      title={
        <span className="text-3xl md:text-4xl font-bold text-green-700 flex items-center space-x-2">
          Trending Products
        </span>
      }
      timer={null}
      productArray={combinedArray}
    />
  );
};

export default TrendingProduct;
