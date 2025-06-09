import React from 'react';

const Footer = React.memo(function Footer() {
    return (
        <footer id="contact" className="bg-gray-100 dark:bg-gray-800 py-8 text-center mt-12 w-full sticky bottom-0" role="contentinfo">
            <div className="text-gray-700 dark:text-gray-300">
                <p className="mb-2">© {new Date().getFullYear()} Kristina Mutalapova</p>
                <div className="space-x-4">
                    <a href="https://github.com/krismutalapova" className="hover:text-blue-500"
                        target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/kristina-mutalapova/"
                        className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="kris.mutalapova@pm.me" className="hover:text-blue-500">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
});

export default Footer;