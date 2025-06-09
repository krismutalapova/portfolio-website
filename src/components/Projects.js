import React, { useState } from 'react';
import todoImage from '../assets/todo.png';
import eruditioImage from '../assets/eruditio.png';
import tappyImage from '../assets/tappy.png';
import portfolioImage from '../assets/portfolio.png';
import zooImage from '../assets/zoo.png';

const projectData = [
    {
        id: 1,
        title: 'Todo App',
        image: todoImage,
        description: `A simple and elegant task management app built with React and styled using Tailwind CSS. 
        Users can add, complete, and delete tasks, with data persisted in localStorage for a seamless experience across sessions.\n
Features:
• Add, delete, and toggle task completion
• Clean and responsive UI with Tailwind
• LocalStorage-based persistence
• Project filtering and interactive task descriptions

Tech stack:
• Frontend: React, Tailwind CSS
• State Management: useState, useEffect
• Storage: localStorage`,
        link: 'https://github.com/krismutalapova/todo-react-native',
        tags: ['React Native', 'TypeScript']
    },
    {
        id: 2,
        title: 'Eruditio - Learning Platform',
        image: eruditioImage,
        description: `Eruditio is a full-stack tutoring platform developed as a final project at Salt. 
        It allows students to find tutors and connect with them through live video calls using WebRTC.

Features:
• Real-time video chat between tutors and students
• User-friendly interface for searching and matching students with tutors
• Persistent chat rooms
• MongoDB-based data storage
• Dockerized architecture with multi-service setup

Tech stack:
• Frontend: ReactJS
• Backend: NodeJS, Express
• Database: MongoDB
• Real-time Communication: WebRTC
• Deployment: Docker, docker-compose`,
        link: 'https://github.com/krismutalapova/eruditio',
        tags: ['React', 'TypeScript']
    },
    {
        id: 3,
        title: 'Zoo System Simulation',
        image: zooImage,
        description: `My first Python application project that uses Object-Oriented Programming to simulate a day at the zoo. 
        You can manage animals and visitors, run daily simulations, save/load zoo state, and interact through a terminal-based menu.

Features:
🐾 Add and manage animals (Lions, Elephants, Giraffes)
👥 Add and manage visitors
📅 Simulate a day at the zoo (eating, sleeping, making sounds, feeding)
💾 Save/load the zoo state using JSON
✅ Unit tests for animals, visitors, and zoo functionality
🎨 Colored and styled terminal output (with colorama)

Tech stack:
• Language: Python 3.8+
• Libraries: colorama, json
• Testing: unittest
• Linting: pylint with .pylintrc configuration`,
        link: 'https://github.com/krismutalapova/zoo_system_simulation',
        tags: ['Python']
    },
    {
        id: 4,
        title: 'Tappy - Send Gifs to Friends',
        image: tappyImage,
        description: `Tappy is a mobile app that allows users to gift other users with "Taps", which can be redeemed for free beverages 
        and pastries at their favorite coffee shops, bars, and restaurants.

Features:
• Firebase authentication (email and password)
• Stripe integration for payments
• Email notifications via Mailgun
• Real-time updates with Firebase Firestore

Tech stack:
• Framework: React Native
• State Management: Redux
• Backend Services: Firebase (Auth, Firestore, Functions)
• Payments: Stripe
• Email: Mailgun`,
        link: 'https://github.com/Mobbishly/TappyPublic',
        tags: ['React Native', 'JavaScript']
    },
    {
        id: 5,
        title: 'Portfolio Site',
        image: portfolioImage,
        description: 'My personal portfolio site made using React and Tailwind CSS.',
        link: '#',
        tags: ['React', 'JavaScript']
    },
];

function Projects() {
    const [expandedId, setExpandedId] = useState(null);
    const [activeTag, setActiveTag] = useState('All');

    const allTags = ['All', ...new Set(projectData.flatMap(p => p.tags))];
    const filteredProjects = activeTag === 'All' ? projectData : projectData.filter(p => p.tags.includes(activeTag));

    const toggleDescription = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="projects" className="py-12 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>

                <div className="flex justify-center mb-8 space-x-4">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(tag)}
                            className={`px-4 py-2 rounded-full ${activeTag === tag
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                                } hover:bg-blue-500 transition`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <div className="relative w-full h-48 cursor-pointer" onClick={() => toggleDescription(project.id)}>
                                <img
                                    src={project.image}
                                    alt={`Screenshot of "${project.title}" project`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-sm transition-opacity">
                                    {expandedId === project.id ? 'Click to hide details' : 'Click to view details'}
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {expandedId === project.id && (
                                    <div className="mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                                        {project.description.split('\n').map((line, idx) => (
                                            <p key={idx}>{line}</p>
                                        ))}
                                    </div>
                                )}
                                <a href={project.link} className="block mt-4 text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;