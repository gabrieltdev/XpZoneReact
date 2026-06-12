import { useState, useEffect} from 'react';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider = ({ children }) => {
const [lang, setLang] = useState(() => {
const storedLang = localStorage.getItem("lang");

  return storedLang ? storedLang : "pt-br";
});

useEffect(() => {
  localStorage.setItem("lang", lang);
}, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};