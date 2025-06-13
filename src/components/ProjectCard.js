import React from "react";

function ProjectCard({ project, expandedId, toggleDescription, techIcons }) {
    return (
        <article
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
            aria-labelledby={`project-title-${project.id}`}
        >
            <button
                className="relative w-full h-48 sm:h-56 md:h-48 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => toggleDescription(project.id)}
                tabIndex={0}
                aria-expanded={expandedId === project.id}
                aria-controls={`project-desc-${project.id}`}
                aria-label={
                    expandedId === project.id
                        ? `Hide details for ${project.title}`
                        : `Show details for ${project.title}`
                }
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleDescription(project.id);
                    }
                }}
            >
                <img
                    src={project.image}
                    alt={`Screenshot of ${project.title} project`}
                    className="w-full h-full object-cover group-hover:brightness-75 transition"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm transition-opacity">
                    {expandedId === project.id
                        ? "Click to hide details"
                        : "Click to view details"}
                </div>
            </button>
            <div className="p-4 flex-1 flex flex-col">
                <h3
                    id={`project-title-${project.id}`}
                    className="text-base md:text-lg font-semibold mb-1"
                >
                    {project.title}
                </h3>
                <div className="mt-1 flex flex-wrap gap-2 overflow-x-hidden">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs md:text-sm bg-gray-200 dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 px-2 py-0.5 rounded font-normal cursor-default select-none flex items-center"
                        >
                            {techIcons[tag] || null}
                            {tag}
                        </span>
                    ))}
                </div>
                {expandedId === project.id && (
                    <div
                        id={`project-desc-${project.id}`}
                        className="mt-2 text-gray-700 dark:text-gray-300 space-y-1 text-sm md:text-base"
                    >
                        {project.description.split("\n").map((line, idx) => (
                            <p key={idx}>{line}</p>
                        ))}
                    </div>
                )}
                <div className="mt-4 flex gap-2">
                    {project.link && project.link !== "#" && (
                        <a
                            href={project.link}
                            className="px-3 py-1 bg-[#a259c6] dark:bg-[#4b006e] text-white rounded hover:bg-[#b97fd8] dark:hover:bg-[#2a003b] transition text-xs md:text-sm font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-xs md:text-sm font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Live
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
