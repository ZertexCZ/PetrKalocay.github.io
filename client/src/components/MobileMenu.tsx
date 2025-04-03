import { useSections } from '@/hooks/use-sections';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import LanguageToggle from './LanguageToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { scrollToSection } = useSections();
  const { language } = useLanguage();

  const handleNavigation = (section: string) => {
    if (['about', 'skills', 'projects', 'services', 'contact'].includes(section)) {
      scrollToSection(section as 'about' | 'services' | 'skills' | 'projects' | 'contact');
      onClose();
    }
  };

  return (
    <div 
      className={`
        fixed inset-0 bg-background z-50 flex flex-col justify-center items-center transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'} ml-4`}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl font-bold"
      >
        X
      </button>
      <div className="space-y-8 text-center">
        {['about', 'skills', 'projects', 'services', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => handleNavigation(section)}
            className="text-2xl block font-clash font-semibold hover:text-accent transition-colors duration-300"
          >
            {(translations as Record<string, Record<string, string>>)[language][section]}
          </button>
        ))}
      </div>

      <div className="mt-12 mb-8">
        <LanguageToggle className="justify-center" />
      </div>
      
      <div className="absolute bottom-12 flex space-x-6">
        <a 
          href="https://instagram.com/p.kalocay" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xl hover:text-accent transition-colors duration-300"
        >
          <i className="ri-instagram-line"></i>
        </a>
        <a 
          href="mailto:petrkalocay@gmail.com" 
          className="text-xl hover:text-accent transition-colors duration-300"
        >
          <i className="ri-mail-line"></i>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
