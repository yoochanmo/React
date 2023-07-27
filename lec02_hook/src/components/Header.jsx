import React from 'react';


// 1. Context 적용전 
const Header = ({isDark}) => {
  return (
    <header
      className='header'
      style={{
        backgroundColor: isDark ? 'black' : 'lighgray',
        color: isDark ? 'white' : 'black'
      }}
    >
      <h1>Welcome!!!!</h1>
    </header>
  );
};


// 2. Context 적용후


export default Header;