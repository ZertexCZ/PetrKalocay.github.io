import { useState, useEffect } from 'react';
import { useSections } from '@/hooks/use-sections';
import useIsMobile from '@/hooks/use-mobile';
import MobileMenu from './MobileMenu';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const Navbar = () => {
  const { scrollToSection } = useSections();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Lock/unlock body scroll when menu is open/closed
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-40 py-6 px-6 md:px-12 lg:px-16
          transition-all duration-300
          ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-4' : ''}
        `}
      >
        <div className="container mx-auto flex justify-between items-center">
          <a 
            href="#" 
            className="font-clash font-bold text-lg md:text-xl relative overflow-hidden group"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <span className="inline-block transform transition-transform duration-500 group-hover:-translate-y-full">
              P<span className="text-accent">.</span>K<span className="text-accent">.</span>
            </span>
            <span className="inline-block absolute top-0 left-0 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              Petr<span className="text-accent">.</span><span className="text-accent">Kaločay</span>
            </span>
          </a>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['about', 'skills', 'projects', 'services', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm uppercase tracking-wider font-medium hover:text-accent transition-colors duration-300"
              >
                {(translations as Record<string, Record<string, string>>)[language][section]}
              </button>
            ))}
            <div className="ml-2">
              <LanguageToggle />
            </div>
          </div>
          

          
          <button 
            className="md:hidden flex flex-col space-y-1.5 group"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle menu"
          >
            <span className={`
              w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 
              group-hover:bg-accent
              ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}
            `}></span>
            <span className={`
              w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 
              group-hover:bg-accent
              ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}
            `}></span>
            <span className={`
              w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 
              group-hover:bg-accent
              ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}
            `}></span>
          </button>
        </div>
      </nav>
      
      {isMobile && (
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={handleMobileMenuToggle} 
        />
      )}
    </>
  );
};

export default Navbar;
