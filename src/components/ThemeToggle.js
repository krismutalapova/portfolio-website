import React, { useEffect, useState } from 'react';

const ThemeToggle = React.memo(function ThemeToggle({ position }) {
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

    if (position !== 'inline' && position !== 'menu') return null;

    const btnClass = position === 'inline'
        ? "p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        : "p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition text-2xl";

    return (
        <button
            onClick={toggleTheme}
            className={btnClass}
            aria-label="Toggle theme"
        >
            {darkMode ? '☀️' : '🌙'}
        </button>
    );
});

export default ThemeToggle;