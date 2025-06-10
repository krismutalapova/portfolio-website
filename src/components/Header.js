import profileImg from '../assets/profile.jpg';

function Header() {
    return (
        <header className="relative flex flex-col md:flex-row items-center justify-center min-h-[60vh] w-full bg-gradient-to-tr from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 overflow-hidden px-4 md:px-0">
            <div className="flex-1 flex justify-center items-center py-8 md:py-0 w-full max-w-4xl mx-auto">
                <div className="relative w-[60vw] max-w-[350px] h-[40vw] max-h-[420px] flex items-end bg-white/80 dark:bg-gray-900/80 rounded-t-[40%] rounded-b-[20px] shadow-xl overflow-hidden">
                    <img
                        src={profileImg}
                        alt="Kristina Mutalapova profile photo"
                        className="w-full h-full object-cover object-top md:object-center rounded-t-[40%] rounded-b-[20px]"
                    />
                </div>
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start justify-center z-10 text-center md:text-left space-y-4 md:space-y-6 w-full max-w-2xl mx-auto px-2">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 dark:text-white break-words">Kristina Mutalapova</h1>
                <p className="text-base sm:text-lg md:text-2xl text-gray-600 dark:text-gray-300 font-medium">Full-Stack Developer</p>
                <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-md mx-auto md:mx-0 break-words">
                    Building accessible, modern web experiences with a passion for clean code and elegant design.
                </p>
                <a
                    href="mailto:kris.mutalapova@pm.me"
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition font-semibold text-base md:text-lg mt-2 max-w-full"
                    style={{ wordBreak: 'break-word' }}
                >
                    Contact Me
                </a>
            </div>
        </header>
    );
}

export default Header;