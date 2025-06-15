function EducationCard({ edu }) {
    return (
        <article className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 transition-colors" aria-label={`${edu.degree}${edu.institution ? ' at ' + edu.institution : ''}`}>
            <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div className="flex flex-col md:flex-row md:items-center">
                    <span className="font-bold text-lg text-gray-800 dark:text-white">{edu.degree}</span>
                    {edu.institution && (
                        <span className="ml-0 md:ml-2 text-gray-600 dark:text-gray-300 block md:inline">@ {edu.institution}</span>
                    )}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">{edu.period} | {edu.location}</span>
            </header>
            {edu.description && edu.description.trim() && (
                <p className="text-gray-700 dark:text-gray-200 text-left mt-2">
                    {edu.description}
                </p>
            )}
        </article>
    );
}

export default EducationCard;
