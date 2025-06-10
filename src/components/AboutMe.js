import React from 'react';

function AboutMe() {
    return (
        <section className="w-full bg-gray-100 dark:bg-gray-900 py-12 xl:py-20 flex items-center justify-center">
            <div className="w-full max-w-4xl px-4 xl:px-0 text-center">
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
                <p className="text-base md:text-lg xl:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    I'm a full-stack developer with a passion for building clean, user-focused applications.
                    With experience in both frontend and backend technologies, I enjoy turning ideas into functional,
                    responsive, and elegant digital products. My current interests include React, JavaScript, and all
                    things related to accessible, modern web development.
                </p>
            </div>
        </section>
    );
}

export default AboutMe;