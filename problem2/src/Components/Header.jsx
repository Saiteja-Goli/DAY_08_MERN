import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { currentTheme, themes } = useContext(ThemeContext);

  return (
    <header style={{ background: themes[currentTheme].background, color: themes[currentTheme].text }}>
      <h1>My App Header</h1>
    </header>
  );
};

export default Header;
