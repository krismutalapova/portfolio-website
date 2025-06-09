import React, { useState } from 'react';

const Navbar = React.memo(function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => setMenuOpen((open) => !open);
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav className="bg-gray-100 dark:bg-gray-800 shadow-md" aria-label="Main navigation">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800 dark:text-white">MyPortfolio</div>
                <button
                    className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="navbar-menu"
                    onClick={handleMenuToggle}
                >
                    <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
                </button>
                <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
                    <li><a href="#about" className="hover:text-blue-500" onClick={handleLinkClick}>About</a></li>
                    <li><a href="#projects" className="hover:text-blue-500" onClick={handleLinkClick}>Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-500" onClick={handleLinkClick}>Contact</a></li>
                </ul>
            </div>
            {menuOpen && (
                <ul
                    id="navbar-menu"
                    className="md:hidden flex flex-col items-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-4 space-y-4 shadow-lg animate-fade-in z-50"
                >
                    <li><a href="#about" className="hover:text-blue-500 text-lg" onClick={handleLinkClick}>About</a></li>
                    <li><a href="#projects" className="hover:text-blue-500 text-lg" onClick={handleLinkClick}>Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-500 text-lg" onClick={handleLinkClick}>Contact</a></li>
                </ul>
            )}
        </nav>
    );
});

export default Navbar;