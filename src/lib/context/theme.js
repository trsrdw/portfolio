'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);

    // Load from localStorage or prefers-color-scheme
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');

        if (storedTheme === 'dark') {
            setIsDark(true);
        } else if (storedTheme === 'light') {
            setIsDark(false);
        } else {
            // No stored preference: use system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDark(prefersDark);
        }
    }, []);

    // Apply class + store to localStorage when theme changes
    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
