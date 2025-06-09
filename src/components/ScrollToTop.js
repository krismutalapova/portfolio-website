import React, { useEffect, useState } from 'react';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition z-50"
                aria-label="Scroll to top"
            >
                ↑
            </button>
        )
    );
}

export default ScrollToTop;