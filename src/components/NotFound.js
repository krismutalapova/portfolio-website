import React from 'react';

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 sm:px-8">
            <h1 className="text-5xl font-bold mb-4 text-center">404</h1>
            <p className="text-xl mb-8 text-center max-w-xl">Sorry, the page you are looking for does not exist.</p>
            <a href="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Go Home</a>
        </div>
    );
}

export default NotFound;
