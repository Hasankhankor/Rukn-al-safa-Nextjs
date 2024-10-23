"use client";
import React from "react";
import { ShadcnCarouselV2 } from "./ShadcnCarousel";

interface SmallCarouselProps {
  title: string;
  children: React.ReactNode;
}

const SmallCarousel: React.FC<SmallCarouselProps> = ({ title, children}) => {
  return (
    <section className="bg-gray-100">
      <div className="flex items-center justify-center flex-col space-y-4 p-5 w-[100%]">
        <div className="flex p-7 justify-center md:pl-24 md:justify-start md:w-[80%] flex-col md:flex-row space-y-4 md:space-y-0 items-center space-x-2">
          <h2 className="md:text-3xl text-2xl font-bold">{title}</h2>
        </div>
        <ShadcnCarouselV2>
          {children}
        </ShadcnCarouselV2>
      </div>
    </section>
  );
};

export default SmallCarousel;
