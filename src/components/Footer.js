import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiOutlineArrowDownTray } from 'react-icons/hi2';

const Footer = React.memo(function Footer() {
    return (
        <footer className="w-full bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 dark:from-blue-950 dark:via-purple-950 dark:to-gray-950 text-gray-700 dark:text-gray-300 py-8 flex flex-col items-center justify-center mt-12" role="contentinfo">
            <div className="w-full max-w-4xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left w-full md:w-auto">
                    <span className="block text-sm md:text-base">© {new Date().getFullYear()} Kristina Mutalapova</span>
                </div>
                <div className="flex gap-6 mt-2 md:mt-0 justify-center md:justify-end w-full md:w-auto">
                    <a href="https://github.com/krismutalapova" className="hover:text-blue-600 transition group"
                        target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub className="inline text-2xl group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://www.linkedin.com/in/kristina-mutalapova/"
                        className="hover:text-blue-600 transition group" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin className="inline text-2xl group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="mailto:kris.mutalapova@pm.me" className="hover:text-[#a259c6] dark:hover:text-[#4b006e] transition group"
                        aria-label="Email">
                        <FaEnvelope className="inline text-2xl group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="/CV.pdf" download className="hover:text-[#a259c6] dark:hover:text-[#4b006e] transition group" aria-label="Download CV (PDF)">
                        <HiOutlineArrowDownTray className="inline text-2xl group-hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>
        </footer>
    );
});

export default Footer;