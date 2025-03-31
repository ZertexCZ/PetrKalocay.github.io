import { useState, useEffect, useCallback } from 'react';

export const useSections = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Set up the intersection observer to detect which section is in view
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
    const sectionElements = sectionIds.map(id => document.getElementById(id));
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          // Update URL hash without scrolling
          window.history.replaceState(null, '', `#${entry.target.id}`);
        }
      });
    }, observerOptions);
    
    sectionElements.forEach(section => {
      if (section) observer.observe(section);
    });
    
    return () => {
      sectionElements.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }, []);

  // On initial load, scroll to the section in the URL hash if it exists
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      // Slight delay to allow page to render fully
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, [scrollToSection]);

  return { activeSection, scrollToSection };
};
