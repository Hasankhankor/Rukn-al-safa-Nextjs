import Image from "next/image";
import React from "react";
import SmallCarousel from "./SmallCarousel";
import { popularCategoryData } from "../staticData";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";

const PopularCategories = () => {
  return (
    <SmallCarousel
      title={
        <span className="text-3xl md:text-4xl font-bold text-green-700 flex items-center space-x-2">
           Popular Categories
        </span>
      }
    >
      <CarouselContent>
        {popularCategoryData.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-[100%] md:basis-1/2 lg:basis-1/4 transition transform hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <div className="flex justify-center items-center flex-col space-y-4 p-4 bg-gray-100 rounded-lg shadow-lg hover:bg-blue-100">
                <div>
                  <Image
                    height={100}
                    width={250}
                    src={item.image}
                    alt={item.category}
                    className="rounded-md shadow-md"
                  />
                </div>
                <p>
                  <a className="font-bold text-lg text-green-700 hover:text-green-900 transition-colors duration-200" href="">
                    {item.category}
                  </a>
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </SmallCarousel>
  );
};

export default PopularCategories;
