import Image from "next/image";
import React from "react";
import SmallCarousel from "./SmallCarousel";
import { popularCategoryData } from "../staticData";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";

const PopularCategories = () => {
  return (
    <SmallCarousel title="Popular Categories">
      <CarouselContent>
        {popularCategoryData.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-[100%] md:basis-1/2 lg:basis-1/4"
          >
            <div className="flex items-center justify-center">
              <div className="flex justify-center items-center flex-col space-y-4">
                <div>
                  <Image
                    height={100}
                    width={250}
                    src={item.image}
                    alt="colgate"
                  />
                </div>
                <p>
                  <a className="font-bold" href="">
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
