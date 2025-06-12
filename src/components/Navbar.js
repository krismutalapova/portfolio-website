import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const sectionIds = ["about", "projects", "contact"];

const Navbar = React.memo(function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 80;
      let current = "about";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className="bg-gray-100 dark:bg-[#1a0023] shadow-md"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white flex items-center gap-2">
          <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
          MyPortfolio
        </div>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 group"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          onClick={handleMenuToggle}
        >
          <span
            className={`block w-7 h-1 bg-gray-800 dark:bg-white mb-1 rounded transition-transform duration-300 ease-in-out ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-7 h-1 bg-gray-800 dark:bg-white mb-1 rounded transition-all duration-300 ease-in-out ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-7 h-1 bg-gray-800 dark:bg-white rounded transition-transform duration-300 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
        <ul className="hidden md:flex space-x-8 text-lg font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`hover:underline transition-colors duration-200 ${activeSection === link.id ? "text-[#e0b3ff] dark:text-[#e0b3ff] font-bold underline underline-offset-4" : "text-[#a259c6] dark:text-[#c9a6e1] hover:text-[#c9a6e1] dark:hover:text-[#4b006e]"} `}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <ThemeToggle position="inline" />
          </li>
        </ul>
      </div>
      {menuOpen && (
        <ul
          id="navbar-menu"
          className="md:hidden flex flex-col items-center bg-white dark:bg-[#1a0023] py-6 space-y-6 shadow-lg animate-fade-in z-50 transition-all duration-300 text-xl font-semibold rounded-b-xl"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`hover:underline transition-colors duration-200 ${activeSection === link.id ? "text-[#e0b3ff] dark:text-[#e0b3ff] font-bold underline underline-offset-4" : "text-[#a259c6] dark:text-[#c9a6e1] hover:text-[#c9a6e1] dark:hover:text-[#4b006e]"} `}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <ThemeToggle position="menu" />
          </li>
        </ul>
      )}
    </nav>
  );
});

export default Navbar;
