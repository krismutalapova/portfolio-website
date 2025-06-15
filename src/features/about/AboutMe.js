import React, { useState, useEffect } from 'react';
import { skills, experience, education } from './aboutmeData';
import SkillCard from '../skills/SkillCard';
import ExperienceCard from '../experience/ExperienceCard';
import EducationCard from '../education/EducationCard';

function CollapsiblePanel({ title, children, defaultOpen = false }) {
    const storageKey = `aboutme-panel-open-${title}`;
    const [open, setOpen] = useState(() => {
        const stored = localStorage.getItem(storageKey);
        return stored === null ? defaultOpen : stored === 'true';
    });
    useEffect(() => {
        localStorage.setItem(storageKey, open);
    }, [open, storageKey]);
    return (
        <article
            className={`mb-6 border-2 rounded-2xl ${open ? 'border-[#c9a6e1] dark:border-[#4b006e]' : 'border-transparent'}`}
        >
            <button
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-200 dark:bg-gray-800 rounded-t-2xl focus:outline-none focus:ring-2 focus:ring-[#c9a6e1] dark:focus:ring-[#4b006e] text-left"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={`panel-${title}`}
                aria-label={`Toggle ${title} panel`}
            >
                <span className="font-semibold text-lg text-gray-800 dark:text-white">{title}</span>
                <span className="ml-2 text-xl">{open ? '-' : '+'}</span>
            </button>
            {open && (
                <section
                    id={`panel-${title}`}
                    className="bg-white dark:bg-gray-900 rounded-b-2xl shadow p-4 border-t border-gray-300 dark:border-gray-700"
                >
                    {children}
                </section>
            )}
        </article>
    );
}

function AboutMe() {
    return (
        <section
            className="w-full bg-gray-100 dark:bg-gray-900 py-12 xl:py-20 flex items-center justify-center"
            aria-labelledby="about-me-heading"
        >
            <div className="w-full max-w-4xl px-4 xl:px-0 text-left">
                <h2
                    id="about-me-heading"
                    className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center"
                >
                    About Me
                </h2>
                <p className="text-base md:text-lg xl:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                    I&apos;m a full-stack developer with a passion for building clean, user-focused
                    applications. With experience in both frontend and backend technologies, I enjoy
                    turning ideas into functional, responsive, and elegant digital products. My
                    current interests include React, JavaScript, and all things related to
                    accessible, modern web development.
                </p>
                {/* Skills Panel */}
                <CollapsiblePanel title="Skills" defaultOpen={false}>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                        {skills.map((skill) => (
                            <li key={skill.name} className="w-full">
                                <SkillCard skill={skill} />
                            </li>
                        ))}
                    </ul>
                </CollapsiblePanel>
                {/* Experience Panel */}
                <CollapsiblePanel title="Experience" defaultOpen={false}>
                    <ul className="flex flex-col gap-8">
                        {experience.map((exp) => (
                            <li key={exp.title + exp.company}>
                                <ExperienceCard exp={exp} />
                            </li>
                        ))}
                    </ul>
                </CollapsiblePanel>
                {/* Education Panel */}
                <CollapsiblePanel title="Education" defaultOpen={false}>
                    <ul className="flex flex-col gap-8 mb-4">
                        {education.map((edu) => (
                            <li key={edu.degree + edu.institution}>
                                <EducationCard edu={edu} />
                            </li>
                        ))}
                    </ul>
                </CollapsiblePanel>
            </div>
        </section>
    );
}

export default AboutMe;
