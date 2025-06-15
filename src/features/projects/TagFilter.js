function TagFilter({ allTags, activeTag, setActiveTag, tagIcons }) {
    return (
        <nav
            aria-label="Project filters"
            className="flex flex-wrap gap-4 justify-center mb-8"
        >
            {allTags.map((tag) => (
                <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`px-4 py-2 rounded-full border-2 font-semibold text-sm md:text-base flex items-center transition
						${activeTag === tag
                            ? "bg-[#c9a6e1] dark:bg-[#4b006e] text-[#4b006e] dark:text-white border-[#c9a6e1] dark:border-[#4b006e]"
                            : "bg-transparent dark:bg-transparent text-[#a259c6] dark:text-[#c9a6e1] border-[#c9a6e1] dark:border-[#4b006e] hover:bg-[#e6d6f3] dark:hover:bg-[#2a003b] hover:text-[#4b006e] dark:hover:text-white"
                        }
					`}
                    aria-pressed={activeTag === tag}
                    aria-label={
                        activeTag === tag
                            ? `Filter: ${tag} (selected)`
                            : `Filter: ${tag}`
                    }
                >
                    {tagIcons[tag] && (
                        <span className="mr-1 flex items-center">{tagIcons[tag]}</span>
                    )}
                    {tag}
                </button>
            ))}
        </nav>
    );
}

export default TagFilter;
