import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiOutlineArrowDownTray } from 'react-icons/hi2';

const SOCIAL_LINKS = [
    {
        href: 'https://github.com/krismutalapova',
        label: 'GitHub',
        icon: <FaGithub className="inline text-2xl group-hover:scale-110 transition-transform" />,
        className: 'hover:text-blue-600 transition group',
        target: '_blank',
        rel: 'noopener noreferrer',
        ariaLabel: 'GitHub',
    },
    {
        href: 'https://www.linkedin.com/in/kristina-mutalapova/',
        label: 'LinkedIn',
        icon: <FaLinkedin className="inline text-2xl group-hover:scale-110 transition-transform" />,
        className: 'hover:text-blue-600 transition group',
        target: '_blank',
        rel: 'noopener noreferrer',
        ariaLabel: 'LinkedIn',
    },
    {
        href: 'mailto:kris.mutalapova@pm.me',
        label: 'Email',
        icon: <FaEnvelope className="inline text-2xl group-hover:scale-110 transition-transform" />,
        className: 'hover:text-[#a259c6] dark:hover:text-[#4b006e] transition group',
        ariaLabel: 'Email',
    },
    {
        href: '/Kristina_Mutalapova_Full-stack_Software_Developer_CV.pdf',
        label: 'Download CV (PDF)',
        icon: (
            <HiOutlineArrowDownTray className="inline text-2xl group-hover:scale-110 transition-transform" />
        ),
        className: 'hover:text-[#a259c6] dark:hover:text-[#4b006e] transition group',
        download: true,
        ariaLabel: 'Download CV (PDF)',
    },
];

const Footer = React.memo(function Footer() {
    return (
        <footer
            className="w-full bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 dark:from-blue-950 dark:via-purple-950 dark:to-gray-950 text-gray-700 dark:text-gray-300 py-8 flex flex-col items-center justify-center mt-12"
            role="contentinfo"
        >
            <div className="w-full max-w-4xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left w-full md:w-auto">
                    <span className="block text-sm md:text-base">
                        © {new Date().getFullYear()} Kristina Mutalapova
                    </span>
                </div>
                <div className="flex gap-6 mt-2 md:mt-0 justify-center md:justify-end w-full md:w-auto">
                    {SOCIAL_LINKS.map(
                        ({ href, label, icon, className, target, rel, ariaLabel, download }) => (
                            <a
                                key={label}
                                href={href}
                                className={className}
                                target={target}
                                rel={rel}
                                aria-label={ariaLabel}
                                download={download}
                            >
                                {icon}
                            </a>
                        )
                    )}
                </div>
            </div>
        </footer>
    );
});

export default Footer;
