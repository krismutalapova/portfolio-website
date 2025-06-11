import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="sr-only focus:not-sr-only absolute left-2 top-2 bg-blue-600 text-white px-4 py-2 rounded z-50">Skip to main content</a>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        <Navbar />
        <main id="main-content" className="flex-1 flex flex-col" tabIndex={-1}>
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <AboutMe />
                <Projects />
                <div id="contact" tabIndex={-1} />
                <ContactForm />
                <ScrollToTop />
              </>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;