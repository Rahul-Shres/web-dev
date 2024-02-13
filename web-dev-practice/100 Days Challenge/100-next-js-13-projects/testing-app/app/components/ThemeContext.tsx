"use client";
import React, { useContext, useState,  createContext } from 'react';

//Define the context type
type ThemeContextType = {
    theme: string,
    toggleTheme: () => void;
}
// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
const ThemeProvider: React.FC= ({children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'  ));
    }
    
    const contextValue: ThemeContextType = {
        theme,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeProvider