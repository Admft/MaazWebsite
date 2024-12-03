import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Briefcase, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'About', icon: <Home size={18} /> },
    { path: '/experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { path: '/contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`py-4 px-6 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-light text-gray-900 hover:text-red-600 transition-colors"
          >
            MK
          </Link>

          <div className="flex gap-8">
            {navItems.map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                className="group relative py-2 px-1"
              >
                <div className="flex items-center gap-2 text-gray-600 group-hover:text-red-600 transition-colors">
                  {icon}
                  <span>{label}</span>
                </div>
                
                {/* Active/Hover Indicator */}
                <motion.div
                  initial={false}
                  animate={{
                    width: location.pathname === path ? '100%' : '0%',
                    opacity: location.pathname === path ? 1 : 0,
                  }}
                  className="absolute bottom-0 left-0 h-0.5 bg-red-600 group-hover:w-full group-hover:opacity-100 transition-all duration-300"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-light text-gray-900"
          >
            MK
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-red-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 space-y-2">
            {navItems.map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                  location.pathname === path
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </motion.nav>
  );
};

export default Navbar;