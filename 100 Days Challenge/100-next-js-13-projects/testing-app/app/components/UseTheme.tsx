import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';


const UseTheme: React.FC = () => {
    return (
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      );
}

export default UseTheme