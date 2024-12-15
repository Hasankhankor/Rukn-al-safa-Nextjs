import React from "react";

const SignUp = () => {
  return (
    <section className="bg-[url('./assets/images/icons/bgf-newsletter.png')] bg-gray-200 p-5">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center flex-col py-5">
          <div className="flex justify-center items-center flex-col w-[55%] text-center py-5">
            <h3 className="text-2xl font-bold pb-6">Sign Up For Newsletter</h3>
            <p className="text-gray-500">
              Join 60.000+ Subscribers and get a new discount coupon on every
              Saturday.
            </p>
          </div>
          <div className="py-5 pb-10 ">
            <form className="flex justify-center items-center md:flex-row space-y-5 md:space-y-0 flex-col">
              <input
                id="email-input"
                type="email"
                className="py-3 w-[250px] md:w-96 rounded-3xl md:rounded-r-none border border-r-0 outline-none px-3"
                placeholder="Write Email address"
                name="email"
                required
              />
              <button
                className="py-3 rounded-3xl bg-green-700 text-white border md:rounded-l-none outline-none px-6 md:px-10"
                type="submit"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
