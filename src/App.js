import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <>
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="sr-only focus:not-sr-only absolute left-2 top-2 bg-blue-600 text-white px-4 py-2 rounded z-50">Skip to main content</a>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main id="main-content" className="flex-1 flex flex-col" tabIndex={-1}>
          <Header />
          <AboutMe />
          <Projects />
          <ScrollToTop />
        </main>
        <Footer />
        <div className="fixed bottom-4 right-4 z-50">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}

export default App;