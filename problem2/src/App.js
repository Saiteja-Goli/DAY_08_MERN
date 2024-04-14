import React from 'react';
import ThemeSwitcher from './Components/ThemeSwitcher';
import Header from './Components/Header';
import UserForm from './Components/UserForm';
import { ThemeProvider } from './Components/ThemeContext';


const App = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemeSwitcher />
        <Header />
        <UserForm />
      </div>
    </ThemeProvider>
  );
};

export default App;
