import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Header />
        <AboutMe />
        <Projects />
        <ScrollToTop />
      </div>
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;