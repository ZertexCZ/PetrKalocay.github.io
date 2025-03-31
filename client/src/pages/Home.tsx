import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import PageIndicator from '@/components/PageIndicator';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import SkillsSection from '@/sections/SkillsSection';
import EducationSection from '@/sections/EducationSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ContactSection from '@/sections/ContactSection';
import Footer from '@/sections/Footer';
import { setupScrollAnimations } from '@/utils/animations';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Initialize all scroll-based animations
    const cleanupAnimations = setupScrollAnimations();
    
    return () => {
      // Clean up all scroll triggers and animations
      cleanupAnimations();
    };
  }, []);

  return (
    <>
      <Navbar />
      <PageIndicator />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
