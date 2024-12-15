"use client";
import Image from "next/image";
import React from "react";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { FeaturedBrandProducts } from "../staticData";
import SmallCarousel from "./SmallCarousel";

const FeaturedBrand = () => {
  return (
    <SmallCarousel
      title={
        <span className="text-3xl md:text-4xl font-extrabold text-green-700 flex items-center space-x-2">
           Featured Brands
        </span>
      }
    >
      <CarouselContent>
        {FeaturedBrandProducts.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-[100%] md:basis-1/2 lg:basis-1/4"
          >
            <div className="w-[280px] md:w-[240px] h-[30vh] relative p-1">
              <Image
                src={item.image1}
                className="cursor-pointer rounded-lg transition duration-500 hover:rounded-xl hover:scale-105 border-2 border-green-700 shadow-lg"
                alt={item.alt1}
                width={305}
                height={210}
              />
              <div className="absolute flex items-center justify-center w-[200px] bg-white/90 backdrop-blur-lg rounded-lg p-5 md:right-5 right-10 top-28 shadow-md">
                <a href="#">
                  <Image
                    src={item.image2}
                    className="transition duration-500 hover:scale-110"
                    alt={item.alt2}
                    width={120}
                    height={80}
                  />
                </a>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </SmallCarousel>
  );
};

export default FeaturedBrand;
