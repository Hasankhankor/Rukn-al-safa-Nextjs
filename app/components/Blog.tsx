import Image from "next/image";
import React from "react";
import AddToCart from "./AddToCart";
import SmallCarousel from "./SmallCarousel";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { blogData } from "../staticData";

const Blog = () => {
  return (
    <SmallCarousel title="From Our Blog">
      <CarouselContent>
        {blogData.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-[100%] md:basis-1/2 lg:basis-1/4"
          >
            <div className="flex justify-center items-center flex-col space-y-6 w-[260px]">
              <div>
                <a href="">
                  {" "}
                  <Image
                    src={item.image}
                    className="rounded-lg"
                    width={260}
                    height={300}
                    alt="pills"
                  />
                </a>
              </div>
              <div className="from-our__content">
                <p className="text-gray-500 mb-2">
                  Posted on:{" "}
                  <a className="text-cyan-500 font-semibold" href="#">
                    {item.date}
                  </a>
                </p>
                <h3>
                  <a
                    className="text-lg font-semibold hover:text-cyan-500 transition"
                    href="#"
                  >
                    {item.topic}
                  </a>
                </h3>
                <AddToCart />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </SmallCarousel>
  );
};

export default Blog;
