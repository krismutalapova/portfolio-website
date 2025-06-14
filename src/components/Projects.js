import React, { useState, useEffect } from "react";
import todoImage from "../assets/todo.png";
import eruditioImage from "../assets/eruditio.png";
import tappyImage from "../assets/tappy.png";
import portfolioImage from "../assets/portfolio.png";
import zooImage from "../assets/zoo.png";
import Spinner from "./Spinner";
import { FaReact, FaPython, FaMobileAlt } from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";
import TagFilter from "./TagFilter";
import ProjectCard from "./ProjectCard";

const SECTION_IDS = ["about", "projects", "contact"];
const TAG_ALL = "All";

const TAG_ICONS = {
    React: <FaReact title="React" className="mr-1 text-blue-400" />,
    "React Native": <FaMobileAlt title="React Native" className="mr-1 text-green-500" />,
    TypeScript: <SiTypescript title="TypeScript" className="mr-1 text-blue-600" />,
    JavaScript: <SiJavascript title="JavaScript" className="mr-1 text-yellow-400" />,
    Python: <FaPython title="Python" className="mr-1 text-yellow-600" />,
};

const projectData = [
    {
        id: 1,
        title: "Todo App",
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
        link: "https://github.com/krismutalapova/todo-react-native",
        tags: ["React Native", "TypeScript"],
    },
    {
        id: 2,
        title: "Eruditio - Learning Platform",
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
        link: "https://github.com/krismutalapova/eruditio",
        tags: ["React", "TypeScript"],
    },
    {
        id: 3,
        title: "Zoo System Simulation",
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
        link: "https://github.com/krismutalapova/zoo_system_simulation",
        tags: ["Python"],
    },
    {
        id: 4,
        title: "Tappy - Send Gifs to Friends",
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
        link: "https://github.com/Mobbishly/TappyPublic",
        tags: ["React Native", "JavaScript"],
    },
    {
        id: 5,
        title: "Portfolio Site",
        image: portfolioImage,
        description:
            "My personal portfolio site made using React and Tailwind CSS.",
        link: "https://github.com/krismutalapova/portfolio-website",
        tags: ["React", "JavaScript"],
    },
];

function Projects() {
    const [expandedId, setExpandedId] = useState(null);
    const [activeTag, setActiveTag] = useState(() => {
        return localStorage.getItem("activeTag") || TAG_ALL;
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        localStorage.setItem("activeTag", activeTag);
    }, [activeTag]);

    const allTags = [TAG_ALL, ...new Set(projectData.flatMap((p) => p.tags))];
    const tagIcons = TAG_ICONS;

    const allProjects = projectData.length;

    const filteredProjects =
        activeTag === TAG_ALL
            ? projectData
            : projectData.filter((p) => p.tags.includes(activeTag));

    const toggleDescription = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    if (loading) {
        return (
            <section
                id="projects"
                className="py-12 bg-white dark:bg-gray-900 min-h-[300px] flex items-center justify-center"
            >
                <Spinner />
            </section>
        );
    }

    return (
        <section
            className="w-full bg-gray-50 dark:bg-gray-900 py-12 xl:py-20 flex flex-col items-center justify-center"
            aria-labelledby="projects-heading"
        >
            <div className="w-full max-w-6xl px-4 xl:px-0">
                <h2
                    id="projects-heading"
                    className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center"
                >
                    Projects ({filteredProjects.length}/{allProjects})
                </h2>
                <TagFilter
                    allTags={allTags}
                    activeTag={activeTag}
                    setActiveTag={setActiveTag}
                    tagIcons={tagIcons}
                />
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <li key={project.id}>
                            <ProjectCard
                                project={project}
                                expandedId={expandedId}
                                toggleDescription={toggleDescription}
                                techIcons={TAG_ICONS}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Projects;
