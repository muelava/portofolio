import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const sectionRefs: any = {
    home: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    certificates: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Routes>
        <Route path="/" element={<Home sectionRefs={sectionRefs} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
