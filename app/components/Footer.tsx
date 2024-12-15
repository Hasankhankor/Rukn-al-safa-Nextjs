import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Brand and Description */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold">Rukn Al Safa</h2>
          <p className="text-gray-300">
            Your trusted partner for healthcare and well-being. Dedicated to serving you with quality products and exceptional care.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#about" className="flex items-center space-x-2 hover:text-white transition-colors">
                <span>&#10140;</span> <span>About Us</span>
              </a>
            </li>
            <li>
              <a href="#products" className="flex items-center space-x-2 hover:text-white transition-colors">
                <span>&#10140;</span> <span>Products</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center space-x-2 hover:text-white transition-colors">
                <span>&#10140;</span> <span>Contact</span>
              </a>
            </li>
            <li>
              <a href="#faq" className="flex items-center space-x-2 hover:text-white transition-colors">
                <span>&#10140;</span> <span>FAQ</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <p>Email: <a href="mailto:info@pharmacyshop.com" className="hover:underline">info@pharmacyshop.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:underline">+123 456 7890</a></p>
          <p>Address: Al Safi 2 Building, Muwaileh Commercial, Sharjah</p>
        </div>
      </div>

      {/* Social Media and Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">&copy; 2024 Rukn Al Safa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
