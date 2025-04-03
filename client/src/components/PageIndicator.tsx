import { useEffect, useState } from 'react';
import { useSections } from '@/hooks/use-sections';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const PageIndicator = () => {
  const { activeSection, scrollToSection } = useSections();
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  const sectionNames = {
    'home': translations[language].home,
    'about': translations[language].about,
    'skills': translations[language].skills,
    'education': translations[language].education,
    'projects': translations[language].projects,
    'services': translations[language].services,
    'contact': translations[language].contact
  };

  useEffect(() => {
    // Show page indicator after a delay to ensure proper calculation
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
      <div className="space-y-4">
        {Object.entries(sectionNames).map(([id, name]) => (
          <div 
            key={id}
            className="relative flex items-center cursor-pointer group"
            onClick={() => scrollToSection(id)}
          >
            <div 
              className={`
                ${activeSection === id ? 'w-2 h-2 bg-accent' : 'w-1 h-1 bg-muted'}
                rounded-full transition-all duration-300
                group-hover:bg-accent
              `}
            />
            <div 
              className={`
                ${activeSection === id ? 'opacity-100' : 'opacity-0'}
                pointer-events-none absolute right-full mr-3 text-sm whitespace-nowrap 
                transition-opacity duration-300 group-hover:opacity-100
              `}
            >
              {name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageIndicator;
