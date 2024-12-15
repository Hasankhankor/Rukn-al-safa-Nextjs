"use client";
import { products } from "../staticData";
import ProductCarousel from "./ProductCarousel";

const DailyDeals = () => {
  return (
    <ProductCarousel
      title={<span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-yellow-500">Hot Deals of the Day! </span>}
      timer={"⏰ Ends in: 22:23:54"}
      productArray={products}
    />
  );
};

export default DailyDeals;
