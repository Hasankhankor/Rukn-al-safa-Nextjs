import React from "react";
import Image from "next/image";
import Link from "next/link";
import SmallCarousel from "../components/SmallCarousel"; // Adjust the import as needed
import { blogData } from "../staticData"; // Adjust the path as necessary

const BlogPage = () => {
  return (
    <SmallCarousel title="From Our Blog">
      <div className="flex justify-center items-center flex-wrap space-x-6"> {/* Added flex-wrap for wrapping the cards */}
        {blogData.map((item, index) => (
          <div key={index} className="flex justify-center items-center flex-col space-y-4 w-[260px]"> {/* Changed space-y-6 to space-y-4 for consistency */}
            <Link  href={`/blogs/${index}`}>
              <Image
                src={item.image}
                className="rounded-lg"
                width={260}
                height={300}
                alt="Blog image"
              />
            </Link>
            <div className="from-our__content">
              <p className="text-gray-500 mb-2">
                Posted on:{" "}
                <span className="text-cyan-500 font-semibold">{item.date}</span>
              </p>
              <h3>
                <Link className="text-lg font-semibold hover:text-cyan-500 transition" href={`/blogs/${index}`}>
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
