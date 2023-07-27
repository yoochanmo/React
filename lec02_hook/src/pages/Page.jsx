import React from 'react';
import './page.css'
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

// 1. Context 적용전
const Page = ({isDark, setIsDark}) => {
  return (
    <div className='page'>
      <Header isDark={isDark}/>
      <Content isDark={isDark}/>
      <Footer isDark={isDark} setIsDark={setIsDark}/>
    </div>
  );
};

// 2. Context 적용후

export default Page;