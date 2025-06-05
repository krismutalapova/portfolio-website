function Navbar() {
    return (
        <nav className="bg-gray-100 dark:bg-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800 dark:text-white">MyPortfolio</div>
                <ul className="flex space-x-6 text-gray-700 dark:text-gray-300">
                    <li><a href="#about" className="hover:text-blue-500">About</a></li>
                    <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;