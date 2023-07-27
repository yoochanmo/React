import React, { useEffect, useRef } from 'react';

const Hook03_04useRef = () => {

  const inputRef = useRef("");

  useEffect(() => {
    console.log('1. ', inputRef);
    inputRef.current.focus();
  })

  const login = () => {
    alert(`${inputRef.current.value}님 환영합니다!!`);
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} placeholder='user name...'/>
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default Hook03_04useRef;