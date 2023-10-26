"use client";

import React, { useEffect, useState } from "react";
import { createContext } from "react";
// import localStorage from
export const ThemeContext = createContext();
// const value = localStorage.getItem("theme");
 const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
    
  });

  const toggle = ()=>{
    setTheme(theme=='light'?'dark':'light');
  }
useEffect(()=>{
localStorage.setItem('theme',theme);
},[theme]);

  return <ThemeContext.Provider value={{theme,toggle} }>{children}</ThemeContext.Provider>;
};

