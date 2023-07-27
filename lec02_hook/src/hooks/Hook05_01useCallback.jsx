import React, { useCallback, useEffect, useState } from 'react';

// useCallback도 useMemo와 같이 Memoization기법으로 컴퍼넌트를 최적화 시켜주는 hook
// useMemo는 값을 저장한다면 useCallback은 callback함수 자체를 저장한다.
// 즉, 함수를 재사용할 수 있게 한다.
const Hook05_01useCallback = () => {

  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(true)

  // 1. useCallback사용 전
  // const callFunction = () => {
  //   console.log(`callFunction's number = ${count}`);
  //   return;
  // }

  // 2. useCallback사용 후
  // Memoization된 함수의 객체주소를 저장, useEffect가 호출되지 않는다.
  // 빈배열일 경우, count는 메모된 값을 가져오기 때문에 변경되지 않는다.
  // 배열에 count를 의존주입하면 새로운 함수가 Memoization된다.
  const callFunction = useCallback(() => {
    console.log(`callFunction's number = ${count}`);
    return;  
  }, [count])

  useEffect(() => {
    console.log(`useEffet 호출!!!(callFunction이 변경(초기화, 메모리참조주소)되었습니다!!!)`);
  }, [callFunction]);

  return (
    <div>
      <h3>카운터</h3>
      <input type="number" 
        value={count}
        onChange={e => setCount(e.target.value)}
      />
      {/* toggle 상태가 변경되어도 useEffect가 호출되지 않는다.*/}
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>{'  '}
      <button onClick={callFunction}>useCallback함수호출</button>{'  '}
    </div>
  );
};

export default Hook05_01useCallback;