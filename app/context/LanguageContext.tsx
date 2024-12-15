"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";


// Create a context with default value of 'en' language and a toggle function
const LanguageContext = createContext<{
  language: string;
  toggleLanguage: () => void;
} | undefined>(undefined);

// Custom hook to access the LanguageContext
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Provider component that will wrap your app and provide the context
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
