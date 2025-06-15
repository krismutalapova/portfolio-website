// App.js - Main application layout and routing
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Header from "../shared/Header";
import AboutMe from "./features/about/AboutMe";
import Projects from "./features/projects/Projects";
import ContactForm from "./features/contact/ContactForm";
import Footer from "../shared/Footer";
import ScrollToTop from "../shared/ScrollToTop";
import NotFound from "./features/notfound/NotFound";

function App() {
  return (
    // Router provides client-side routing for the SPA
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {/* Skip link for keyboard users for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-2 top-2 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        <Navbar />
        {/* Main content area with routing */}
        <main
          id="main-content"
          className="flex-1 flex flex-col"
          tabIndex={-1}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <AboutMe />
                  <Projects />
                  <div id="contact" tabIndex={-1} />
                  <ContactForm />
                  <ScrollToTop />
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
