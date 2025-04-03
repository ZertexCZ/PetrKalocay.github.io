import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { translations } from '@/data/translations';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'cz' ? 'en' : 'cz');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative px-4 py-2 rounded-full overflow-hidden transition-all duration-300 group"
      style={{
        background: 'linear-gradient(145deg, rgba(25, 25, 35, 0.8), rgba(15, 15, 25, 0.9))',
        border: '1px solid rgba(56, 189, 248, 0.1)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Hover effect background */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(145deg, rgba(25, 25, 35, 0.9), rgba(15, 15, 25, 0.95))',
          boxShadow: 'inset 0 0 0 1px rgba(56, 189, 248, 0.2), 0 0 15px rgba(56, 189, 248, 0.1)',
        }}
      />

      {/* Sliding indicator */}
      <motion.div
        className="absolute inset-0 rounded-full bg-accent/20"
        initial={false}
        animate={{
          x: language === 'cz' ? '0%' : '100%',
          width: '50%',
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      />

      {/* Language labels */}
      <div className="relative flex items-center justify-between w-full">
        <span className={`px-2 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${language === 'cz' ? 'text-accent' : 'text-gray-400'}`}>
          CZ
        </span>
        <span className={`px-2 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${language === 'en' ? 'text-accent' : 'text-gray-400'}`}>
          EN
        </span>
      </div>
    </button>
  );
};

export default LanguageToggle;