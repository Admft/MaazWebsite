import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

// Animated page wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

// Animated background patterns
const BackgroundPattern = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <svg className="absolute w-[200%] h-[200%] opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M0 32V0h32" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageWrapper>
            <About />
          </PageWrapper>
        } />
        <Route path="/experience" element={
          <PageWrapper>
            <Experience />
          </PageWrapper>
        } />
        <Route path="/contact" element={
          <PageWrapper>
            <Contact />
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const windowScroll = window.scrollY;
      const scroll = `${(windowScroll / totalScroll) * 100}%`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-stone-50 text-gray-800 font-sans">
        {/* Background Pattern */}
        <BackgroundPattern />
        
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
          <motion.div
            className="h-full bg-gradient-to-r from-red-600 to-red-400"
            style={{ width: scrollProgress }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        {/* Header */}
        <header className="sticky top-0 z-40">
          <div className="absolute inset-0 backdrop-blur-sm bg-stone-50/80" />
          <div className="relative">
            <Navbar />
          </div>
        </header>
        
        {/* Main Content */}
        <main className="relative">
          {/* Decorative Gradients */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full opacity-20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-200 rounded-full opacity-20 blur-3xl" />
          </div>
          
          {/* Content */}
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
            <AnimatedRoutes />
          </div>
        </main>
        
        {/* Footer */}
        <footer className="relative mt-auto py-8 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.p 
              className="text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Crafted with precision and tranquility
            </motion.p>
            <div className="mt-4 flex justify-center gap-4">
              {[
                { name: 'GitHub', url: 'https://github.com/Maazkhan012' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/maazkhan123/' },
                { name: 'Twitter', url: '#' }
              ].map(({ name, url }) => (
                <motion.a
                  key={name}
                  href={url}
                  className="text-sm text-gray-500 hover:text-red-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {name}
                </motion.a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;