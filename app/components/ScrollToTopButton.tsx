"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
  }

  return (
    <button
      className={`fixed md:bottom-6 bottom-16 right-6 rounded-full p-3 outline-none transition-opacity duration-200 bg-cyan-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <ChevronUp className="text-white from-black text-2xl" />
    </button>
  )
}

export default ScrollToTopButton