import React, { useEffect } from 'react';
import './styles/globals.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Grid Background Component
const GridBackground = () => (
  <div className="grid-background" />
);

function App() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.offsetTop;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add click listeners to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleClick));

    // Cleanup
    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <div className="App">
      <GridBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;