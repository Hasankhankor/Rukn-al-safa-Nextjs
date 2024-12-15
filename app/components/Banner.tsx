import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import bannerCorner from "../assets/images/banner-cornerfirst.png";
import { GrCurrency } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";

const Banner = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-gradient-to-b from-green-800 via-yellow-200 to-white py-10">
      {/* Main Banner Section */}
      <div className="relative w-full max-w-screen-lg min-h-[500px] md:min-h-[600px] bg-[url('./assets/images/h2-slider02.png')] bg-cover bg-center bg-no-repeat mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Content Wrapper */}
        <div className="container relative z-10 flex flex-col items-start p-8 md:p-12 lg:p-16 text-white space-y-6 max-w-lg mx-auto">
          {/* Title */}
          <div className="relative bg-gradient-to-r from-green-500 to-indigo-600 opacity-80  p-8 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
  <h2 className="relative text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg text-white bg-opacity-75">
    Quality Medicines Delivered to <br /> Your Doorstep
    <span className="inline-block animate-deliver ml-2 text-yellow-400">Quickly!</span>
  </h2>
</div>



          {/* Promo Code and Button */}
          <div className="flex items-center space-x-4 mt-4">
            <p className="bg-green-700 text-white py-2 px-4 rounded-lg font-semibold shadow-md">
              Code: SAVE18
            </p>
            <a href="#" className="flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-800 transition duration-300">
              <span>SHOP NOW</span>
              <FaArrowRight className="ml-3" />
            </a>
          </div>
        </div>

        {/* Corner Image */}
        <div className="absolute bottom-0 right-0 hidden md:block">
          <Image src={bannerCorner} width={150} height={150} alt="corner decoration" />
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-col md:flex-row items-start justify-between space-y-4 md:space-y-0 mt-8 max-w-2xl p-6 md:p-10 bg-white bg-opacity-95 rounded-lg shadow-xl transform -translate-y-10">
        <div className="flex items-center space-x-3">
          <div className="p-4 bg-green-100 rounded-full">
            <GrCurrency className="text-green-600 text-2xl" />
          </div>
          <p className="text-gray-700 font-medium text-lg">Win big offers</p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="p-4 bg-green-100 rounded-full">
            <TbTruckDelivery className="text-green-600 text-2xl" />
          </div>
          <p className="text-gray-700 font-medium text-lg">Free delivery</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
