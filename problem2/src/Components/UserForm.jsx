import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


const UserForm = () => {
  const { currentTheme, themes } = useContext(ThemeContext);

  return (
    <form style={{ background: themes[currentTheme].background, color: themes[currentTheme].text }}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
