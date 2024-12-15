import React from "react";
import Image from "next/image";
import Link from "next/link";
import SmallCarousel from "../components/SmallCarousel"; // Adjust the import as needed
import { blogData } from "../staticData"; // Adjust the path as necessary

const BlogPage = () => {
  return (
    <SmallCarousel
      title={
        <span className="text-3xl md:text-4xl font-bold text-green-700 flex items-center space-x-2">
           From Our Blog
        </span>
      }
    >
      <div className="flex justify-center items-center flex-wrap gap-6">
        {blogData.map((item, index) => (
          <div key={index} className="flex justify-center items-center flex-col space-y-4 w-[260px] p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Link href={`/blogs/${index}`}>
              <Image
                src={item.image}
                className="rounded-lg transition-transform duration-300 hover:scale-105"
                width={260}
                height={300}
                alt="Blog image"
              />
            </Link>
            <div className="from-our__content text-center">
              <p className="text-gray-500 mb-1">
                Posted on:{" "}
                <span className="text-green-700 font-semibold">{item.date}</span>
              </p>
              <h3>
                <Link className="text-lg font-semibold text-green-700 hover:text-green-900 transition-colors duration-200" href={`/blogs/${index}`}>
                  {item.topic}
                </Link>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </SmallCarousel>
  );
};

export default BlogPage;
