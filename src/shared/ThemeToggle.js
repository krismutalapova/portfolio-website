import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = React.memo(function ThemeToggle({ position }) {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return (
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  if (position !== "inline" && position !== "menu") return null;

  const btnClass =
    position === "inline"
      ? "p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      : "p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition text-2xl";

  return (
    <div className="relative group inline-block">
      <button
        onClick={toggleTheme}
        className={btnClass}
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <FiMoon size={28} color="#c9a6e1" />
        ) : (
          <FiSun size={28} color="#a259c6" />
        )}
      </button>
      <span className="absolute left-1/2 top-full mt-3 -translate-x-1/2 px-3 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap hidden md:block">
        {darkMode ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </div>
  );
});

export default ThemeToggle;
