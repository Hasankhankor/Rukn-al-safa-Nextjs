"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    if (isVisible) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      className={`fixed md:bottom-6 bottom-16 right-6 rounded-full p-3 outline-none transition-opacity duration-200 ${
        isVisible ? "opacity-100 bg-green-700" : "opacity-0 bg-gray-300"
      }`}
      onClick={scrollToTop}
      style={{
        backgroundColor: isVisible ? "#166534" : "#D1D5DB", // Green if visible, Gray if not
      }}
    >
      <ChevronUp className="text-white text-2xl" />
    </button>
  );
};

export default ScrollToTopButton;
