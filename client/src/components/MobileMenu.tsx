import { useSections } from '@/hooks/use-sections';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { scrollToSection } = useSections();

  const handleNavigation = (section: string) => {
    scrollToSection(section);
    onClose();
  };

  return (
    <div 
      className={`
        fixed inset-0 bg-background z-50 flex flex-col justify-center items-center
        transition-transform duration-500 md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <div className="space-y-8 text-center">
        {['about', 'skills', 'education', 'projects', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => handleNavigation(section)}
            className="text-2xl block font-clash font-semibold hover:text-accent transition-colors duration-300"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
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
