'use client'

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";


export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-20 flex justify-center items-center h-20 p-3 bg-secondary-green hover:bg-primary-green text-white rounded-full shadow-lg transition-opacity ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
    >
      <ChevronUp className="w-10 h-10"/>
    </button>
  );
}
