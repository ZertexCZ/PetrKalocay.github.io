import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'cz' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'cz' || savedLanguage === 'en')) {
      return savedLanguage;
    }
    
    // If no saved language, try to detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('cs')) {
      return 'cz';
    }
    
    // Default to Czech
    return 'cz';
  });

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
    
    // Update HTML lang attribute
    document.documentElement.lang = newLanguage;
    
    // Dispatch custom event for components that need to react to language changes
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: newLanguage } }));
  };

  useEffect(() => {
    // Set initial HTML lang attribute
    document.documentElement.lang = language;

    const handleLanguageChange = (event: CustomEvent) => {
      // This will force components to re-render when language changes
      setLanguageState(event.detail.language);
    };
    
    window.addEventListener('languageChanged', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
  }, [language]);

  const value = { language, setLanguage };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}