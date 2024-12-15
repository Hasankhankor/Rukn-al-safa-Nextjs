import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";
import SmallCarousel from "./SmallCarousel";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { feedbackData } from "../staticData";

const Feedback = () => {
  return (
    <SmallCarousel
      title={<span className="text-3xl md:text-4xl font-bold text-green-700">What Our Customers Have to Say</span>}
    >
      <CarouselContent className="flex flex-wrap gap-4 justify-center">
        {feedbackData.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-full md:basis-1/2 lg:basis-1/3 p-2"
          >
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  className="rounded-full"
                  src={item.image}
                  alt={`${item.name}'s profile`}
                  height={45}
                  width={45}
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
              </div>

              <div className="flex items-center text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <IoStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-600 line-clamp-3">
                "{item.feedback}"
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </SmallCarousel>
  );
};

export default Feedback;
