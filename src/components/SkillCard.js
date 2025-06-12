// SkillCard.js - displays a single skill with icon, name, and proficiency bar
function SkillCard({ skill }) {
    return (
        <article className="flex flex-col items-center w-full" aria-label={skill.name}>
            <span className="text-4xl mb-2" aria-hidden="true">{skill.icon}</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">{skill.name}</span>
            <div className="w-20 h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden" aria-hidden="true">
                <div
                    className="h-full bg-[#c9a6e1] dark:bg-[#4b006e] rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                    aria-label={`${skill.name} proficiency: ${skill.level}%`}
                ></div>
            </div>
        </article>
    );
}

export default SkillCard;
