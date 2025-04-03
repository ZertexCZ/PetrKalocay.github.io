import { useState, useEffect, useCallback } from 'react';

export const useSections = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Set up the intersection observer to detect which section is in view
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'education', 'projects', 'services', 'contact'];
    const sectionElements = sectionIds.map(id => document.getElementById(id));
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // Adjust the margins to better detect when a section is in view
      threshold: [0, 0.2, 0.5, 0.8, 1] // Multiple thresholds for more precise detection
    };
    
    const observer = new IntersectionObserver((entries) => {
      // Find the most visible section
      let maxVisibility = 0;
      let mostVisibleSection = activeSection;

      entries.forEach(entry => {
        const visibility = entry.intersectionRatio;
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleSection = entry.target.id;
        }
      });

      // Only update if we have a new most visible section and it's significantly more visible
      if (mostVisibleSection !== activeSection && maxVisibility > 0.2) {
        setActiveSection(mostVisibleSection);
        // Update URL hash without scrolling
        window.history.replaceState(null, '', `#${mostVisibleSection}`);
      }
    }, observerOptions);
    
    sectionElements.forEach(section => {
      if (section) observer.observe(section);
    });
    
    return () => {
      sectionElements.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [activeSection]);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const headerOffset = 80; // Adjust this value based on your header height
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
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
