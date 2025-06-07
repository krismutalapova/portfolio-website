import React, { useEffect, useState } from 'react';

const ThemeToggle = React.memo(function ThemeToggle(props) {
    const [darkMode, setDarkMode] = useState(() => {
        const stored = localStorage.getItem('theme');
        return stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-6 left-6 p-3 rounded-full bg-gray-300 dark:bg-gray-700 
            text-gray-900 dark:text-white shadow-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
            {darkMode ? '☀️' : '🌙'}
        </button>
    );
});

export default ThemeToggle;