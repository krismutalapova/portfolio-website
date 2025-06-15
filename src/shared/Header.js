import profileImg from '../assets/profile.jpg';

function Header() {
    return (
        <header className="w-full min-h-[70vh] bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 dark:from-[#1a0023] dark:via-[#4b006e] dark:to-[#0a0010] flex items-center justify-center py-16 xl:py-28">
            <div className="w-full max-w-6xl flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-24 bg-transparent px-4 xl:px-12">
                <div className="flex-shrink-0 flex justify-center items-center mb-8 xl:mb-0">
                    <div className="relative w-[40vw] max-w-[340px] h-[40vw] max-h-[420px] flex items-end bg-white/80 dark:bg-gray-900/80 rounded-t-[40%] rounded-b-[20px] shadow-xl overflow-hidden">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="w-full h-full object-cover object-top xl:object-center rounded-t-[40%] rounded-b-[20px]"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center xl:items-start justify-center text-center xl:text-left space-y-5 xl:space-y-8 w-full max-w-xl">
                    <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-gray-800 dark:text-white break-words">
                        Kristina Mutalapova
                    </h1>
                    <p className="text-lg md:text-2xl xl:text-3xl text-gray-600 dark:text-gray-300 font-medium">
                        Full-Stack Developer
                    </p>
                    <p className="text-base md:text-lg xl:text-xl text-gray-500 dark:text-gray-400 max-w-lg mx-auto xl:mx-0 break-words">
                        Building accessible, modern web experiences with a passion for clean code
                        and elegant design.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full">
                        <a
                            href="mailto:kris.mutalapova@pm.me"
                            className="px-8 py-2 bg-[#c9a6e1] dark:bg-[#bfa8e7] text-white rounded shadow hover:bg-[#a259c6] dark:hover:bg-[#2a003b] transition font-semibold text-base md:text-lg xl:text-xl max-w-full"
                            style={{ wordBreak: 'break-word' }}
                        >
                            Contact Me
                        </a>
                        <a
                            href="/CV.pdf"
                            download
                            className="px-8 py-2 bg-gray-700 text-white rounded shadow hover:bg-[#a259c6] dark:hover:bg-[#4b006e] dark:hover:border dark:hover:border-white transition font-semibold text-base md:text-lg xl:text-xl max-w-full"
                            style={{ wordBreak: 'break-word' }}
                            aria-label="Download my CV as PDF"
                        >
                            Download my CV
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
