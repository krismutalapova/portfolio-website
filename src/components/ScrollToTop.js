import React, { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-3 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 text-white shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-200 z-50 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <FiChevronUp className="text-2xl" />
      </button>
    )
  );
}

export default ScrollToTop;
