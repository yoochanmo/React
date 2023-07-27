import React, { useState, useEffect } from 'react';
const Timer = () => {

  const[curTime, setCurTime] = useState("");

  useEffect(() => {
    // 컴퍼넌트가 마운트될 경우
    // 의존성배열의 변수중 하나라도 변경되었을 경우
    // 의존성배열에 빈배열([])일 경우 한번만 실행
    const timer = setInterval(() => {
      let time = new Date();
      console.log(time.toLocaleDateString() + " " + time.toLocaleTimeString());
      setCurTime(time.toLocaleDateString() + " " + time.toLocaleTimeString());
    }, 1000);

    return () => {
      // 컴퍼넌트가 언마운트되기 직전에 실행
      clearInterval(timer);
      console.log('타이머가 종료되었습니다!!!');
    }
  }, [])

  return (
    <div>
      <p>타이머가 시작되었습니다! 콘솔을 확인하세요!!</p>
      <h5>{curTime}</h5>
    </div>
  );
};

export default Timer;
