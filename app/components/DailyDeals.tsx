"use client";
import { products } from "../staticData";
import ProductCarousel from "./ProductCarousel";

const DailyDeals = () => {
  return (
    <ProductCarousel title="Deal of the Day" timer={"Ends in: 22:23:54"} productArray={products} />
  );
};

export default DailyDeals;

