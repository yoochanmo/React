import React, { useEffect, useMemo, useState } from 'react';

const Hook04_02useMemo = () => {

  const [count, setCount] = useState(1);
  const [gender, setGender] = useState(true);

  // 1. 기본타입일경우
  // const isGender = gender ? '남성' : '여성'

  // 2. 객체타입일경우
  // const isGender = {
  //   sex:  gender ? '남성' : '여성'
  // }

  // 3. useMemo를 사용했을 경우
  const isGender = useMemo(() => {
    return { sex: gender ? '남성' : '여성' }
  }, [gender])

  useEffect(() => {
    console.log('useEffect가 호출되었습니다!!!')
  }, [isGender])

  return (
    <div>
      <h3>숫자카운트하기</h3>
      <input 
        type="number" 
        value={count}
        onChange={e => setCount(e.target.value)}
      />
      <hr />
      {/* <p>성별 : {isGender}</p>  기본타입일 경우*/}
      <p>성별 : {isGender.sex}</p>  {/* 객체타입이거나 useMemo일 경우*/}
      <button onClick={() => setGender(!gender)}>성별선택</button>
    </div>
  );
};

export default Hook04_02useMemo;