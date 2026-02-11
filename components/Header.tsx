
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Shield } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <div className="bg-accent p-2 rounded transform hover:rotate-6 transition-transform">
            <Shield size={24} className="text-black" />
          </div>
          <span className="font-extrabold text-xl md:text-2xl tracking-tighter uppercase text-white">
            RAPID<span className="text-accent italic">RECOVERY</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-accent relative group ${
                location.pathname === link.path ? 'text-accent' : 'text-gray-300'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center space-x-2 bg-accent text-black px-6 py-2.5 rounded font-black uppercase text-xs hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,193,7,0.3)]"
          >
            <Phone size={14} />
            <span>Emergency Call</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-black uppercase tracking-tight ${
                    location.pathname === link.path ? 'text-accent' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="bg-accent text-black px-6 py-4 rounded font-black uppercase text-center text-lg flex items-center justify-center space-x-3"
              >
                <Phone size={20} />
                <span>Call Dispatch Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
