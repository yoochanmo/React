import React, { useRef, useState } from 'react';

const Hook03_02useRef = () => {

  const countRef = useRef(0);
  let countVar = 0;
  const [renderCount, setRenderCount] = useState(0)
;
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log(`countRef.current = ${countRef.current}`);
  }

  const increaseCountVar = () => {
    countVar = countVar + 1;
    console.log(`countVar = ${countVar}`);
  }

  const doRendering = () => {
    setRenderCount(renderCount + 1);
    console.log(`countRef.current = ${countRef.current} / countVar = ${countVar}`);
  }
  
  const printResults = () => {
    console.log(`countRef.current = ${countRef.current} / countVar = ${countVar}`);
  }

  return (
    <div>
      <p>countRef : {countRef.current}</p>
      <p>countVar : {countVar}</p>
      <button onClick={increaseCountRef}>Ref더하기</button>{'  '}
      <button onClick={increaseCountVar}>Var더하기</button>{'  '}
      <button onClick={doRendering}>Rendering</button>{'  '}
      {/* 랜더링후에 Ref는 출력이 되지만 Var은 출력되지 않는다
          -> 랜더링(즉, 함수가 호출)될 때 컴퍼넌트안에 있는 변수는 초기화가 된다.
          -> Ref는 컴퍼넌트의 전 생애주기에서 값이 유지가 된다.
        */}
      <button onClick={printResults}>Ref, Var값 출력하기</button>{'  '}
    </div>
  );
};

export default Hook03_02useRef;