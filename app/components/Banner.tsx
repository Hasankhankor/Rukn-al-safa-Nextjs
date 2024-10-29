import Image from "next/image";
import FeaturesBanner from "./FeaturesBanner";
import { FaArrowRight } from "react-icons/fa";
import bannerFirst from "../assets/images/banner-first.png";
import bannerCorner from "../assets/images/banner-cornerfirst.png";
import { GrCurrency } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";

const Banner = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <FeaturesBanner />

      <div className="bg-[url('./assets/images/h1-slider012.png')] w-full min-h-[500px] py-8 bg-no-repeat bg-cover bg-center">
        <div className="flex justify-center md:flex-row flex-col items-start md:space-x-40 space-y-8 px-4 md:px-0 h-full">
          <div className="banner_slider__image"></div>

          <div className="flex flex-col justify-end md:items-center items-end space-y-3 text-right flex-grow">
            <h2 className="md:text-6xl text-3xl text-green-800 font-bold drop-shadow-[0_5px_10px_rgba(0,0,0,0.75)] text-center md:text-left">
              Order Online or Visit <br /> Rukn Al Safa Pharmacy
            </h2>

            <div className="flex justify-end items-center md:space-x-24 space-x-8">
              <p className="text-white font-bold">Code: SAVE18</p>

              <div className="flex items-center space-x-2">
                <a
                  href="#"
                  className="p-3 group rounded-full bg-white hover:bg-green-700"
                >
                  <FaArrowRight className="group-hover:text-white text-black" />
                </a>

                <a href="#" className="text-white font-bold">
                  SHOP NOW
                </a>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-4 md:space-x-8">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-white mr-2">
                  <GrCurrency className="text-[rgb(112,187,33)] text-3xl" />
                </div>
                <p className="text-white font-bold">Win big offers</p>
              </div>
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-white mr-2">
                  <TbTruckDelivery className="text-[rgb(112,187,33)] text-3xl" />
                </div>
                <p className="text-white font-bold">Free delivery</p>
              </div>
            </div>

            <div className="mt-10 hidden md:block">
              <Image
                src={bannerCorner}
                width={250}
                height={250}
                alt="corner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
