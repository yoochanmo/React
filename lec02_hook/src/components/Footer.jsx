import React from 'react';

// 1. Context 적용전
const Footer = ({isDark, setIsDark})  => {

  const toggleTheme = () => {
    setIsDark(!isDark);
  }
  return (
    <footer
      className='footer'
      style={{
        backgroundColor: isDark ? 'black' : 'lighgray',
      }}
    >
      <button
        className='button'
        onClick={toggleTheme}
      >Dark Mode</button>
    </footer>
  );
};

// 2. Context 적용후


export default Footer;