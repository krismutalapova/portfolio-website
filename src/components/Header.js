import profileImg from '../assets/profile.jpg';

function Header() {
    return (
        <header className="text-center py-8 md:py-12">
            <img
                src={profileImg}
                alt="Kristina Mutalapova profile photo"
                className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full mb-4 shadow-lg object-cover"
            />
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Kristina Mutalapova</h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                Full-Stack Developer | JavaScript & Java Enthusiast
            </p>
        </header>
    );
}

export default Header;