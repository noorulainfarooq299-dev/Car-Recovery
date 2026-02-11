
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';
import { generateLocalBusinessSchema } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(generateLocalBusinessSchema());
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-dark">
        <Header />
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </div>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
};

export default App;
