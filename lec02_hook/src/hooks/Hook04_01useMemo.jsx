import React, { useMemo, useState } from 'react';

// 컴퍼넌트최적화 : useMemo, useCallback
// useMemo :  동일한 값(Memoization)을 리턴
// 함수형컴퍼넌트 : 랜더링 -> 함수호출 -> 컴퍼넌트의 내부의 모든 변수가 초기화
// 대부분의 컴퍼넌트는 state, props가 변경이 되면 랜더링된다.

function calculate () { return "엄청나게 짱 무거운 작업!!!"}

const havyCaculate = (number) => {
  console.log(`짱 시간걸리는 계산작업`);
  for(let i=0;i<=99999999;i++) {}
  return number + 10000;
}

const easyCalculate = (number) => {
  console.log(`짱 쉬운 계산작업`);
  return number + 1;
}
const Hook04_01useMemo = () => {

  const value = calculate(); // ajax, fetch, axios 비동기처리
  console.log(`짱 무거운 작업 결과 = ${value}`);
  
  const [havyNumber, setHavyNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // const havySum = havyCaculate(havyNumber);
  const havySum = useMemo(() => {
    return havyCaculate(havyNumber)
  }, [havyNumber])

  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>엄청 무거운 작업!!</h3>
      <input 
        type="number" 
        value={havyNumber}
        onChange={(e) => setHavyNumber(parseInt(e.target.value))}  
      />
      <span> + 10000 = {havySum}</span>
      <hr />

      <h3>엄청 가벼운 계산</h3>
      <input 
        type="number" 
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}  
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
};

export default Hook04_01useMemo;