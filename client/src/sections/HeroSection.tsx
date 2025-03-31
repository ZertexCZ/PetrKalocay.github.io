import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useSections } from '@/hooks/use-sections';
import ThreeScene from '@/components/ThreeScene';

const HeroSection = () => {
  const { scrollToSection } = useSections();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance animation
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
    .from(buttonsRef.current?.children, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    }, "-=0.6")
    .from(scrollIndicatorRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    }, "-=0.2");
    
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
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            <h3 ref={subHeadingRef} className="text-lg md:text-xl font-medium text-accent">
              Hello, I'm
            </h3>
            <h1 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-clash font-bold">
              <span className="block">Petr Kaločay</span>
              <span className="block mt-3">IT Student & <span className="text-accent">Developer</span></span>
            </h1>
            <p ref={descriptionRef} className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Information Technology student with a passion for software development
              and artificial intelligence. Based in Czech Republic.
            </p>
            <div ref={buttonsRef} className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-black font-medium rounded-full transition-all duration-300 group"
              >
                View My Work
                <i className="ri-arrow-right-line transform group-hover:translate-x-1 transition-transform duration-300"></i>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent/10 font-medium rounded-full transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm uppercase tracking-widest mb-2">Scroll down</span>
          <i className="ri-arrow-down-line text-lg"></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
