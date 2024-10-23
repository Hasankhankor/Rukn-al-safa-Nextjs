"use client"
import React, { useState } from "react";
import { LiaHospitalSolid } from "react-icons/lia";
import { FaRegPlusSquare } from "react-icons/fa";
import { AiTwotoneMedicineBox } from "react-icons/ai";

const FeaturesBanner = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleMouseEnter = (category: string) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="hidden lg:flex justify-evenly items-center h-28 w-full relative">
      <div
        className="px-6 py-4"
        onMouseEnter={() => handleMouseEnter("Medicine")}
        onMouseLeave={handleMouseLeave}
      >
        <FeaturesBannerCard
          title="Medicine"
          desc="Over 25000 products"
          iconBg="bg-cyan-500"
        >
          <LiaHospitalSolid className="text-white group-hover:text-black font-black text-3xl" />
        </FeaturesBannerCard>
        {hoveredCategory === "Medicine" && <Overlay content="Detailed information about Medicine..." />}
      </div>

      <div
        className="px-6 py-4"
        onMouseEnter={() => handleMouseEnter("Cosmetics")}
        onMouseLeave={handleMouseLeave}
      >
        <FeaturesBannerCard
          title="Cosmetics"
          desc="Beauty and Skin Care"
          iconBg="bg-pink-600"
        >
          <FaRegPlusSquare className="text-white font-black text-2xl" />
        </FeaturesBannerCard>
        {hoveredCategory === "Cosmetics" && <Overlay content="Detailed information about Cosmetics..." />}
      </div>

      <div
        className="px-6 py-4"
        onMouseEnter={() => handleMouseEnter("HealthCare")}
        onMouseLeave={handleMouseLeave}
      >
        <FeaturesBannerCard
          title="Health Care"
          desc="Vitamins & Supplements"
          iconBg="bg-green-600"
        >
          <AiTwotoneMedicineBox className="text-white font-black text-2xl" />
        </FeaturesBannerCard>
        {hoveredCategory === "HealthCare" && <Overlay content="Detailed information about Health Care..." />}
      </div>
    </div>
  );
};

const Overlay = ({ content }: { content: string }) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="text-white p-4 rounded-lg">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default FeaturesBanner;

interface FeaturesBannerCardProps {
  children: React.ReactNode;
  title: string;
  desc: string;
  iconBg: string;
}

export const FeaturesBannerCard: React.FC<FeaturesBannerCardProps> = ({
  children,
  title,
  desc,
  iconBg,
}) => {
  return (
    <div className="flex justify-center items-center space-x-10 group">
      <a href="#">
        <div
          className={`${iconBg} h-10 w-10 group-hover:bg-cyan-500 rounded-full flex items-center justify-center`}
        >
          {children}
        </div>
      </a>
      <div>
        <h6 className="group-hover:text-cyan-500 font-semibold">{title}</h6>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
};
