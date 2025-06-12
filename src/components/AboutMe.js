// AboutMe.js - About Me section with collapsible panels for Skills, Experience, and Education
import React, { useState, useEffect } from "react";
import { skills, experience, education } from "./aboutmeData";

// CollapsiblePanel is a reusable component for expandable/collapsible sections
function CollapsiblePanel({ title, children, defaultOpen = false }) {
    const storageKey = `aboutme-panel-open-${title}`;
    // Persist open/close state in localStorage for user experience
    const [open, setOpen] = useState(() => {
        const stored = localStorage.getItem(storageKey);
        return stored === null ? defaultOpen : stored === "true";
    });
    useEffect(() => {
        localStorage.setItem(storageKey, open);
    }, [open, storageKey]);
    return (
        <div
            className={`mb-6 border-2 rounded-2xl ${open ? "border-[#c9a6e1] dark:border-[#4b006e]" : "border-transparent"}`}
        >
            <button
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-200 dark:bg-gray-800 rounded-t-2xl focus:outline-none focus:ring-2 focus:ring-[#c9a6e1] dark:focus:ring-[#4b006e] text-left"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={`panel-${title}`}
            >
                <span className="font-semibold text-lg text-gray-800 dark:text-white">
                    {title}
                </span>
                <span className="ml-2 text-xl">{open ? "-" : "+"}</span>
            </button>
            {open && (
                <div
                    id={`panel-${title}`}
                    className="bg-white dark:bg-gray-900 rounded-b-2xl shadow p-4 border-t border-gray-300 dark:border-gray-700"
                >
                    {children}
                </div>
            )}
        </div>
    );
}

function AboutMe() {
    return (
        <section className="w-full bg-gray-100 dark:bg-gray-900 py-12 xl:py-20 flex items-center justify-center">
            <div className="w-full max-w-4xl px-4 xl:px-0 text-left">
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                    About Me
                </h2>
                <p className="text-base md:text-lg xl:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                    I'm a full-stack developer with a passion for building clean,
                    user-focused applications. With experience in both frontend and
                    backend technologies, I enjoy turning ideas into functional,
                    responsive, and elegant digital products. My current interests include
                    React, JavaScript, and all things related to accessible, modern web
                    development.
                </p>
                {/* Skills Panel */}
                <CollapsiblePanel title="Skills" defaultOpen={false}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex flex-col items-center w-full"
                            >
                                <span className="text-4xl mb-2">{skill.icon}</span>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                    {skill.name}
                                </span>
                                <div className="w-20 h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#c9a6e1] dark:bg-[#4b006e] rounded-full transition-all duration-500"
                                        style={{ width: `${skill.level}%` }}
                                        aria-label={`${skill.name} proficiency: ${skill.level}%`}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CollapsiblePanel>
                {/* Experience Panel */}
                <CollapsiblePanel title="Experience" defaultOpen={false}>
                    <div className="flex flex-col gap-8">
                        {experience.map((exp, idx) => (
                            <div
                                key={exp.title + exp.company}
                                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                    <div>
                                        <span className="font-bold text-lg text-gray-800 dark:text-white">
                                            {exp.title}
                                        </span>
                                        <span className="ml-2 text-gray-600 dark:text-gray-300">
                                            @ {exp.company}
                                        </span>
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {exp.period} | {exp.location}
                                    </span>
                                </div>
                                <ul className="list-disc ml-5 text-gray-700 dark:text-gray-200 text-left">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </CollapsiblePanel>
                {/* Education Panel */}
                <CollapsiblePanel title="Education" defaultOpen={false}>
                    <div className="flex flex-col gap-8 mb-4">
                        {education.map((edu) => (
                            <div
                                key={edu.degree + edu.institution}
                                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                    <div className="flex flex-col md:flex-row md:items-center">
                                        <span className="font-bold text-lg text-gray-800 dark:text-white">
                                            {edu.degree}
                                        </span>
                                        {edu.institution && (
                                            <span className="ml-0 md:ml-2 text-gray-600 dark:text-gray-300 block md:inline">
                                                @ {edu.institution}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                                        {edu.period} | {edu.location}
                                    </span>
                                </div>
                                {edu.description && edu.description.trim() && (
                                    <p className="text-gray-700 dark:text-gray-200 text-left mt-2">
                                        {edu.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </CollapsiblePanel>
            </div>
        </section>
    );
}

export default AboutMe;
