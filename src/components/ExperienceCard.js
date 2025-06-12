// ExperienceCard.js - displays a single experience entry
function ExperienceCard({ exp }) {
    return (
        <article className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 transition-colors" aria-label={`${exp.title} at ${exp.company}`}>
            <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div>
                    <span className="font-bold text-lg text-gray-800 dark:text-white">{exp.title}</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-300">@ {exp.company}</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period} | {exp.location}</span>
            </header>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-200 text-left">
                {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                ))}
            </ul>
        </article>
    );
}

export default ExperienceCard;
