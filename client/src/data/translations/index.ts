import { navTranslations } from './nav';
import { heroTranslations } from './hero';
import { aboutTranslations } from './about';
import { skillsTranslations } from './skills';
import { projectsTranslations } from './projects';
import { servicesTranslations } from './services';
import { contactTranslations } from './contact';
import { commonTranslations } from './common';

export const translations = {
  cz: {
    ...navTranslations.cz,
    ...heroTranslations.cz,
    ...aboutTranslations.cz,
    ...skillsTranslations.cz,
    ...projectsTranslations.cz,
    ...servicesTranslations.cz,
    ...contactTranslations.cz,
    ...commonTranslations.cz
  },
  en: {
    ...navTranslations.en,
    ...heroTranslations.en,
    ...aboutTranslations.en,
    ...skillsTranslations.en,
    ...projectsTranslations.en,
    ...servicesTranslations.en,
    ...contactTranslations.en,
    ...commonTranslations.en
  }
};

export type Language = 'cz' | 'en';
export type TranslationKey = keyof typeof translations['cz'];

// Helper function to get translation
export const getTranslation = (language: Language, key: TranslationKey): string => {
  return translations[language][key] || key;
};