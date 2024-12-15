"use client";
import React, { useEffect, useState } from "react";
import type { Product } from "../staticData";
import { ShadcnCarousel } from "./ShadcnCarousel";

// Update title type to React.ReactNode instead of string
interface ProductCarouselProps {
  title: React.ReactNode; // This allows title to be a string or JSX element
  timer: string | null;
  productArray: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  timer,
  productArray,
}) => {
  const [countdown, setCountdown] = useState<string | null>(timer);

  useEffect(() => {
    if (!timer) return;

    // Set an end time for the countdown
    const endTime = new Date().getTime() + 22 * 60 * 60 * 1000 + 23 * 60 * 1000 + 54 * 1000; // 22 hours, 23 minutes, 54 seconds

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeLeft = endTime - currentTime;

      if (timeLeft <= 0) {
        clearInterval(interval);
        setCountdown("Deal Ended");
      } else {
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);
        setCountdown(`Ends in: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex p-7 justify-center md:pl-24 md:justify-start md:w-[80%] flex-col md:flex-row space-y-4 md:space-y-0 items-center space-x-2">
        <h2 className="md:text-3xl text-2xl font-bold">{title}</h2>
        {countdown && (
          <span className="text-white bg-red-600 rounded-2xl px-4 text-lg md:text-xl py-2 font-bold">
            {countdown}
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
