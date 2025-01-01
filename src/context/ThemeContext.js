import React, { createContext, useState, useEffect, useContext } from 'react';
import { themeConfig } from '../components/data';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('theme') || 'default';
  const [themeName, setThemeName] = useState(storedTheme);
  const [theme, setTheme] = useState(themeConfig[storedTheme]);

  const changeTheme = (newTheme) => {
    setThemeName(newTheme);
    setTheme(themeConfig[newTheme]);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'default';
    setThemeName(savedTheme);
    setTheme(themeConfig[savedTheme]);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeName, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
