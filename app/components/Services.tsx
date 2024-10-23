import React from "react";
import { FeaturesBannerCard } from "./FeaturesBanner";
import { LiaHospitalSolid } from "react-icons/lia";
import { FaHeartbeat, FaRegPlusSquare } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import { AiTwotoneMedicineBox } from "react-icons/ai";

const Services = () => {
  return (
    <section className="bg-gray-100 w-[100%] py-10 flex justify-center items-center">
      <div className="flex justify-around w-[95%] items-center flex-col md:flex-row flex-wrap">
        <div className="px-6 py-4 flex items-center justify-center">
          <FeaturesBannerCard
            title="Medicine"
            desc="Over 25000 products"
            iconBg="bg-cyan-500"
          >
            <LiaHospitalSolid className="text-white group-hover:text-black font-black text-2xl" />
          </FeaturesBannerCard>
        </div>

        <div className=" px-6 py-4 flex items-center justify-center">
          <FeaturesBannerCard
            title="Medicine"
            desc="Over 25000 products"
            iconBg="bg-pink-600"
          >
            <FaRegPlusSquare className="text-white font-black text-2xl" />
          </FeaturesBannerCard>
        </div>

        <div className="  px-6 py-4">
          <FeaturesBannerCard
            title="Medicine"
            desc="Over 25000 products"
            iconBg="bg-green-600"
          >
            <IoDocumentSharp className="text-white font-black text-2xl" />
          </FeaturesBannerCard>
        </div>

        <div className="  px-6 py-4">
          <FeaturesBannerCard
            title="Medicine"
            desc="Over 25000 products"
            iconBg="bg-indigo-900"
          >
            <FaHeartbeat className="text-white font-black text-2xl" />
          </FeaturesBannerCard>
        </div>

        <div className="px-6 py-4">
          <FeaturesBannerCard
            title="Medicine"
            desc="Over 25000 products"
            iconBg="bg-orange-600"
          >
            <AiTwotoneMedicineBox className="text-white font-black text-2xl" />
          </FeaturesBannerCard>
        </div>
      </div>
    </section>
  );
};

export default Services;
