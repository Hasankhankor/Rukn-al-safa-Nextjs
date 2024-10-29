import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold">Rukn Al Safa</h2>
        <p className="mt-2 text-sm">Your trusted partner for healthcare and well-being.</p>
      </div>

      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
        <ul className="space-y-1">
          <li><a href="#about" className="hover:underline">About Us</a></li>
          <li><a href="#products" className="hover:underline">Products</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          <li><a href="#faq" className="hover:underline">FAQ</a></li>
        </ul>
      </div>

      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
        <p className="text-sm">Email: info@pharmacyshop.com</p>
        <p className="text-sm">Phone: +123 456 7890</p>
        <p className="text-sm">Address: Al Safi 2 Building, Muwaileh Commercial, Tugariet Muwaileh, Sharjah</p>
      </div>
    </div>

    <div className="border-t border-gray-400 mt-6 pt-4 text-center text-sm">
      <p>&copy; 2024 Rukn Al Safa. All rights reserved.</p>
    </div>
  </footer>

  );
};

export default Footer;
