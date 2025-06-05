import React from 'react';

function AboutMe() {
    return (
        <section id="about" className="py-12 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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