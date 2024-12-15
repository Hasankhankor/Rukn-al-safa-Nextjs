"use client";
import Image from "next/image";
import logo from "../assets/images/icons/logo.svg"; // Your company logo

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <Image
          src={logo}
          alt="Company Logo"
          width={150}
          height={150}
          className="mx-auto"
        />
        <h1 className="text-4xl font-bold text-green-800 mt-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-2">
          We're here to help you. Get in touch with us.
        </p>
      </header>

      {/* Contact Info Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Details */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-green-800">Contact Information</h2>
          <div className="mt-6">
            <div className="flex items-center mb-4">
              <span className="text-lg font-medium text-gray-800">Phone:</span>
              <p className="ml-4 text-lg text-gray-600">+123 456 7890</p>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-lg font-medium text-gray-800">Email:</span>
              <p className="ml-4 text-lg text-gray-600">info@company.com</p>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-lg font-medium text-gray-800">Address:</span>
              <p className="ml-4 text-lg text-gray-600">123 Business St., City, Country</p>
            </div>
          </div>
        </div>

        {/* Static Map Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-green-800">Our Location</h2>
          <div className="mt-6">
            {/* Add map or image here */}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-green-800 mb-6">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-800">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 transition duration-200 ease-in-out"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-800">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 transition duration-200 ease-in-out"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-800">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 transition duration-200 ease-in-out"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-200 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
