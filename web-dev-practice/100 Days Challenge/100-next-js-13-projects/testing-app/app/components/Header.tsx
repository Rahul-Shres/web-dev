// Header.tsx
import React from 'react';
import { useTheme } from './ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <h1>ThemeToggle</h1>
      <div>Current theme: {theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
