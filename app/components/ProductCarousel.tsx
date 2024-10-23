"use client"
import React from "react";
import type { Product } from "../staticData";
import { ShadcnCarousel } from "./ShadcnCarousel";

interface ProductCarouselProps {
  title: string;
  timer: string | null;
  productArray: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  timer,
  productArray,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex p-7 justify-center md:pl-24 md:justify-start md:w-[80%] flex-col md:flex-row space-y-4 md:space-y-0 items-center space-x-2">
        <h2 className="md:text-3xl text-2xl font-bold">{title} </h2>
        {timer != null && (
          <span className="text-white bg-pink-600 rounded-2xl px-4 text-lg md:text-xl py-2 font-bold">
            {timer}
          </span>
        )}
      </div>

      <div className="flex items-center justify-center">
        <ShadcnCarousel productsPrimary={productArray} />
      </div>
    </div>
  );
};

export default ProductCarousel;

