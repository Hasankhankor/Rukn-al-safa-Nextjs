// src/utils/translations.js
import en from '../translations/en.json';
import ar from '../translations/ar.json';

export const translations = {
  en,
  ar,
};

export const getTranslation = (language, key) => {
  return translations[language][key] || key;
};
