import React, { useState } from 'react';

const Navbar = React.memo(function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => setMenuOpen((open) => !open);
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav className="bg-gray-100 dark:bg-gray-800 shadow-md" aria-label="Main navigation">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                    MyPortfolio
                </div>
                <button
                    className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 group"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="navbar-menu"
                    onClick={handleMenuToggle}
                >
                    <span
                        className={`block w-7 h-1 bg-gray-800 dark:bg-white mb-1 rounded transition-transform duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
                    ></span>
                    <span
                        className={`block w-7 h-1 bg-gray-800 dark:bg-white mb-1 rounded transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0' : ''}`}
                    ></span>
                    <span
                        className={`block w-7 h-1 bg-gray-800 dark:bg-white rounded transition-transform duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                    ></span>
                </button>
                <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-700 dark:text-gray-300">
                    <li><a href="#about" className="hover:text-blue-500 transition-colors duration-200" onClick={handleLinkClick}>About</a></li>
                    <li><a href="#projects" className="hover:text-blue-500 transition-colors duration-200" onClick={handleLinkClick}>Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-500 transition-colors duration-200" onClick={handleLinkClick}>Contact</a></li>
                </ul>
            </div>
            {menuOpen && (
                <ul
                    id="navbar-menu"
                    className="md:hidden flex flex-col items-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 space-y-6 shadow-lg animate-fade-in z-50 transition-all duration-300 text-xl font-semibold rounded-b-xl"
                >
                    <li><a href="#about" className="hover:text-blue-500 transition-colors duration-200" onClick={handleLinkClick}>About</a></li>
                    <li><a href="#projects" className="hover:text-blue-500 transition-colors duration-200" onClick={handleLinkClick}>Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-500 transition-colors duration-200" onClick={handleLinkClick}>Contact</a></li>
                </ul>
            )}
        </nav>
    );
});

export default Navbar;