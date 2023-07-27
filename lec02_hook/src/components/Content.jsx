import React from 'react';

// 1. Context 적용전
const Content = ({isDark})  => {
  return (
    <header
      className='content'
      style={{
        backgroundColor: isDark ? 'black' : 'lighgray',
        color: isDark ? 'white' : 'black'
      }}
    >
      <p>환영합니다!! 좋은 하루 되세요!!!!</p>
    </header>
  );
};

// 2. Context 적용후

export default Content;