import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useSections } from '@/hooks/use-sections';
import ThreeScene from '@/components/ThreeScene';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const HeroSection = () => {
  const { scrollToSection } = useSections();
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Vstupní animace
    const tl = gsap.timeline();
    
    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(subHeadingRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4")
    .from(descriptionRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6")
    .from(buttonsRef.current ? Array.from(buttonsRef.current.children) : [], {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    }, "-=0.6");
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      <ThreeScene />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/90 -z-10"></div>
      
      {/* Dynamicky animované tvary na pozadí */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-accent/10 filter blur-3xl animate-pulse"></div>
          <div className="absolute top-[30%] right-[15%] w-72 h-72 rounded-full bg-blue-500/10 filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-[20%] left-[20%] w-80 h-80 rounded-full bg-indigo-500/10 filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-[50%] left-[50%] w-96 h-96 rounded-full bg-accent/5 filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            <h3 ref={subHeadingRef} className="text-lg md:text-xl font-medium text-accent">
              {(translations as any)[language].heroGreeting}
            </h3>
            <h1 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-clash font-bold">
              <span className="block">Petr Kaločay</span>
              <span className="block mt-3">{(translations as any)[language].heroTitle} <span className="text-accent">{(translations as any)[language].heroDeveloper}</span></span>
            </h1>
            <p ref={descriptionRef} className="text-lg md:text-xl text-gray-300 max-w-2xl">
              {(translations as any)[language].heroDescription}
            </p>
            <div ref={buttonsRef} className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-black font-medium rounded-full transition-all duration-300 group"
              >
                {(translations as any)[language].heroButtonProjects}
                <i className="ri-arrow-right-line transform group-hover:translate-x-1 transition-transform duration-300"></i>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent/10 font-medium rounded-full transition-all duration-300"
              >
                {(translations as any)[language].heroButtonContact}
              </button>
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
};

export default HeroSection;
