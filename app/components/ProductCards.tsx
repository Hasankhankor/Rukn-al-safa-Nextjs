import { FaArrowRight } from "react-icons/fa";

const ProductCards = () => {
  return (
    <section className="bg-gray-100 w-[100%]">
      <div className="flex items-center justify-center text-white md:flex-row flex-col p-7 md:p-5 md:space-y-0 space-y-8 md:space-x-8">
        <div className="bg-[url('./assets/images/h1-banner01.jpg')] bg-no-repeat bg-cover  h-[30vh] md:h-[30vh] lg:h-[60vh] w-[100%] lg:w-[30%] rounded-lg">
          <div className="ml-8 w-[50%] mt-10 flex justify-center items-start flex-col">
            <div className="flex justify-center items-start flex-col space-y-6">
              <h2 className=" lg:text-5xl text-2xl font-bold">
                Naturally <br /> Good
              </h2>
              <p className="text-lg font-semibold">Up To 25% Off</p>
              <div className="hover:translate-x-1 flex justify-between items-center">
                <a
                  href="#"
                  className="md:p-3 p-1 group rounded-full bg-white hover:bg-green-800 mr-2"
                >
                  {" "}
                  <FaArrowRight className="group-hover:text-white text-black" />
                </a>

                <a
                  href="#"
                  className="text-sm font-medium"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[40vh] lg:h-[60vh] w-[100%] lg:w-[30%] flex justify-center space-y-8 md:justify-between flex-col items-center">
          <div className="bg-[url('./assets/images/h1-banner02.jpg')] bg-right bg-no-repeat bg-cover rounded-lg w-[100%] h-[45%]">
            <div className="md:mr-10 mr-4 mt-10 flex justify-center items-end flex-col">
              <div className="flex justify-center items-start flex-col space-y-2 md:space-y-10">
                <div>
                  {" "}
                  <h3 className=" text-sm font-medium uppercase">
                    {" "}
                    Daily Health
                  </h3>
                  <h2 className=" text-xl font-bold">
                    Essentials
                  </h2>
                </div>
                <div className="hover:translate-x-1 flex justify-between items-center">
                  <a
                    href="#"
                    className="md:p-3 p-1 group rounded-full bg-white hover:bg-green-800 mr-2"
                  >
                    {" "}
                    <FaArrowRight className="group-hover:text-white text-black" />
                  </a>

                  <a
                    href="/product"
                    className=" text-sm font-medium uppercase"
                  >
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[url('./assets/images/h1-banner03.jpg')] bg-no-repeat bg-cover rounded-lg w-[100%] h-[45%]">
            <div className="ml-5 mt-10 flex justify-center items-start flex-col">
              <div className="flex justify-center items-start flex-col space-y-2 md:space-y-10">
                <div>
                  {" "}
                  <h3 className=" text-sm font-medium uppercase">
                    {" "}
                    MEDICINES
                  </h3>
                  <h2 className=" text-xl font-bold">Rukn Al Safa</h2>
                </div>
                <div className="flex justify-between items-center">
                  Price:{" "}
                  <b>
                    <sup>$</sup>290<sup>99</sup>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[url('./assets/images/h1-banner04.jpg')] bg-no-repeat bg-cover h-[30vh] md:h-[30vh] lg:h-[60vh] w-[100%] lg:w-[30%] rounded-lg">
          <div className="ml-8 mt-10 flex justify-center items-start flex-col">
            <div className="flex justify-center items-start flex-col md:space-y-6 space-y-4">
              <h2 className=" lg:text-5xl text-2xl font-bold">
                Healthcare <br /> Products
              </h2>
              <p className="text-lg font-semibold">Up To 30% Off</p>
              <div className="hover:translate-x-1 flex justify-between items-center">
                <a
                  href="#"
                  className="md:p-3 p-1 group rounded-full bg-white hover:bg-green-800 mr-2"
                >
                  {" "}
                  <FaArrowRight className="group-hover:text-white text-black" />
                </a>

                <a
                  href="#"
                  className="text-sm font-medium"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
