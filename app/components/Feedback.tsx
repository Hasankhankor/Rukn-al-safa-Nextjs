import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";
import SmallCarousel from "./SmallCarousel";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { feedbackData } from "../staticData";

const Feedback = () => {
  return (
    <SmallCarousel title="What our customers have to say">
      <CarouselContent>
        {feedbackData.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-[100%] md:basis-1/2 lg:basis-1/4"
          >
            <div className="w-[280px] px-2 py-10">
              <div className="flex items-start justify-center flex-col space-y-5">
                <div className="flex justify-start items-center text-yellow-500 space-x-1">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
                <div className="text-gray-500">
                  <p>
                    {" "}
                    {item.feedback}
                  </p>
                </div>
                <div className="flex justify-center items-center  space-x-4">
                  <div>
                    <Image
                      className="rounded-full"
                      src={item.image}
                      alt="customer-name"
                      height={50}
                      width={50}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <span className="text-gray-500 text-xs">
                     {item.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </SmallCarousel>
  );
};

export default Feedback;
