import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link"; // Import Link for routing
import { IoStar } from "react-icons/io5";
import { FaHeart, FaArrowRight, FaEye } from "react-icons/fa";
import AddToCart from "../components/AddToCart";

interface SingleProductCardProps {
  image: StaticImageData;
  imageAlt: string;
  discount: number;
  id: string;
  category: string;
  subCategory: string;
  productName: string;
  mrp: number;
  actualPrice: number;
}

const SingleProductCard: React.FC<SingleProductCardProps> = ({
  image,
  imageAlt,
  discount,
  category,
  id,
  subCategory,
  productName,
  mrp,
  actualPrice,
}) => {
  return (
    <div
      className="p-8 m-2 transition hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-[400px] md:h-[480px] w-[250px] group"
      id={`product-${id}`}
    >
      <div className="flex justify-end items-center h-full flex-col relative">
        <Link href={`/app/Product/${id}`} passHref>
          {/* Wrap the image and content in the Link component */}
          <a className="daily-deal--product__image">
            <Image width={300} height={300} src={image} alt={imageAlt} />
          </a>
        </Link>

        <div className="absolute top-0 left-0 px-2 py-1 bg-green-500 rounded-lg">
          <span className="text-white">{discount}%</span>
        </div>
        <div className="absolute top-0 right-0 flex justify-center items-center flex-col space-y-2">
          <div className="md:p-2.5 p-1 bg-gray-200 rounded-full hover:text-white hover:bg-cyan-500">
            <FaHeart />
          </div>
          <div className="md:p-2.5 p-1 bg-gray-200 rounded-full md:opacity-0 transition group-hover:opacity-100 hover:text-white hover:bg-cyan-500">
            <FaArrowRight />
          </div>
          <div className="md:p-2.5 p-1 bg-gray-200 rounded-full md:opacity-0 transition group-hover:opacity-100 hover:text-white hover:bg-cyan-500">
            <FaEye />
          </div>
        </div>
        <div className="daily-deal--product__content">
          <div className="text-gray-500 text-sm md:text-lg">
            <a href="#">{category}</a> <a href="#">({subCategory})</a>
          </div>
          <h3 className="md:text-xl text-lg font-bold">
            <Link href={`/app/Product/${id}`} passHref>
              <a>{productName}</a>
            </Link>
          </h3>
          <div className="flex justify-start text-yellow-400 text-sm md:text-lg space-x-1 mt-5 mb-2 items-center">
            {[...Array(5)].map((_, index) => (
              <IoStar key={index} />
            ))}
          </div>
          <div className="daily-deal--product__price">
            <p className="text-red-500 text-sm md:text-lg font-bold">
              ${actualPrice}
              <span className="line-through text-gray-500 ml-4">${mrp}</span>
            </p>
          </div>
          <AddToCart />
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
